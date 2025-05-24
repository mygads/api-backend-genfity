import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { waFetch } from '@/lib/whatsapp-services';

// POST /api/whatsapp/session/admin/start/[sessionId]
export async function POST(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  // Ambil userId dari request body (atau dari session jika sudah ada auth)
  const body = await request.json().catch(() => ({}));
  const userId = body.userId;
  if (!userId) {
    return NextResponse.json({ error: 'userId is required' }, { status: 400 });
  }
  // Admin: tidak perlu validasi limit session
  try {
    const startRes = await waFetch(`/session/start/${sessionId}`);
    return NextResponse.json({ sessionId, ...startRes });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
