import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendPasswordResetOtpEmail } from '@/lib/mailer'; // Asumsi ada fungsi ini di mailer
import { randomInt } from 'crypto';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

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
    // Jika tidak ada prefix umum, tambahkan 62 (sesuaikan jika perlu)
    return '62' + phone.replace(/\D/g, ''); // Hapus non-digit juga
}

export async function POST(request: Request) {
    try {
        const { identifier, method } = await request.json(); // method: 'email' or 'whatsapp'

        if (!identifier || !method) {
            return NextResponse.json({ message: 'Identifier (email/telepon) dan metode (email/whatsapp) diperlukan' }, { status: 400 });
        }

        if (method !== 'email' && method !== 'whatsapp') {
            return NextResponse.json({ message: 'Metode tidak valid. Gunakan "email" atau "whatsapp".' }, { status: 400 });
        }

        let user;
        const isEmail = identifier.includes('@');
        let normalizedPhone = '';

        if (isEmail) {
            if (method === 'whatsapp') {
                return NextResponse.json({ message: 'Tidak bisa mengirim OTP WhatsApp ke alamat email.' }, { status: 400 });
            }
            user = await prisma.user.findUnique({
                where: { email: identifier },
            });
        } else {
            if (method === 'email') {
                return NextResponse.json({ message: 'Tidak bisa mengirim OTP Email ke nomor telepon.' }, { status: 400 });
            }
            normalizedPhone = normalizePhoneNumber(identifier);
            user = await prisma.user.findUnique({
                where: { phone: normalizedPhone },
            });
        }

        if (!user) {
            return NextResponse.json({ message: 'Pengguna tidak ditemukan' }, { status: 404 });
        }

        // Generate OTP
        const otp = randomInt(1000, 9999).toString(); // 4 digit OTP
        const otpExpires = new Date(Date.now() + 60 * 60 * 1000); // OTP berlaku 60 menit

        await prisma.user.update({
            where: { id: user.id },
            data: {
                otp,
                otpExpires,
            },
        });

        if (method === 'email') {
            if (!user.email) { // Seharusnya tidak terjadi jika identifier adalah email
                return NextResponse.json({ message: 'Email pengguna tidak ditemukan untuk mengirim OTP.' }, { status: 500 });
            }
            const emailResult = await sendPasswordResetOtpEmail(user.email, otp, user.name);
            if (!emailResult.success) {
                console.error('Forgot Password - mailer error:', emailResult.error);
                return NextResponse.json({ message: 'Gagal mengirim OTP ke email. Silakan coba lagi.' }, { status: 500 });
            }
            return NextResponse.json({ message: `OTP telah dikirim ke email ${user.email}. Silakan periksa kotak masuk Anda.` });
        } else if (method === 'whatsapp') {
            if (!user.phone) { // Seharusnya tidak terjadi jika identifier adalah phone
                return NextResponse.json({ message: 'Nomor telepon pengguna tidak ditemukan untuk mengirim OTP.' }, { status: 500 });
            }
            const message = `Your OTP *${otp}* 
Please do not share this code with anyone. The code is valid for 60 minutes.
${process.env.WEBSITE_URL}`;
            await sendWhatsAppMessage(user.phone, message).then((result) => {
                if (!result) {
                    return NextResponse.json({ message: 'Error sending OTP via WhatsApp.' }, { status: 500 });
                }
            });
            return NextResponse.json({ message: `OTP telah dikirim ke WhatsApp ${user.phone}. Silakan periksa pesan Anda.` });
        }

    } catch (error) {
        console.error('Forgot password error:', error);
        return NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 });
    }
}
