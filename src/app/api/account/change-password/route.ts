import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { withCORS, corsOptionsResponse } from '@/lib/cors';

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return withCORS(NextResponse.json({ message: 'Tidak terautentikasi' }, { status: 401 }));
  }

  try {
    const { currentPassword, newPassword } = await request.json();

    if (!currentPassword || !newPassword) {
      return withCORS(NextResponse.json({ message: 'Kata sandi saat ini dan kata sandi baru diperlukan' }, { status: 400 }));
    }

    if (newPassword.length < 6) {
        return withCORS(NextResponse.json({ message: 'Kata sandi baru minimal 6 karakter' }, { status: 400 }));
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user || !user.password) {
      return withCORS(NextResponse.json({ message: 'Pengguna tidak ditemukan atau tidak memiliki kata sandi (mungkin login via OAuth)' }, { status: 404 }));
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return withCORS(NextResponse.json({ message: 'Kata sandi saat ini salah' }, { status: 403 }));
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: session.user.id },
      data: { password: hashedNewPassword },
    });

    return withCORS(NextResponse.json({ message: 'Kata sandi berhasil diubah' }, { status: 200 }));

  } catch (error) {
    console.error('Change password error:', error);
    return withCORS(NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 }));
  }
}
