import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { withCORS, corsOptionsResponse } from '@/lib/cors';

// Fungsi untuk normalisasi nomor telepon (konsisten dengan signup dan verify-otp)
function normalizePhoneNumber(phone: string): string {
    if (!phone) return '';
    if (phone.startsWith('0')) {
        return '62' + phone.substring(1);
    } else if (phone.startsWith('+62')) {
        return phone.substring(1); // Simpan sebagai 62...
    } else if (phone.startsWith('62')) {
        return phone;
    }
    return '62' + phone.replace(/\D/g, '');
}

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  try {
    const { identifier, otp, newPassword } = await request.json();

    if (!identifier || !otp || !newPassword) {
      return withCORS(NextResponse.json({ message: 'Identifier (email/telepon), OTP, dan kata sandi baru diperlukan' }, { status: 400 }));
    }

    if (newPassword.length < 6) {
        return withCORS(NextResponse.json({ message: 'Kata sandi baru minimal 6 karakter' }, { status: 400 }));
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
      return withCORS(NextResponse.json({ message: 'Pengguna tidak ditemukan' }, { status: 404 }));
    }

    if (user.otp !== otp) {
      return withCORS(NextResponse.json({ message: 'OTP tidak valid' }, { status: 400 }));
    }

    if (user.otpExpires && new Date(user.otpExpires) < new Date()) {
      return withCORS(NextResponse.json({ message: 'OTP sudah kedaluwarsa' }, { status: 400 }));
    }

    // OTP valid, update kata sandi dan hapus OTP
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedNewPassword,
        otp: null,
        otpExpires: null,
        // Pertimbangkan untuk memverifikasi email/telepon di sini jika belum terverifikasi
        // emailVerified: isEmail && !user.emailVerified ? new Date() : user.emailVerified,
        // phoneVerified: !isEmail && !user.phoneVerified ? new Date() : user.phoneVerified,
      },
    });

    return withCORS(NextResponse.json({ message: 'Kata sandi berhasil direset.' }, { status: 200 }));

  } catch (error) {
    console.error('Reset password error:', error);
    return withCORS(NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 }));
  }
}
