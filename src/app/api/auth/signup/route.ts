import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

// Fungsi untuk menghasilkan OTP 6 digit
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Fungsi untuk mengirim OTP via WhatsApp
async function sendOtpViaWhatsApp(phoneNumber: string, otp: string) {
  const WA_URL = process.env.WHATSAPP_API_ENDPOINT;
  const CHAT_ID_SUFFIX = '@c.us';
  const formattedPhoneNumber = phoneNumber.startsWith('62') ? phoneNumber : `62${phoneNumber.substring(1)}`;

  if (!WA_URL) {
    console.error(`WHATSAPP_API_ENDPOINT is not defined.`);
    return false;
  }

  try {
    const response = await fetch(WA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
      },
      body: JSON.stringify({
        chatId: `${formattedPhoneNumber}${CHAT_ID_SUFFIX}`,
        contentType: "string",
        content: `Kode OTP Anda adalah: ${otp}. Jangan bagikan kode ini kepada siapa pun. Kode ini berlaku selama 1 jam.`,
      }),
    });

    if (!response.ok) {
      // Coba parsing error response sebagai JSON, jika gagal, gunakan status text
      let errorData = { message: response.statusText };
      try {
        errorData = await response.json();
      } catch (e) {
        // Biarkan errorData seperti semula jika parsing gagal
      }
      console.error('WhatsApp API error:', response.status, errorData);
      return false;
    }
    console.log('OTP sent successfully via WhatsApp to:', formattedPhoneNumber);
    return true;
  } catch (error) {
    console.error('Error sending OTP via WhatsApp:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { email, phone, password, name } = await request.json();

    if (!name) {
      return NextResponse.json({ message: 'Nama diperlukan' }, { status: 400 });
    }
    if (!email && !phone) {
      return NextResponse.json({ message: 'Email atau Nomor WhatsApp diperlukan' }, { status: 400 });
    }

    // Validasi format email dan telepon
    if (email && (!email.includes('@') || !email.includes('.'))) {
      return NextResponse.json({ message: 'Format email tidak valid.' }, { status: 400 });
    }
    if (phone && !/^(\\+?62|0)8[1-9][0-9]{6,10}$/.test(phone)) {
        return NextResponse.json({ message: 'Format nomor WhatsApp tidak valid.' }, { status: 400 });
    }

    let normalizedPhone: string | undefined = undefined;
    if (phone) {
        if (phone.startsWith('0')) {
            normalizedPhone = '62' + phone.substring(1);
        } else if (phone.startsWith('+62')) {
            normalizedPhone = phone.substring(1); // Simpan sebagai 62...
        } else if (phone.startsWith('62')) {
            normalizedPhone = phone;
        } else {
            normalizedPhone = '62' + phone.replace(/\\D/g, '');
        }
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
            return NextResponse.json({ message }, { status: 409 });
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
            return NextResponse.json({ message: 'Password diperlukan jika mendaftar dengan email saja' }, { status: 400 });
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
      },
    });

    let responseMessage = 'Pengguna berhasil dibuat.';
    let nextStep = '';

    if (normalizedPhone && otp) {
      // Kirim OTP via WhatsApp secara asinkron
      sendOtpViaWhatsApp(normalizedPhone, otp).then(otpSent => {
        if (otpSent) {
          console.log(`SIGNUP API ASYNC: OTP sent to ${normalizedPhone}`);
        } else {
          console.warn(`SIGNUP API ASYNC: OTP sending failed for ${normalizedPhone}.`);
          // Pertimbangkan untuk memberi tahu user di response jika OTP gagal kirim,
          // atau biarkan mereka request ulang jika ada fitur resend OTP.
        }
      }).catch(otpError => {
        console.error('SIGNUP API ASYNC: OTP sending threw an error:', otpError);
      });
      responseMessage = 'Pengguna berhasil dibuat. Silakan cek WhatsApp Anda untuk kode OTP.';
      nextStep = 'VERIFY_OTP';
    } else if (email) {
        responseMessage = 'Pengguna berhasil dibuat';
        // Kirim email verifikasi di sini jika diperlukan (menggunakan fungsi mailer.ts Anda)
        // await sendVerificationEmail(email, emailVerificationToken);
        nextStep = 'LOGIN_THEN_VERIFY_EMAIL'; // Atau LOGIN jika verifikasi email tidak block login
    } else {
        // Fallback, seharusnya tidak terjadi jika validasi di awal benar
        responseMessage = 'Pengguna berhasil dibuat.';
        nextStep = 'LOGIN';
    }
    
    return NextResponse.json(
        { 
            message: responseMessage,
            userId: newUser.id, // userId mungkin berguna untuk client
            nextStep: nextStep 
        },
        { status: 201 }
    );

  } catch (error) {
    console.error('SIGNUP API: Error in POST handler:', error);
    // Tangani Prisma unique constraint errors lebih spesifik jika perlu
    if (error instanceof Error && 'code' in error && (error as any).code === 'P2002') {
        // error.meta.target berisi field yang menyebabkan unique constraint violation
        const target = (error as any).meta?.target as string[] | undefined;
        if (target?.includes('email')) {
            return NextResponse.json({ message: 'Email sudah terdaftar.' }, { status: 409 });
        }
        if (target?.includes('phone')) {
            return NextResponse.json({ message: 'Nomor WhatsApp sudah terdaftar.' }, { status: 409 });
        }
        return NextResponse.json({ message: 'Data unik sudah ada.' }, { status: 409 });
    }
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
