import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';

// POST /api/whatsapp/session/start/[sessionId]
export async function POST(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  try {
    const startRes = await waFetch(`/session/start/${sessionId}`);
    // await prisma.whatsAppSession.upsert({
    //   where: { sessionId },
    //   update: { status: 'starting' },
    //   create: { sessionId, status: 'starting' },
    // });
    return NextResponse.json({ sessionId, ...startRes });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
