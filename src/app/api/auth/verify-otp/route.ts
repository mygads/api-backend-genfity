import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { encode } from 'next-auth/jwt';
import { authOptions } from '@/lib/auth'; // Updated import path
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';
import { sendWhatsAppMessage } from '@/lib/whatsapp'; // Import baru

// Fungsi untuk normalisasi nomor telepon (konsisten dengan signup)
function normalizePhoneNumber(phone: string): string {
    if (!phone) return '';
    if (phone.startsWith('0')) {
        return '62' + phone.substring(1);
    } else if (phone.startsWith('+62')) {
        return phone.substring(1); // Simpan sebagai 62...
    } else if (phone.startsWith('62')) {
        return phone;
    }
    // Jika tidak ada prefix umum, tambahkan 62 (sesuaikan jika perlu)
    return '62' + phone.replace(/\D/g, ''); // Hapus non-digit juga
}

// Fungsi untuk menghasilkan password acak
function generateRandomPassword(length: number = 8): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export async function POST(request: Request) {
  try {
    const { identifier, otp } = await request.json();

    if (!identifier || !otp) {
      return NextResponse.json({ message: 'Identifier (email/telepon) dan OTP diperlukan' }, { status: 400 });
    }

    let user;
    const isEmail = identifier.includes('@');
    let normalizedPhone = '';

    if (isEmail) {
      // Verifikasi OTP via email tidak diimplementasikan di sini, fokus pada WhatsApp
      // return NextResponse.json({ message: 'Verifikasi OTP via email belum didukung untuk alur ini' }, { status: 400 });
    } else {
      normalizedPhone = normalizePhoneNumber(identifier);
      user = await prisma.user.findUnique({
        where: { phone: normalizedPhone },
      });
    }

    if (!user) {
      return NextResponse.json({ message: 'Pengguna tidak ditemukan' }, { status: 404 });
    }

    if (user.otp !== otp) {
      return NextResponse.json({ message: 'OTP tidak valid' }, { status: 400 });
    }

    if (user.otpExpires && new Date(user.otpExpires) < new Date()) {
      return NextResponse.json({ message: 'OTP sudah kedaluwarsa' }, { status: 400 });
    }

    // OTP valid
    let newPassword = null;
    let hashedPassword = user.password; // Ambil password yang mungkin sudah ada (jika signup via email dulu)

    if (!user.password && user.phone && normalizedPhone === user.phone) { // Hanya buat password jika belum ada DAN ini adalah verifikasi via phone
        newPassword = generateRandomPassword();
        hashedPassword = await bcrypt.hash(newPassword, 10);
    }
    
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        phoneVerified: new Date(),
        otp: null,
        otpExpires: null,
        otpVerificationDeadline: null, // Hapus deadline setelah verifikasi
        password: hashedPassword, // Simpan password baru jika dibuat
      },
    });


    if (newPassword && updatedUser.phone) {
      // Pengguna baru, kirim pesan dengan password sementara
      const welcomeMessage = `Welcome to Genfity, ${updatedUser.name}! Your account has been successfully verified.

Phone Number: ${updatedUser.phone}
Temporary Password: ${newPassword}

Please login at: ${process.env.WEBSITE_URL}
Make sure to change your password immediately for your account's security.`;

      sendWhatsAppMessage(updatedUser.phone, welcomeMessage).catch(err => {
      console.error("Failed to send welcome message via WhatsApp:", err);
      });
    } else if (updatedUser.phone) {
      // Pengguna sudah ada, kirim pesan konfirmasi
      const confirmationMessage = `Hello ${updatedUser.name},

Welcome to Genfity! We're excited to be your trusted partner in business digitalization, helping you grow and build stronger customer trust. As your all-in-one software house and digital agency, we offer innovative solutions tailored for your success.

Feel free to explore our products and exclusive offers on our website!

${process.env.WEBSITE_URL}
    `;
      sendWhatsAppMessage(updatedUser.phone, confirmationMessage).catch(err => {
      console.error("Failed to send confirmation message via WhatsApp:", err);
      });
    }

    // Buat sesi JWT (Login Otomatis)
    const { callbacks } = authOptions;
    const secret = process.env.NEXTAUTH_SECRET;
    if (!secret) {
        console.error('NEXTAUTH_SECRET tidak diatur!');
        return NextResponse.json({ message: 'Konfigurasi server error' }, { status: 500 });
    }

    // Persiapkan payload untuk callback jwt
    // Struktur user object harus sesuai dengan apa yang diharapkan oleh callback jwt Anda
    // dan apa yang biasanya dikembalikan oleh provider atau adapter.
    const userForJwtCallback = {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.image,
        phone: updatedUser.phone, // custom field
    };

    // Token awal sebelum callback jwt (NextAuth biasanya mengisi ini dengan name, email, sub)
    let tokenPayload: Record<string, unknown> = {
        name: updatedUser.name,
        email: updatedUser.email,
        sub: updatedUser.id, // 'sub' adalah standar JWT untuk subject (user ID)
    };

    // Panggil callback jwt jika ada, untuk memodifikasi token
    if (callbacks?.jwt) {
        // Import User and AdapterUser types from next-auth
        // import type { User, AdapterUser } from "next-auth"; (add this at the top if not present)
        tokenPayload = await callbacks.jwt({
          token: tokenPayload,
          user: userForJwtCallback as import("next-auth").User | import("next-auth/adapters").AdapterUser,
          account: null
        });
    }

    const sessionMaxAge = authOptions.session?.maxAge || 30 * 24 * 60 * 60; // Default 30 hari

    const sessionToken = await encode({
      token: tokenPayload,
      secret: secret,
      maxAge: sessionMaxAge,
    });

    const response = NextResponse.json({
      message: 'Verifikasi berhasil.' + (newPassword ? ' Anda sekarang sudah login dan password sementara telah dikirim via WhatsApp.' : ' Anda sekarang sudah login.'),
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        phone: updatedUser.phone,
        name: updatedUser.name,
      }
    }, { status: 200 });

    // Set cookie sesi
    const cookieName = process.env.NEXTAUTH_URL?.startsWith("https://") 
                       ? "__Secure-next-auth.session-token" 
                       : "next-auth.session-token";
    
    response.cookies.set({
      name: cookieName,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NEXTAUTH_URL?.startsWith("https://") || false,
      path: '/',
      sameSite: 'lax',
      maxAge: sessionMaxAge,
    });

    return response;

  } catch (error) {
    console.error('Verify OTP error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
