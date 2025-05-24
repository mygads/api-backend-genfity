import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';

// POST /api/whatsapp/session/terminate/[sessionId]
export async function POST(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  try {
    const terminateRes = await waFetch(`/session/terminate/${sessionId}`);
    // await prisma.whatsAppSession.update({ where: { sessionId }, data: { status: 'terminated' } });
    return NextResponse.json({ sessionId, ...terminateRes });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
