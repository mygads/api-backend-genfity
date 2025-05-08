import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '../../../../generated/prisma'; // Adjusted path
import bcrypt from 'bcryptjs';

// Extend the Session and User types to include 'id'
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      phone?: string | null;
    }
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    password?: string | null;
    phone?: string | null;
  }
}

const prisma = new PrismaClient();

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

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: "Email atau Nomor WhatsApp", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) {
          throw new Error('Email/Telepon dan kata sandi diperlukan.');
        }

        const { identifier, password } = credentials;
        let user;
        const isEmail = identifier.includes('@');

        if (isEmail) {
          user = await prisma.user.findUnique({
            where: { email: identifier }
          });
        } else {
          const normalizedPhone = normalizePhoneNumber(identifier);
          user = await prisma.user.findUnique({
            where: { phone: normalizedPhone }
          });
        }

        if (!user) {
          throw new Error('Pengguna tidak ditemukan.');
        }

        // Periksa apakah akun sudah diverifikasi
        if (isEmail && !user.emailVerified) {
          throw new Error('Email belum diverifikasi. Silakan cek email Anda untuk link verifikasi atau daftar ulang untuk OTP WhatsApp.');
        }
        if (!isEmail && !user.phoneVerified) {
          throw new Error('Nomor WhatsApp belum diverifikasi. Silakan selesaikan proses OTP.');
        }

        if (!user.password) {
          throw new Error('Konfigurasi akun tidak lengkap (tidak ada kata sandi).');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error('Kata sandi salah.');
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          // Anda bisa menambahkan field custom lain di sini jika diperlukan oleh sesi
          phone: user.phone,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 hari (opsional)
  },
  pages: {
    signIn: '/auth/signin',
    // ...halaman lain jika ada
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Define a custom type for user with phone property
        type CustomUser = typeof user & { phone?: string | null };
        const customUser = user as CustomUser;
        if (customUser.phone) {
            (token as { [key: string]: unknown }).phone = customUser.phone;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        // Tambahkan field custom ke sesi jika ada di token
        interface CustomToken {
            id?: string;
            phone?: string | null;
            [key: string]: unknown;
        }
        const customToken = token as CustomToken;
        if (customToken.phone) {
            session.user.phone = customToken.phone;
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
