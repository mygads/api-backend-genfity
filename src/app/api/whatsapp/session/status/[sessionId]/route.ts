import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import QRCode from 'qrcode';

// GET /api/whatsapp/session/status/[sessionId] - Get real-time session status
export async function GET(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  try {
    const { sessionId } = await params;

    // Get session from database
    const session = await prisma.whatsAppSession.findUnique({
      where: { sessionId },
      select: {
        sessionId: true,
        status: true,
        message: true,
        qr: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!session) {
      return NextResponse.json(
        { success: false, error: "Session not found" },
        { status: 404 }
      );
    }    // Generate QR code image if QR string exists
    let qrImage: string | null = null;
    if (session.qr) {
      try {
        qrImage = await QRCode.toDataURL(session.qr, {
          errorCorrectionLevel: 'M',
          type: 'image/png',
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          width: 256
        });
      } catch (qrError) {
        console.error(`[SESSION_STATUS] Failed to generate QR image for ${sessionId}:`, qrError);
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        ...session,
        qrImage,
        isConnected: session.status === 'session_connected',
        needsQR: session.status === 'qr_generated' && session.qr !== null,
        isLoading: session.status === 'loading' || session.status === 'connecting',
        hasError: session.status === 'auth_failure' || session.status === 'error',
      },
    });
  } catch (error) {
    console.error("[SESSION_STATUS] Error fetching session status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch session status" },
      { status: 500 }
    );
  }
}
