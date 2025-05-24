import { NextResponse } from "next/server";
import { withCORS, corsOptionsResponse } from "@/lib/cors";

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST(request: Request) {
  // Handler kosong, hanya untuk memastikan CORS preflight lolos
  return withCORS(NextResponse.json({ message: "Not implemented. Use /api/auth/signin for authentication." }, { status: 501 }));
}
