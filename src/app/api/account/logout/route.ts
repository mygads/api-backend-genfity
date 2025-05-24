import { NextResponse } from "next/server";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

// Simpan blacklist token di memory (untuk demo, production sebaiknya pakai Redis/DB)
const tokenBlacklist = new Set<string>();

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  // Ambil token dari header Authorization: Bearer <token>
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return withCORS(NextResponse.json({ message: "Token tidak ditemukan di header Authorization." }, { status: 400 }));
  }

  // Masukkan token ke blacklist
  tokenBlacklist.add(token);

  return withCORS(NextResponse.json({ message: "Logout berhasil. Token di-blacklist di server." }, { status: 200 }));
}
