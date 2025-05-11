import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendWhatsAppMessage } from '@/lib/whatsapp';
import { normalizePhoneNumber } from '@/lib/auth';
import { randomInt } from 'crypto';

export async function POST(request: Request) {
  try {
    const { identifier } = await request.json();
    if (!identifier) {
      return NextResponse.json({ message: 'Identifier (nomor WhatsApp) diperlukan' }, { status: 400 });
    }
    const normalizedPhone = normalizePhoneNumber(identifier);
    const user = await prisma.user.findUnique({ where: { phone: normalizedPhone } });
    if (!user) {
      return NextResponse.json({ message: 'Pengguna tidak ditemukan' }, { status: 404 });
    }
    // Batasi pengiriman ulang OTP: cek otpExpires
    if (user.otpExpires && new Date(user.otpExpires) > new Date(Date.now() - 59 * 1000)) {
      // Kurang dari 1 menit sejak OTP terakhir
      return NextResponse.json({ message: 'Anda hanya dapat mengirim ulang OTP setelah 1 menit.' }, { status: 429 });
    }
    // Generate OTP baru
    const otp = randomInt(1000, 9999).toString();
    const otpExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 jam
    await prisma.user.update({
      where: { id: user.id },
      data: { otp, otpExpires },
    });
    const message = `Your OTP *${otp}* \nPlease do not share this code with anyone. The code is valid for 60 minutes.`;
    await sendWhatsAppMessage(normalizedPhone, message);
    return NextResponse.json({ message: 'OTP berhasil dikirim ulang.' }, { status: 200 });
  } catch (error) {
    console.error('Resend OTP error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 });
  }
}
