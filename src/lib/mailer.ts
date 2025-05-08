import nodemailer from 'nodemailer';

// Interface untuk opsi email
interface MailOptions {
  from?: string;
  to: string;
  subject: string;
  html: string;
}

export interface MailerResponse {
  success: boolean;
  message?: string;
  error?: unknown;
}

// Konfigurasi transporter Nodemailer (GANTI DENGAN KONFIGURASI ANDA)
// Anda perlu mengatur variabel environment untuk ini atau mengkonfigurasi langsung.
// Contoh menggunakan Gmail (pastikan "Less secure app access" diaktifkan atau gunakan App Password):
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
  secure: process.env.EMAIL_SERVER_PORT === "465",
  auth: {
    user: process.env.EMAIL_SERVER_USER, // Alamat email pengirim
    pass: process.env.EMAIL_SERVER_PASSWORD, // Kata sandi email pengirim atau App Password
  },
});

/**
 * Mengirim email verifikasi.
 * @param email Alamat email penerima.
 * @param token Token verifikasi.
 * @param name Nama pengguna (opsional).
 */
export async function sendVerificationEmail(email: string, token: string, name?: string | null) {
    const verificationLink = `${process.env.NEXTAUTH_URL}/auth/verify-email/${token}`;
    const userName = name || 'User';

    const mailOptions: MailOptions = {
        from: `"GENFITY OFFICIAL" <${process.env.EMAIL_SERVER_USER}>`,
        to: email,
        subject: 'Verifikasi Email Anda - GENFITY',
        html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f6f8fa; padding: 40px 0;">
                <div style="max-width: 520px; margin: auto; background: #fff; border-radius: 18px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); overflow: hidden;">
                    <div style="background: linear-gradient(90deg, #007bff 0%, #00c6ff 100%); padding: 32px 0 16px 0; text-align: center;">
                        <img src="https://raw.githubusercontent.com/your-org/your-app/main/assets/logo.png" alt="GENFITY Logo" style="width: 64px; height: 64px; border-radius: 12px; margin-bottom: 12px;" />
                        <h1 style="color: #fff; font-size: 2rem; margin: 0;">GENFITY</h1>
                    </div>
                    <div style="padding: 32px 32px 24px 32px;">
                        <h2 style="color: #222; font-size: 1.5rem; margin-bottom: 8px;">Halo, ${userName} 👋</h2>
                        <p style="color: #444; font-size: 1.05rem; margin-bottom: 24px;">
                            Terima kasih telah bergabung bersama kami! Untuk mengaktifkan akun Anda, silakan verifikasi email dengan menekan tombol di bawah ini:
                        </p>
                        <div style="text-align: center; margin-bottom: 28px;">
                            <a href="${verificationLink}"
                                style="background: linear-gradient(90deg, #007bff 0%, #00c6ff 100%); color: #fff; font-weight: 600; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-size: 1.1rem; box-shadow: 0 2px 8px rgba(0,123,255,0.12); transition: background 0.2s;">
                                Verifikasi Email Saya
                            </a>
                        </div>
                        <p style="color: #888; font-size: 0.98rem; margin-bottom: 16px;">
                            Atau salin dan tempel link berikut ke browser Anda jika tombol di atas tidak berfungsi:
                        </p>
                        <div style="background: #f1f3f6; padding: 12px 16px; border-radius: 6px; word-break: break-all; font-size: 0.97rem; color: #007bff;">
                            <a href="${verificationLink}" style="color: #007bff; text-decoration: underline;">${verificationLink}</a>
                        </div>
                        <p style="color: #b0b0b0; font-size: 0.93rem; margin-top: 24px;">
                            Link ini berlaku selama <b>1 jam</b>. Jika Anda tidak merasa mendaftar, abaikan email ini.
                        </p>
                        <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 16px 0;" />
                        <p style="color: #aaa; font-size: 0.92rem; text-align: center;">
                            Email ini dikirim otomatis. Jangan balas email ini.<br>
                            &copy; ${new Date().getFullYear()} GENFITY. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        `,
    };

    try {
        if (process.env.NODE_ENV === 'production' || (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD)) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log(`Mailer: MODE PENGEMBANGAN atau KREDENSIAL TIDAK LENGKAP: Email verifikasi TIDAK DIKIRIM.`);
            console.log(`Mailer: Link Verifikasi untuk ${email}: ${verificationLink}`);
        }
        return { success: true };
    } catch (error: unknown) {
        console.error(`Mailer: Gagal mengirim email verifikasi ke ${email}. Error:`, error);
            if (error instanceof Error) {
        }
        return { success: false, error: 'Gagal mengirim email verifikasi.' };
    }
}

/**
 * Placeholder untuk mengirim email reset password.
 * @param email Alamat email penerima.
 * @param token Token reset password.
 */
export async function sendPasswordResetEmail(email: string, token: string) {
    const resetLink = `${process.env.NEXTAUTH_URL}/auth/reset-password/${token}`;
    // Implementasi mirip dengan sendVerificationEmail
    console.log(`MODE PENGEMBANGAN: Link Reset Password untuk ${email}: ${resetLink}`);

    try {
        if (process.env.NODE_ENV === 'production' || (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD)) {
            await transporter.sendMail({
                from: `"GENFITY OFFICIAL" <${process.env.EMAIL_TITLE_USER}>`,
                to: email,
                subject: 'Reset Kata Sandi Akun Anda',
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                        <h2 style="color: #333;">Reset Kata Sandi</h2>
                        <p>Untuk mengatur ulang kata sandi Anda, silakan klik tautan berikut:</p>
                        <a href="${resetLink}" style="color: #007bff;">${resetLink}</a>
                        <p>Jika Anda tidak meminta ini, abaikan email ini.</p>
                    </div>
                `,
            });
            console.log(`Password reset email sent to ${email}`);
        } else {
            console.log(`MODE PENGEMBANGAN: Email reset password TIDAK DIKIRIM. Link untuk ${email}: ${resetLink}`);
        }
    }
    catch (error) {
        console.error(`Error sending password reset email to ${email}:`, error);
        throw new Error('Failed to send password reset email.');
    }
    return { success: true, message: 'Password reset email sent successfully.' };
}

// Fungsi untuk mengirim email OTP Lupa Kata Sandi
export async function sendPasswordResetOtpEmail(email: string, otp: string, userName: string | null): Promise<MailerResponse> {
    const subject = 'Reset Kata Sandi Akun Anda';
    // Konten email bisa lebih informatif
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333;">Reset Kata Sandi</h2>
        <p>Halo ${userName || 'Pengguna'},</p>
        <p>Kami menerima permintaan untuk mereset kata sandi akun Anda.</p>
        <p>Gunakan kode OTP berikut untuk melanjutkan proses reset kata sandi. Kode ini berlaku selama 10 menit:</p>
        <p style="font-size: 24px; font-weight: bold; color: #007bff; text-align: center; letter-spacing: 2px; margin: 20px 0;">
            ${otp}
        </p>
        <p>Jika Anda tidak meminta reset kata sandi, abaikan email ini atau hubungi dukungan kami jika Anda memiliki kekhawatiran.</p>
        <p>Terima kasih.</p>
        <hr style="border: none; border-top: 1px solid #eee;" />
        <p style="font-size: 0.9em; color: #aaa; text-align: center;">Email ini dikirim secara otomatis. Mohon jangan membalas email ini.</p>
        </div>
    `;

    if (process.env.NODE_ENV === 'production' || (process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD)) {
        try {
            await transporter.sendMail({
                from: `"GENFITY OFFICIAL" <${process.env.EMAIL_SERVER_USER}>`,
                to: email,
                subject: subject,
                html: htmlContent,
            });
            console.log(`Password reset OTP email sent to ${email}`);
            return { success: true, message: 'Password reset OTP email sent successfully.' };
        } catch (error) {
            console.error(`Error sending password reset OTP email to ${email}:`, error);
            return { success: false, error, message: 'Failed to send password reset OTP email.' };
        }
    } else {
        console.log(`MODE PENGEMBANGAN: Email OTP reset password TIDAK DIKIRIM. Link untuk ${email}: ${htmlContent}`);
        return { success: true, message: 'Development mode: OTP email not sent.' };
    }
}
