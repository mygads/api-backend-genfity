import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

// Fungsi untuk menghasilkan OTP 6 digit
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Fungsi untuk mengirim OTP via WhatsApp (Placeholder - sesuaikan dengan API Ozzie Anda)
async function sendOtpViaWhatsApp(phoneNumber: string, otp: string) {
  const WHATSAPP_API_ENDPOINT = 'https://ozwaretech.com/client/sendMessage/genfity'; // Ganti dengan URL API Ozzie yang benar
  const CHAT_ID_SUFFIX = '@c.us'; // Suffix umum untuk nomor WhatsApp di beberapa API
  const formattedPhoneNumber = phoneNumber.startsWith('62') ? phoneNumber : `62${phoneNumber.substring(1)}`;

  try {
    const response = await fetch(WHATSAPP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: `${formattedPhoneNumber}${CHAT_ID_SUFFIX}`,
        contentType: "string",
        content: `Kode OTP Anda adalah: ${otp}. Jangan bagikan kode ini kepada siapa pun.`,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Ozzie API error:', errorData);
      // Tidak melempar error agar proses signup utama tidak terblokir
      return false;
    }
    console.log('OTP sent successfully via WhatsApp to:', formattedPhoneNumber);
    return true;
  } catch (error) {
    console.error('Error sending OTP via WhatsApp:', error);
    // Tidak melempar error agar proses signup utama tidak terblokir
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { email, phone, password, name } = await request.json();

    // ...existing validation for email, phone, password...
    if ((!email && !phone) || !password) {
      return NextResponse.json({ message: 'Email atau Nomor WhatsApp dan kata sandi diperlukan' }, { status: 400 });
    }

    if (phone && !/^(\+?62|0)8[1-9][0-9]{6,10}$/.test(phone)) {
        return NextResponse.json({ message: 'Format nomor WhatsApp tidak valid.' }, { status: 400 });
    }
    if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return NextResponse.json({ message: 'Format email tidak valid.' }, { status: 400 });
    }

    let normalizedPhone: string | undefined = undefined;
    if (phone) {
        if (phone.startsWith('0')) {
            normalizedPhone = '62' + phone.substring(1);
        } else if (phone.startsWith('+62')) {
            normalizedPhone = phone.substring(1);
        } else if (phone.startsWith('62')) {
            normalizedPhone = phone;
        } else {
            normalizedPhone = '62' + phone.replace(/\D/g, '');
        }
    }

    const orConditions = [];
    if (email) {
        orConditions.push({ email });
    }
    if (normalizedPhone) {
        orConditions.push({ phone: normalizedPhone });
    }

    if (orConditions.length === 0) {
        return NextResponse.json({ message: 'Email atau Nomor WhatsApp diperlukan' }, { status: 400 });
    }

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

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = normalizedPhone ? generateOTP() : null;
    const otpExpires = normalizedPhone ? new Date(Date.now() + 10 * 60 * 1000) : null; // OTP berlaku 10 menit

    // Persiapan untuk token verifikasi email, dibuat tapi tidak langsung dikirim
    let emailVerificationToken: string | null = null;
    let emailVerificationTokenExpires: Date | null = null;
    
    if (email) {
      emailVerificationToken = randomBytes(32).toString('hex');
      emailVerificationTokenExpires = new Date(Date.now() + 3600 * 1000); // Token email berlaku 1 jam
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email: email || null,
        phone: normalizedPhone || null,
        password: hashedPassword,
        otp,
        otpExpires,
        emailVerificationToken, // Disimpan untuk verifikasi nanti
        emailVerificationTokenExpires, // Disimpan untuk verifikasi nanti
      },
    });

    // Pengiriman OTP dilakukan secara asinkron (fire and forget)
    if (normalizedPhone && otp) {
      sendOtpViaWhatsApp(normalizedPhone, otp).then(otpSent => {
        if (otpSent) {
          console.log(`SIGNUP API ASYNC: OTP sent to ${normalizedPhone}`);
        } else {
          console.warn(`SIGNUP API ASYNC: OTP sending failed for ${normalizedPhone}, user should request manually if needed.`);
        }
      }).catch(otpError => {
        console.error('SIGNUP API ASYNC: OTP sending threw an error:', otpError);
      });
    }

    let responseMessage = 'Pengguna berhasil dibuat.';
    let nextStep = '';

    if (normalizedPhone && otp) { // Jika ada nomor telepon, prioritaskan verifikasi OTP
        responseMessage = 'Pengguna berhasil dibuat. Silakan cek WhatsApp Anda untuk kode OTP.';
        nextStep = 'VERIFY_OTP';
    } else if (email) { // Jika tidak ada nomor telepon tapi ada email
        responseMessage = 'Pengguna berhasil dibuat. Anda dapat memverifikasi email Anda nanti di pengaturan akun.';
        nextStep = 'LOGIN_THEN_VERIFY_EMAIL'; // Arahkan untuk login, lalu verifikasi email dari pengaturan
    } else { // Seharusnya tidak terjadi jika validasi di awal benar
        responseMessage = 'Pengguna berhasil dibuat.';
        nextStep = 'LOGIN';
    }
    
    return NextResponse.json(
        { 
            message: responseMessage,
            userId: newUser.id,
            nextStep: nextStep 
        },
        { status: 201 }
    );

  } catch (error) {
    console.error('SIGNUP API: Error in POST handler:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
