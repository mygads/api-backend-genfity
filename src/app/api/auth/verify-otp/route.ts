import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { encode } from 'next-auth/jwt';
import { authOptions } from '../[...nextauth]/route'; // Impor authOptions

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
      user = await prisma.user.findUnique({
        where: { email: identifier },
      });
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

    // OTP valid, update pengguna
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        phoneVerified: !isEmail ? new Date() : user.phoneVerified,
        emailVerified: isEmail ? new Date() : user.emailVerified,
        otp: null,
        otpExpires: null,
      },
    });

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
      message: 'Verifikasi berhasil. Anda sekarang sudah login.',
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
