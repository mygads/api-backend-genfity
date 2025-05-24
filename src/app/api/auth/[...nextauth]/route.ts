import { authOptions } from '@/lib/auth';
import NextAuth from 'next-auth';
import { withCORS, corsOptionsResponse } from "@/lib/cors";

const handler = NextAuth(authOptions);

export async function OPTIONS() {
  return corsOptionsResponse();
}

// Patch GET and POST to wrap response with CORS
export const GET = async (req: Request, ctx: any) => {
  const res = await handler(req, ctx);
  return withCORS(res);
};

export const POST = async (req: Request, ctx: any) => {
  const res = await handler(req, ctx);
  return withCORS(res);
};
