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

// DELETE /api/whatsapp/session/terminate/[sessionId]
export async function DELETE(request: Request, { params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  try {
    const terminateRes = await waFetch(`/session/terminate/${sessionId}`);
    await prisma.whatsAppSession.update({ where: { sessionId }, data: { status: 'terminated' } });
    return NextResponse.json({ sessionId, ...terminateRes });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
