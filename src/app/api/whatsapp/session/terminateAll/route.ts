import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';
import { withCORS, corsOptionsResponse } from '@/lib/cors';

export async function OPTIONS() {
  return corsOptionsResponse();
}

export async function POST() {
  try {
    // Ambil semua sessionId dari database
    const sessions = await prisma.whatsAppSession.findMany();
    const results = [];
    for (const session of sessions) {
      // Terminate via API eksternal
      const terminateRes = await waFetch(`/session/terminate/${session.sessionId}`);
      // Update status di DB
      await prisma.whatsAppSession.update({ where: { sessionId: session.sessionId }, data: { status: 'terminated' } });
      results.push({ sessionId: session.sessionId, ...terminateRes });
    }
    return withCORS(NextResponse.json({ success: true, results }));
  } catch (e) {
    return withCORS(NextResponse.json({ error: (e as Error).message }, { status: 500 }));
  }
}
