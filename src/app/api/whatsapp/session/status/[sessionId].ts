import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const WA_API = process.env.WHATSAPP_SERVER_API;
const API_KEY = process.env.WHATSAPP_API_KEY;

async function waFetch(path: string) {
  const res = await fetch(`${WA_API}${path}`, {
    method: 'GET',
    headers: { 'access-token': API_KEY ? `Bearer ${API_KEY}` : '' },
  });
  return res.json();
}

// GET /api/whatsapp/session/status/[sessionId]
export async function GET(request: Request, { params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  try {
    const statusRes = await waFetch(`/session/status/${sessionId}`);
    await prisma.whatsAppSession.update({ where: { sessionId }, data: { status: statusRes.state } });
    return NextResponse.json({ sessionId, ...statusRes });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
