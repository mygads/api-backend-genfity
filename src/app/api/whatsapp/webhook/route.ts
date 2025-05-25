import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { verifyWebhookSignature, checkRateLimit, logWebhookEvent } from "@/lib/webhook-security-simple";

// Schema untuk universal webhook (tanpa sessionId di URL)
const UniversalWebhookSchema = z.object({
  sessionId: z.string(),
  event: z.string(),
  data: z.any().optional().default({})
});

// POST /api/whatsapp/webhook - Universal webhook endpoint
export async function POST(request: Request) {
  const clientIP = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';

  try {
    // Rate limiting check
    if (!checkRateLimit(clientIP, 100)) {
      console.warn(`[UNIVERSAL WEBHOOK] Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }

    // Webhook signature validation (if secret is provided)
    const webhookSecret = process.env.WHATSAPP_WEBHOOK_SECRET;
    let body: any;

    if (webhookSecret) {
      const signature = request.headers.get('x-webhook-signature') || 
                       request.headers.get('x-signature-256') ||
                       request.headers.get('x-hub-signature-256');
      
      if (!signature) {
        console.warn('[UNIVERSAL WEBHOOK] Missing webhook signature');
        logWebhookEvent('unknown', 'missing_signature', clientIP, false, 'Missing webhook signature');
        return NextResponse.json(
          { success: false, error: 'Missing webhook signature' },
          { status: 401 }
        );
      }

      const bodyText = await request.text();
      if (!verifyWebhookSignature(bodyText, signature, webhookSecret)) {
        console.warn('[UNIVERSAL WEBHOOK] Invalid webhook signature');
        logWebhookEvent('unknown', 'invalid_signature', clientIP, false, 'Invalid webhook signature');
        return NextResponse.json(
          { success: false, error: 'Invalid webhook signature' },
          { status: 401 }
        );
      }

      body = JSON.parse(bodyText);
    } else {
      body = await request.json();
    }    //    // console.log(`[UNIVERSAL WEBHOOK] Received event:`, body);

    // Validate universal webhook payload
    const validation = UniversalWebhookSchema.safeParse(body);
    if (!validation.success) {
      console.error("[UNIVERSAL WEBHOOK] Invalid payload:", validation.error);
      logWebhookEvent('unknown', 'invalid_payload', clientIP, false, 'Invalid webhook payload');
      return NextResponse.json(
        { success: false, error: "Invalid webhook payload. Required: sessionId, event" },
        { status: 400 }
      );
    }

    const { sessionId, event, data } = validation.data;

    // Process the webhook using the same logic as the sessionId-specific endpoint
    return await processUniversalWebhookEvent(sessionId, event, data, clientIP);

  } catch (error) {
    console.error("[UNIVERSAL WEBHOOK] Error processing webhook:", error);
    
    logWebhookEvent(
      'unknown', 
      'error', 
      clientIP, 
      false, 
      error instanceof Error ? error.message : 'Unknown error'
    );
    
    return NextResponse.json(
      { success: false, error: "Failed to process webhook" },
      { status: 500 }
    );
  }
}

// Process webhook events (same logic as the sessionId-specific endpoint)
async function processUniversalWebhookEvent(sessionId: string, event: string, data: any, clientIP: string) {
  try {
    // console.log(`[UNIVERSAL WEBHOOK] Processing ${event} for session ${sessionId}`);

    // Process different webhook events
    switch (event) {
      case "qr":
        await handleQrEvent(sessionId, data.qr);
        break;

      case "ready":
        await handleReadyEvent(sessionId);
        break;

      case "authenticated":
        await handleAuthenticatedEvent(sessionId);
        break;

      case "disconnected":
        await handleDisconnectedEvent(sessionId, data.reason);
        break;

      case "auth_failure":
        await handleAuthFailureEvent(sessionId, data.msg);
        break;

      case "change_state":
        await handleChangeStateEvent(sessionId, data.state);
        break;

      case "loading_screen":
        await handleLoadingScreenEvent(sessionId, data.percent, data.message);
        break;

      case "message":
      case "message_create":
        await handleMessageEvent(sessionId, data.message);
        break;

      case "message_ack":
        await handleMessageAckEvent(sessionId, data.message, data.ack);
        break;

      case "call":
        await handleCallEvent(sessionId, data.call);
        break;

      case "media_uploaded":
        await handleMediaUploadedEvent(sessionId, data.message);
        break;

      case "media":
        await handleMediaEvent(sessionId, data.messageMedia, data.message);
        break;      default:
        // console.log(`[UNIVERSAL WEBHOOK] Unhandled event type: ${event}`);
    }

    // Log successful webhook event
    logWebhookEvent(sessionId, event, clientIP, true);

    return NextResponse.json({
      success: true,
      message: `Webhook event ${event} processed for session ${sessionId}`,
    });

  } catch (error) {
    console.error("[UNIVERSAL WEBHOOK] Error processing event:", error);
    
    logWebhookEvent(
      sessionId, 
      'processing_error', 
      clientIP, 
      false, 
      error instanceof Error ? error.message : 'Unknown error'
    );
    
    return NextResponse.json(
      { success: false, error: "Failed to process webhook event" },
      { status: 500 }
    );
  }
}

// Event handlers (same as existing implementation)
async function handleQrEvent(sessionId: string, qr: string) {
  if (!qr) return;
  
  try {
    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: "qr_generated",
        message: "QR code generated, scan to connect",
        qr: qr,
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system",
        status: "qr_generated",
        message: "QR code generated, scan to connect",
        qr: qr,
      },    });

    // console.log(`[UNIVERSAL WEBHOOK] QR updated for session ${sessionId}`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update QR for session ${sessionId}:`, error);
  }
}

async function handleReadyEvent(sessionId: string) {
  try {
    await prisma.whatsAppSession.update({
      where: { sessionId },
      data: {
        status: "session_connected",
        message: "WhatsApp session connected successfully",
        qr: null,
        updatedAt: new Date(),
      },    });

    // console.log(`[UNIVERSAL WEBHOOK] Session ${sessionId} is now ready and connected`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update ready status for session ${sessionId}:`, error);
  }
}

async function handleAuthenticatedEvent(sessionId: string) {
  try {
    await prisma.whatsAppSession.update({
      where: { sessionId },
      data: {
        status: "authenticated",
        message: "WhatsApp session authenticated successfully",
        updatedAt: new Date(),
      },    });

    // console.log(`[UNIVERSAL WEBHOOK] Session ${sessionId} is now authenticated`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update authenticated status for session ${sessionId}:`, error);
  }
}

async function handleDisconnectedEvent(sessionId: string, reason: string) {
  try {
    await prisma.whatsAppSession.update({
      where: { sessionId },
      data: {
        status: "session_not_connected",
        message: `Disconnected: ${reason || 'Unknown reason'}`,
        qr: null,
        updatedAt: new Date(),
      },    });

    // console.log(`[UNIVERSAL WEBHOOK] Session ${sessionId} disconnected: ${reason}`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update disconnected status for session ${sessionId}:`, error);
  }
}

async function handleAuthFailureEvent(sessionId: string, msg: string) {
  try {
    await prisma.whatsAppSession.update({
      where: { sessionId },
      data: {
        status: "auth_failure",
        message: `Authentication failed: ${msg || 'Unknown error'}`,
        qr: null,
        updatedAt: new Date(),
      },    });

    // console.log(`[UNIVERSAL WEBHOOK] Auth failure for session ${sessionId}: ${msg}`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update auth failure for session ${sessionId}:`, error);
  }
}

async function handleChangeStateEvent(sessionId: string, state: string) {
  if (!state) return;
  
  try {
    let status = state;
    let message = `State changed to: ${state}`;

    switch (state.toLowerCase()) {
      case "connected":
        status = "session_connected";
        message = "WhatsApp session connected";
        break;
      case "disconnected":
        status = "session_not_connected";
        message = "WhatsApp session disconnected";
        break;
      case "connecting":
        status = "connecting";
        message = "Connecting to WhatsApp...";
        break;
      case "loading":
        status = "loading";
        message = "Loading session...";
        break;
    }

    await prisma.whatsAppSession.update({
      where: { sessionId },
      data: {
        status: status,
        message: message,
        updatedAt: new Date(),
      },    });

    // console.log(`[UNIVERSAL WEBHOOK] State changed for session ${sessionId}: ${state}`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update state for session ${sessionId}:`, error);
  }
}

async function handleLoadingScreenEvent(sessionId: string, percent: number, message: string) {
  try {
    await prisma.whatsAppSession.update({
      where: { sessionId },
      data: {
        status: "loading",
        message: `Loading ${percent || 0}%: ${message || 'Loading...'}`,
        updatedAt: new Date(),
      },
    });

    // console.log(`[UNIVERSAL WEBHOOK] Loading screen for session ${sessionId}: ${percent}% - ${message}`);
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to update loading screen for session ${sessionId}:`, error);
  }
}

async function handleMessageEvent(sessionId: string, message: any) {
  try {
    // console.log(`[UNIVERSAL WEBHOOK] Message received for session ${sessionId}:`, message);
    // Implement message storage logic here if needed
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to handle message for session ${sessionId}:`, error);
  }
}

async function handleMessageAckEvent(sessionId: string, message: any, ack: number) {
  try {
    // console.log(`[UNIVERSAL WEBHOOK] Message ACK for session ${sessionId}: ${ack}`, message);
    // Implement message ACK update logic here if needed
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to handle message ACK for session ${sessionId}:`, error);
  }
}

async function handleCallEvent(sessionId: string, call: any) {
  try {
    // console.log(`[UNIVERSAL WEBHOOK] Call event for session ${sessionId}:`, call);
    // Implement call handling logic here if needed
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to handle call for session ${sessionId}:`, error);
  }
}

async function handleMediaUploadedEvent(sessionId: string, message: any) {
  try {
    // console.log(`[UNIVERSAL WEBHOOK] Media uploaded for session ${sessionId}:`, message);
    // Implement media upload handling logic here if needed
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to handle media upload for session ${sessionId}:`, error);
  }
}

async function handleMediaEvent(sessionId: string, messageMedia: any, message: any) {
  try {
    // console.log(`[UNIVERSAL WEBHOOK] Media received for session ${sessionId}:`, { messageMedia, message });
    // Implement media handling logic here if needed
  } catch (error) {
    console.error(`[UNIVERSAL WEBHOOK] Failed to handle media for session ${sessionId}:`, error);
  }
}

// GET method for webhook verification (optional)
export async function GET(request: Request) {
  return NextResponse.json({
    success: true,
    message: `Universal webhook endpoint ready`,
    timestamp: new Date().toISOString(),
    supportedEvents: [
      'qr', 'ready', 'authenticated', 'disconnected', 'auth_failure',
      'change_state', 'loading_screen', 'message', 'message_create', 
      'message_ack', 'call', 'media_uploaded', 'media'
    ]
  });
}
