import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  context: { params: Promise<Promise<{ token: string }>> } // Params is now a Promise of a Promise
) {
  const promiseParamsObj = await context.params; // First await to get the inner Promise
  const { token } = await promiseParamsObj;    // Second await to get the actual token object

  if (!token) {
    return NextResponse.json({ message: 'Verification token not found.' }, { status: 400 });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        emailVerificationToken: token,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Verification token is invalid or user not found.' }, { status: 400 });
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
      return NextResponse.json({ message: 'Verification token has expired. Please request a new one.' }, { status: 400 });
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
    return NextResponse.json({ message: 'Email has been verified successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email verification error:', error);
    return NextResponse.json({ message: 'Error verifying email' }, { status: 500 });
  }
}
