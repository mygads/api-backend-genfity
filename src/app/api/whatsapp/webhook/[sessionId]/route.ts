import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { verifyWebhookSignature, checkRateLimit, logWebhookEvent } from "@/lib/webhook-security-simple";

// Webhook event schemas - Updated untuk menangani format dari WhatsApp server
const AuthFailureSchema = z.object({
  event: z.literal("auth_failure"),
  sessionId: z.string(),
  data: z.object({
    msg: z.string(),
  }),
});

const StatusSchema = z.object({
  event: z.literal("status"),
  sessionId: z.string(),
  data: z.object({
    msg: z.string(),
  }),
});

const AuthenticatedSchema = z.object({
  event: z.literal("authenticated"),
  sessionId: z.string(),
  data: z.object({}).optional(),
});

const CallSchema = z.object({
  event: z.literal("call"),
  sessionId: z.string(),
  data: z.object({
    call: z.object({}).passthrough(),
  }),
});

const ChangeStateSchema = z.object({
  event: z.literal("change_state"),
  sessionId: z.string(),
  data: z.object({
    state: z.string(),
  }),
});

const DisconnectedSchema = z.object({
  event: z.literal("disconnected"),
  sessionId: z.string(),
  data: z.object({
    reason: z.string(),
  }),
});

const LoadingScreenSchema = z.object({
  event: z.literal("loading_screen"),
  sessionId: z.string(),
  data: z.object({
    percent: z.number(),
    message: z.string(),
  }),
});

const QrSchema = z.object({
  event: z.literal("qr"),
  sessionId: z.string(),
  data: z.object({
    qr: z.string(),
  }),
});

const MessageSchema = z.object({
  event: z.literal("message"),
  sessionId: z.string(),
  data: z.object({
    message: z.object({}).passthrough(),
  }),
});

const MessageCreateSchema = z.object({
  event: z.literal("message_create"),
  sessionId: z.string(),
  data: z.object({
    message: z.object({}).passthrough(),
  }),
});

const MessageAckSchema = z.object({
  event: z.literal("message_ack"),
  sessionId: z.string(),
  data: z.object({
    message: z.object({}).passthrough(),
    ack: z.number(),
  }),
});

const ReadySchema = z.object({
  event: z.literal("ready"),
  sessionId: z.string(),
  data: z.object({}).optional(),
});

const MediaUploadedSchema = z.object({
  event: z.literal("media_uploaded"),
  sessionId: z.string(),
  data: z.object({
    message: z.object({}).passthrough(),
  }),
});

const MediaSchema = z.object({
  event: z.literal("media"),
  sessionId: z.string(),
  data: z.object({
    messageMedia: z.object({}).passthrough(),
    message: z.object({}).passthrough(),
  }),
});

// Union schema untuk semua event types
const WebhookEventSchema = z.union([
  AuthFailureSchema,
  StatusSchema,
  AuthenticatedSchema,
  CallSchema,
  ChangeStateSchema,
  DisconnectedSchema,
  LoadingScreenSchema,
  QrSchema,
  MessageSchema,
  MessageCreateSchema,
  MessageAckSchema,
  ReadySchema,
  MediaUploadedSchema,
  MediaSchema,
]);

// POST /api/whatsapp/webhook/[sessionId] - Receive webhook events with security
export async function POST(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;
  const clientIP = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';

  try {
    // Rate limiting check
    if (!checkRateLimit(clientIP, 100)) {
      console.warn(`[WEBHOOK SECURITY] Rate limit exceeded for IP: ${clientIP}`);
      logWebhookEvent(sessionId, 'rate_limit', clientIP, false, 'Rate limit exceeded');
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }    // Webhook signature validation (if secret is provided)
    const webhookSecret = process.env.WHATSAPP_WEBHOOK_SECRET;
    let body: any;
    
    if (webhookSecret) {
      const signature = request.headers.get('x-webhook-signature') || 
                       request.headers.get('x-signature-256') || 
                       request.headers.get('x-hub-signature-256');
      
      if (!signature) {
        console.warn('[WEBHOOK SECURITY] Missing webhook signature');
        logWebhookEvent(sessionId, 'missing_signature', clientIP, false, 'Missing webhook signature');
        return NextResponse.json(
          { success: false, error: 'Missing webhook signature' },
          { status: 400 }
        );
      }

      // Verify HMAC signature
      const bodyText = await request.text();
      const isValidSignature = verifyWebhookSignature(bodyText, signature, webhookSecret);
      
      if (!isValidSignature) {
        console.warn('[WEBHOOK SECURITY] Invalid webhook signature');
        logWebhookEvent(sessionId, 'invalid_signature', clientIP, false, 'Invalid webhook signature');
        return NextResponse.json(
          { success: false, error: 'Invalid webhook signature' },
          { status: 401 }
        );
      }

      // Parse the body after signature verification
      body = JSON.parse(bodyText);
    } else {
      // No signature validation - for development/testing
      body = await request.json();
    }

    console.log(`[WEBHOOK] Received event for session ${sessionId}:`, body);

    // Process the webhook payload
    return await processWebhookPayload(sessionId, body, clientIP);

  } catch (error) {
    console.error("[WEBHOOK] Error processing webhook:", error);
    
    // Log failed webhook event
    logWebhookEvent(
      sessionId, 
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

// Helper function to process webhook payload
async function processWebhookPayload(sessionId: string, body: any, clientIP: string) {
  try {
    // Handle different payload formats from WhatsApp server
    let event: string;
    let data: any;
    
    // Format dari server WhatsApp Anda: { sessionId, event, data }
    if (body.sessionId && body.event) {
      event = body.event;
      data = body.data || {};
      // Validasi sessionId jika ada di body
      if (body.sessionId !== sessionId) {
        console.warn(`[WEBHOOK] SessionId mismatch. URL: ${sessionId}, Body: ${body.sessionId}`);
      }
    } 
    // Format standar webhook: { event, data }
    else if (body.event) {
      event = body.event;
      data = body.data || {};
    } 
    // Format langsung dari whatsapp-web.js
    else {
      // Coba deteksi event type dari struktur data
      if (body.qr) {
        event = 'qr';
        data = { qr: body.qr };
      } else if (body.state) {
        event = 'change_state';
        data = { state: body.state };
      } else if (body.reason) {
        event = 'disconnected';
        data = { reason: body.reason };
      } else if (body.message) {
        event = 'message';
        data = { message: body.message };
      } else {
        logWebhookEvent(sessionId, 'unknown_format', clientIP, false, 'Unknown payload format');
        return NextResponse.json(
          { success: false, error: "Unknown payload format" },
          { status: 400 }
        );
      }
    }

    if (!event) {
      logWebhookEvent(sessionId, 'missing_event', clientIP, false, 'Missing event type');
      return NextResponse.json(
        { success: false, error: "Missing event type in payload" },
        { status: 400 }
      );
    }    // Create standardized event data for validation
    const eventValidationData = { event, sessionId, data };

    // Validate webhook payload
    const validation = WebhookEventSchema.safeParse(eventValidationData);
    if (!validation.success) {
      console.error("[WEBHOOK] Invalid payload:", validation.error);
      logWebhookEvent(sessionId, 'invalid_payload', clientIP, false, 'Invalid webhook payload');
      return NextResponse.json(
        { success: false, error: "Invalid webhook payload" },
        { status: 400 }
      );
    }

    const validatedData = validation.data;    // Process different webhook events with type assertion for simplicity
    const eventType = validatedData.event;
    const eventData = validatedData.data || {};    switch (eventType) {
      case "qr":
        await handleQrEvent(sessionId, (eventData as any).qr);
        break;

      case "ready":
        await handleReadyEvent(sessionId);
        break;

      case "authenticated":
        await handleAuthenticatedEvent(sessionId);
        break;

      case "disconnected":
        await handleDisconnectedEvent(sessionId, (eventData as any).reason);
        break;

      case "auth_failure":
      case "status": // Support both event names for auth_failure
        await handleAuthFailureEvent(sessionId, (eventData as any).msg);
        break;

      case "change_state":
        await handleChangeStateEvent(sessionId, (eventData as any).state);
        break;

      case "loading_screen":
        await handleLoadingScreenEvent(sessionId, (eventData as any).percent, (eventData as any).message);
        break;

      case "message":
      case "message_create":
        await handleMessageEvent(sessionId, (eventData as any).message);
        break;

      case "message_ack":
        await handleMessageAckEvent(sessionId, (eventData as any).message, (eventData as any).ack);
        break;

      case "call":
        await handleCallEvent(sessionId, (eventData as any).call);
        break;

      case "media_uploaded":
        await handleMediaUploadedEvent(sessionId, (eventData as any).message);
        break;

      case "media":
        await handleMediaEvent(sessionId, (eventData as any).messageMedia, (eventData as any).message);
        break;

      default:
        console.log(`[WEBHOOK] Unhandled event type: ${eventType}`);
    }    // Log successful webhook event
    logWebhookEvent(sessionId, eventType, clientIP, true);    return NextResponse.json({
      success: true,
      message: `Webhook event ${eventType} processed for session ${sessionId}`,
    });
  } catch (error) {
    console.error("[WEBHOOK] Error processing webhook payload:", error);
    
    logWebhookEvent(
      sessionId, 
      'processing_error', 
      clientIP, 
      false, 
      error instanceof Error ? error.message : 'Unknown error'
    );
    
    return NextResponse.json(
      { success: false, error: "Failed to process webhook payload" },
      { status: 500 }
    );
  }
}

// Handle QR code event
async function handleQrEvent(sessionId: string, qr: string) {
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
        userId: "system", // Will be updated when user is identified
        status: "qr_generated",
        message: "QR code generated, scan to connect",
        qr: qr,
      },
    });

    console.log(`[WEBHOOK] QR updated for session ${sessionId}`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update QR for session ${sessionId}:`, error);
  }
}

// Handle ready event (session connected)
async function handleReadyEvent(sessionId: string) {
  try {
    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: "session_connected",
        message: "WhatsApp session connected successfully",
        qr: null, // Clear QR code as it's no longer needed
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system", // Default system user, will be updated when user is identified
        status: "session_connected",
        message: "WhatsApp session connected successfully",
        qr: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`[WEBHOOK] Session ${sessionId} is now ready and connected`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update ready status for session ${sessionId}:`, error);
  }
}

// Handle authenticated event
async function handleAuthenticatedEvent(sessionId: string) {
  try {
    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: "authenticated",
        message: "WhatsApp session authenticated successfully",
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system", // Default system user, will be updated when user is identified
        status: "authenticated",
        message: "WhatsApp session authenticated successfully",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`[WEBHOOK] Session ${sessionId} is now authenticated`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update authenticated status for session ${sessionId}:`, error);
  }
}

// Handle disconnected event
async function handleDisconnectedEvent(sessionId: string, reason: string) {
  try {
    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: "session_not_connected",
        message: `Disconnected: ${reason}`,
        qr: null,
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system", // Default system user, will be updated when user is identified
        status: "session_not_connected",
        message: `Disconnected: ${reason}`,
        qr: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`[WEBHOOK] Session ${sessionId} disconnected: ${reason}`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update disconnected status for session ${sessionId}:`, error);
  }
}

// Handle authentication failure
async function handleAuthFailureEvent(sessionId: string, msg: string) {
  try {
    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: "auth_failure",
        message: `Authentication failed: ${msg}`,
        qr: null,
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system", // Default system user, will be updated when user is identified
        status: "auth_failure",
        message: `Authentication failed: ${msg}`,
        qr: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`[WEBHOOK] Auth failure for session ${sessionId}: ${msg}`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update auth failure for session ${sessionId}:`, error);
  }
}

// Handle state change
async function handleChangeStateEvent(sessionId: string, state: string) {
  try {
    // Map WhatsApp states to our status
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
      case "loading":        status = "loading";
        message = "Loading session...";
        break;
    }

    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: status,
        message: message,
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system", // Default system user, will be updated when user is identified
        status: status,
        message: message,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`[WEBHOOK] State changed for session ${sessionId}: ${state}`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update state for session ${sessionId}:`, error);
  }
}

// Handle loading screen
async function handleLoadingScreenEvent(sessionId: string, percent: number, message: string) {
  try {
    await prisma.whatsAppSession.upsert({
      where: { sessionId },
      update: {
        status: "loading",
        message: `Loading ${percent}%: ${message}`,
        updatedAt: new Date(),
      },
      create: {
        sessionId,
        userId: "system", // Default system user, will be updated when user is identified
        status: "loading",
        message: `Loading ${percent}%: ${message}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log(`[WEBHOOK] Loading screen for session ${sessionId}: ${percent}% - ${message}`);
  } catch (error) {
    console.error(`[WEBHOOK] Failed to update loading screen for session ${sessionId}:`, error);
  }
}

// Handle message events
async function handleMessageEvent(sessionId: string, message: any) {
  try {
    // Store message in database if needed
    console.log(`[WEBHOOK] Message received for session ${sessionId}:`, message);

    // You can implement message storage logic here
    // await prisma.whatsappMessage.create({
    //   data: {
    //     sessionId,
    //     messageId: message.id,
    //     body: message.body,
    //     from: message.from,
    //     to: message.to,
    //     timestamp: new Date(message.timestamp * 1000),
    //     // ... other message fields
    //   },
    // });
  } catch (error) {
    console.error(`[WEBHOOK] Failed to handle message for session ${sessionId}:`, error);
  }
}

// Handle message acknowledgment
async function handleMessageAckEvent(sessionId: string, message: any, ack: number) {
  try {
    console.log(`[WEBHOOK] Message ACK for session ${sessionId}: ${ack}`, message);

    // Update message delivery status
    // 1 = sent, 2 = received, 3 = read
    let status = "sent";
    if (ack === 2) status = "delivered";
    if (ack === 3) status = "read";

    // You can implement message ACK update logic here
    // await prisma.whatsappMessage.update({
    //   where: { messageId: message.id },
    //   data: { deliveryStatus: status },
    // });
  } catch (error) {
    console.error(`[WEBHOOK] Failed to handle message ACK for session ${sessionId}:`, error);
  }
}

// Handle call events
async function handleCallEvent(sessionId: string, call: any) {
  try {
    console.log(`[WEBHOOK] Call event for session ${sessionId}:`, call);

    // You can implement call handling logic here
    // Store call information, notify user, etc.
  } catch (error) {
    console.error(`[WEBHOOK] Failed to handle call for session ${sessionId}:`, error);
  }
}

// Handle media uploaded events
async function handleMediaUploadedEvent(sessionId: string, message: any) {
  try {
    console.log(`[WEBHOOK] Media uploaded for session ${sessionId}:`, message);

    // You can implement media upload handling logic here
  } catch (error) {
    console.error(`[WEBHOOK] Failed to handle media upload for session ${sessionId}:`, error);
  }
}

// Handle media events
async function handleMediaEvent(sessionId: string, messageMedia: any, message: any) {
  try {
    console.log(`[WEBHOOK] Media received for session ${sessionId}:`, { messageMedia, message });

    // You can implement media handling logic here
    // Store media files, process images, etc.
  } catch (error) {
    console.error(`[WEBHOOK] Failed to handle media for session ${sessionId}:`, error);
  }
}

// GET method for webhook verification (optional)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params;
  return NextResponse.json({
    success: true,
    message: `Webhook endpoint ready for session ${sessionId}`,
    timestamp: new Date().toISOString(),
  });
}
