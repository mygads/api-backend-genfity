import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';
import { sendWhatsAppMessage } from '@/lib/whatsapp'; // Import baru
import { sendVerificationEmail } from '@/lib/mailer';
import { normalizePhoneNumber } from '@/lib/auth';
import { withCORS, corsOptionsResponse } from "@/lib/cors";

// Fungsi untuk menghasilkan OTP 6 digit
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  try {
    const { email, phone, password, name } = await request.json();

    if (!name) {
      return withCORS(NextResponse.json({ message: 'Nama diperlukan' }, { status: 400 }));
    }
    if (!email && !phone) {
      return withCORS(NextResponse.json({ message: 'Email atau Nomor WhatsApp diperlukan' }, { status: 400 }));
    }

    // Validasi format email dan telepon
    if (email && (!email.includes('@') || !email.includes('.'))) {
      return withCORS(NextResponse.json({ message: 'Format email tidak valid.' }, { status: 400 }));
    }
    if (phone && !/^(\\+?62|0)8[1-9][0-9]{6,10}$/.test(phone)) {
        return withCORS(NextResponse.json({ message: 'Format nomor WhatsApp tidak valid.' }, { status: 400 }));
    }

    let normalizedPhone: string | undefined = undefined;
    if (phone) {
        normalizedPhone = normalizePhoneNumber(phone);
    }

    // Cek existing user
    const orConditions = [];
    if (email) {
        orConditions.push({ email });
    }
    if (normalizedPhone) {
        orConditions.push({ phone: normalizedPhone });
    }

    if (orConditions.length > 0) { // Hanya cek jika ada email atau phone
        const existingUser = await prisma.user.findFirst({
            where: { OR: orConditions },
        });

        if (existingUser) {
            let message = '';
            if (email && existingUser.email === email && normalizedPhone && existingUser.phone === normalizedPhone) {
                message = 'Email dan Nomor WhatsApp sudah terdaftar';
            } else if (email && existingUser.email === email) {
                message = 'Email sudah terdaftar';
            } else if (normalizedPhone && existingUser.phone === normalizedPhone) {
                message = 'Nomor WhatsApp sudah terdaftar';
            }
            return withCORS(NextResponse.json({ message }, { status: 409 }));
        }
    }
    
    let hashedPassword: string | null = null;
    let otp: string | null = null;
    let otpExpires: Date | null = null;
    let otpVerificationDeadline: Date | null = null;
    let emailVerificationToken: string | null = null;
    let emailVerificationTokenExpires: Date | null = null;

    if (phone) { // User is signing up with a phone number
        otp = generateOTP();
        // OTP berlaku 1 jam
        otpExpires = new Date(Date.now() + 1 * 60 * 60 * 1000); 
        // Batas verifikasi 1 jam
        otpVerificationDeadline = new Date(Date.now() + 1 * 60 * 60 * 1000); 

        if (password) { // User provided a password along with phone
            hashedPassword = await bcrypt.hash(password, 10);
        }
        // If password is not provided with phone, hashedPassword remains null.
        // A temporary password will be generated and set after OTP verification.
    } else if (email) { // User is signing up with email only (no phone)
        if (!password) {
            return withCORS(NextResponse.json({ message: 'Password diperlukan jika mendaftar dengan email saja' }, { status: 400 }));
        }
        hashedPassword = await bcrypt.hash(password, 10);
        // Setup token verifikasi email
        emailVerificationToken = randomBytes(32).toString('hex');
        emailVerificationTokenExpires = new Date(Date.now() + 3600 * 1000); // Token email berlaku 1 jam
    }
    // Jika tidak ada phone dan tidak ada email, validasi di awal sudah menangani

    const newUser = await prisma.user.create({
      data: {
        name,
        email: email || null,
        phone: normalizedPhone || null,
        password: hashedPassword, // Bisa null jika phone disediakan
        otp,
        otpExpires,
        otpVerificationDeadline, // Simpan deadline
        emailVerificationToken,
        emailVerificationTokenExpires,
        role: 'customer', // Set default role
      },
    });

    let responseMessage = 'Pengguna berhasil dibuat.';
    let nextStep = '';

    if (normalizedPhone && otp) {
      // Kirim OTP via WhatsApp secara asinkron
      const message = `Your OTP *${otp}* 
Please do not share this code with anyone. The code is valid for 60 minutes.`;
      sendWhatsAppMessage(normalizedPhone, message).then(otpSent => {
        if (otpSent) {
          console.log(`SIGNUP API ASYNC: OTP sent to ${normalizedPhone}`);
        } else {
          console.warn(`SIGNUP API ASYNC: OTP sending failed for ${normalizedPhone}.`);
          // Log additional info for debugging
          console.warn('Possible reasons: invalid phone number, WhatsApp API error, or quota exceeded.');
          // Pertimbangkan untuk memberi tahu user di response jika OTP gagal kirim,
          // atau biarkan mereka request ulang jika ada fitur resend OTP.
        }
      }).catch(otpError => {
        console.error('SIGNUP API ASYNC: OTP sending threw an error:', otpError);
      })
      responseMessage = 'Pengguna berhasil dibuat. Silakan cek WhatsApp Anda untuk kode OTP.';
      nextStep = 'VERIFY_OTP';
    } else if (email) {
        responseMessage = 'Pengguna berhasil dibuat';
        // Kirim email verifikasi di sini jika diperlukan (menggunakan fungsi mailer.ts Anda)
        await sendVerificationEmail(email!, emailVerificationToken!);
        nextStep = 'LOGIN_THEN_VERIFY_EMAIL'; // Atau LOGIN jika verifikasi email tidak block login
    } else {
        // Fallback, seharusnya tidak terjadi jika validasi di awal benar
        responseMessage = 'Pengguna berhasil dibuat.';
        nextStep = 'LOGIN';
    }
    
    return withCORS(
        NextResponse.json(
            { 
                message: responseMessage,
                userId: newUser.id, // userId mungkin berguna untuk client
                nextStep: nextStep 
            },
            { status: 201 }
        )
    );

  } catch (error) {
    console.error('SIGNUP API: Error in POST handler:', error);
    // Tangani Prisma unique constraint errors lebih spesifik jika perlu
    if (error instanceof Error && 'code' in error && (error as any).code === 'P2002') {
        // error.meta.target berisi field yang menyebabkan unique constraint violation
        const target = (error as any).meta?.target as string[] | undefined;
        if (target?.includes('email')) {
            return withCORS(NextResponse.json({ message: 'Email sudah terdaftar.' }, { status: 409 }));
        }
        if (target?.includes('phone')) {
            return withCORS(NextResponse.json({ message: 'Nomor WhatsApp sudah terdaftar.' }, { status: 409 }));
        }
        return withCORS(NextResponse.json({ message: 'Data unik sudah ada.' }, { status: 409 }));
    }
    return withCORS(NextResponse.json({ message: 'Internal server error' }, { status: 500 }));
  }
}
