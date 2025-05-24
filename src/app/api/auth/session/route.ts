import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function GET(request: Request) {
  // Ambil session user
  const session = await getServerSession(authOptions);
  if (!session) {
    return withCORS(NextResponse.json({ authenticated: false, session: null }, { status: 200 }));
  }
  return withCORS(NextResponse.json({ authenticated: true, session }, { status: 200 }));
}

export async function OPTIONS() {
  return corsOptionsResponse();
}
