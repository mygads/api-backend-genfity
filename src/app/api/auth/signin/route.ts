import { NextResponse } from "next/server";
import { withCORS, corsOptionsResponse } from "@/lib/cors";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-key";

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  try {
    const { identifier, password } = await request.json();
    if (!identifier || !password) {
      return withCORS(NextResponse.json({ message: "Identifier dan password diperlukan" }, { status: 400 }));
    }

    // Cari user berdasarkan email atau phone
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone: identifier }
        ]
      }
    });

    if (!user || !user.password) {
      return withCORS(NextResponse.json({ message: "User tidak ditemukan atau belum punya password" }, { status: 404 }));
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return withCORS(NextResponse.json({ message: "Password salah" }, { status: 401 }));
    }

    // Generate JWT mirip NextAuth (payload minimal)
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Kembalikan data user dan token
    // PENTING: Tambahkan header CORS manual jika response bukan NextResponse.json
    const response = NextResponse.json({
      message: "Login berhasil",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    }, { status: 200 });
    return withCORS(response);
  } catch (error) {
    console.error("Signin error:", error);
    return withCORS(NextResponse.json({ message: "Terjadi kesalahan internal" }, { status: 500 }));
  }
}
