import { NextResponse } from "next/server";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

// Simpan blacklist token di memory (untuk demo, production sebaiknya pakai Redis/DB)
const tokenBlacklist = new Set<string>();

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  // Ambil token dari header Authorization: Bearer <token> atau dari cookie (fallback)
  let token = null;
  const authHeader = request.headers.get("authorization");
  if (authHeader) {
    token = authHeader.split(" ")[1];
  } else {
    // Coba ambil dari cookie (misal: next-auth.session-token)
    const cookie = request.headers.get("cookie");
    if (cookie) {
      const match = cookie.match(/next-auth\.session-token=([^;]+)/);
      if (match) token = match[1];
    }
  }

  if (!token) {
    return withCORS(NextResponse.json({ message: "Token tidak ditemukan di header Authorization atau cookie." }, { status: 400 }));
  }

  // Masukkan token ke blacklist
  tokenBlacklist.add(token);
  return withCORS(NextResponse.json({ message: "Logout berhasil. Token di-blacklist di server." }, { status: 200 }));
}
