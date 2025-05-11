import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '../generated/prisma'; // Adjusted path
import bcrypt from 'bcryptjs';

// Extend the Session and User types to include 'id' and 'phone'
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      phone?: string | null; // Added phone
      role?: string | null; // Tambah role
    }
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    password?: string | null;
    phone?: string | null; // Added phone
    phoneVerified?: Date | null; // Added phoneVerified
    emailVerified?: Date | null; // Ensure emailVerified is here if used
    role?: string | null; // Tambah role
  }
}

const prisma = new PrismaClient();

// Fungsi untuk normalisasi nomor telepon
export function normalizePhoneNumber(phone: string): string {
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
            where: { email: identifier },
            select: { id: true, name: true, email: true, image: true, password: true, phone: true, phoneVerified: true, emailVerified: true, role: true },
          });
        } else {
          const normalizedPhone = normalizePhoneNumber(identifier);
          user = await prisma.user.findUnique({
            where: { phone: normalizedPhone },
            select: { id: true, name: true, email: true, image: true, password: true, phone: true, phoneVerified: true, emailVerified: true, role: true },
          });
        }

        if (!user) {
          throw new Error('Pengguna tidak ditemukan.');
        }

        if (isEmail && !user.emailVerified) {
          throw new Error('Email belum diverifikasi. Silakan cek email Anda untuk link verifikasi atau daftar ulang untuk OTP WhatsApp.');
        }
        if (!isEmail && !user.phoneVerified) {
          throw new Error('Nomor WhatsApp belum diverifikasi. Silakan selesaikan proses OTP.');
        }

        if (user.role !== 'admin') {
          throw new Error('Akses hanya untuk admin.');
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
          phone: user.phone, // Make sure to return phone
          role: user.role, // Penting untuk middleware admin
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 hari
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // Cast user to include phone if it exists
        const userWithPhone = user as { phone?: string | null; role?: string | null };
        if (userWithPhone.phone) {
            (token as { [key: string]: unknown }).phone = userWithPhone.phone;
        }
        if (userWithPhone.role) {
            (token as any).role = userWithPhone.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        // Add custom fields to session if they exist in token
        interface CustomToken {
            id?: string;
            phone?: string | null;
            [key: string]: unknown;
        }
        const customToken = token as CustomToken;
        if (customToken.phone) {
            session.user.phone = customToken.phone;
        }
        if ((token as any).role) {
          session.user.role = (token as any).role as string;
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
