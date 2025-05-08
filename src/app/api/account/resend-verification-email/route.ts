import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { sendVerificationEmail } from '@/lib/mailer';
import { randomBytes } from 'crypto';

export async function POST() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json({ message: 'Tidak terautentikasi atau email tidak ditemukan untuk pengguna ini' }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ message: 'Pengguna tidak ditemukan' }, { status: 404 });
    }

    if (user.emailVerified) {
      return NextResponse.json({ message: 'Email sudah diverifikasi sebelumnya' }, { status: 400 });
    }

    // Buat token verifikasi baru
    const emailVerificationToken = randomBytes(32).toString('hex');
    const emailVerificationTokenExpires = new Date(Date.now() + 3600 * 1000); // 1 jam dari sekarang

    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerificationToken,
        emailVerificationTokenExpires,
      },
    });

    // Kirim email verifikasi
    const emailResult = await sendVerificationEmail(user.email!, emailVerificationToken, user.name);

    if (!emailResult.success) {
        // Meskipun gagal kirim email, token sudah di-generate. Pengguna bisa coba lagi.
        // Atau, Anda bisa memutuskan untuk mengembalikan error yang lebih spesifik di sini.
        console.error('Resend verification email - mailer error:', emailResult.error);
        return NextResponse.json({ message: 'Gagal mengirim email verifikasi. Token telah direset, silakan coba lagi.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email verifikasi telah dikirim ulang. Silakan cek kotak masuk Anda.' }, { status: 200 });

  } catch (error) {
    console.error('Resend verification email error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 });
  }
}
