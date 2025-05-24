import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';


// PATCH /api/whatsapp/session/restart/[sessionId]
export async function POST(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  try {
    const restartRes = await waFetch(`/session/restart/${sessionId}`);
    // await prisma.whatsAppSession.update({ where: { sessionId }, data: { status: 'restarting' } });
    return NextResponse.json({ sessionId, ...restartRes });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
