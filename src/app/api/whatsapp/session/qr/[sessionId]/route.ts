import { NextResponse } from 'next/server';
import { waFetch } from '@/lib/whatsapp-services';
import QRCode from 'qrcode';

// POST /api/whatsapp/session/qr/[sessionId]
export async function POST(request: Request, { params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params;
  try {
    const qrRes = await waFetch(`/session/qr/${sessionId}`);
    // Jika qrRes.qr ada, encode ke data:image/png;base64
    let qrImage: string | null = null;
    if (qrRes && qrRes.qr) {
      qrImage = await QRCode.toDataURL(qrRes.qr);
    }
    return NextResponse.json({ sessionId, ...qrRes, qrImage });
  } catch (e) {
    return NextResponse.json({ sessionId, error: (e as Error).message }, { status: 500 });
  }
}
