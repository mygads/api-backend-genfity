import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  context: any // workaround: gunakan any agar lolos build Next.js 15
) {
  const token = context.params.token;

  if (!token) {
    return NextResponse.json({ message: 'Token verifikasi tidak ditemukan.' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Token verifikasi tidak valid atau pengguna tidak ditemukan.' }, { status: 400 });
    }

    if (user.emailVerified) {
        return NextResponse.json({ message: 'Email sudah diverifikasi sebelumnya.' }, { status: 200 });
    }

    if (user.emailVerificationTokenExpires && new Date(user.emailVerificationTokenExpires) < new Date()) {
      // Token sudah kedaluwarsa, kita bisa membersihkannya
      await prisma.user.update({
        where: { id: user.id },
        data: {
          emailVerificationToken: null,
          emailVerificationTokenExpires: null,
        },
      });
      return NextResponse.json({ message: 'Token verifikasi sudah kedaluwarsa. Silakan minta token baru.' }, { status: 400 });
    }

    // Token valid, update pengguna
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: new Date(),
        emailVerificationToken: null, // Hapus token setelah digunakan
        emailVerificationTokenExpires: null,
      },
    });

    // Redirect ke halaman sukses atau halaman login dengan pesan
    // Untuk API, kita kembalikan JSON dan biarkan frontend menangani redirect
    return NextResponse.json({ message: 'Email berhasil diverifikasi. Anda sekarang dapat login.' }, { status: 200 });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan internal saat verifikasi email.' }, { status: 500 });
  }
}
