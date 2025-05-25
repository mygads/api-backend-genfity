import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Rate limiting store (in production, use Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

/**
 * Verify webhook signature using HMAC-SHA256
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  if (!signature || !secret) return false;
  
  try {
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');
    
    // Compare signatures securely
    const receivedSignature = signature.replace('sha256=', '');
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(receivedSignature, 'hex')
    );
  } catch (error) {
    console.error('Signature verification error:', error);
    return false;
  }
}

/**
 * Simple rate limiting (use Redis in production)
 */
export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 60000 // 1 minute
): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  const current = requestCounts.get(identifier);
  
  if (!current || current.resetTime < windowStart) {
    requestCounts.set(identifier, { count: 1, resetTime: now });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

/**
 * Validate webhook request
 */
export async function validateWebhookRequest(
  request: NextRequest,
  webhookSecret?: string
): Promise<{ valid: boolean; error?: string; body?: any }> {
  try {
    // 1. Rate Limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
    if (!checkRateLimit(clientIP, 100, 60000)) {
      console.warn(`[WEBHOOK SECURITY] Rate limit exceeded for IP: ${clientIP}`);
      return { valid: false, error: 'Rate limit exceeded' };
    }

    // 2. Content-Type validation
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('[WEBHOOK SECURITY] Invalid content type');
      return { valid: false, error: 'Invalid content type' };
    }

    // 3. Get request body
    const body = await request.json();

    // 4. Webhook Signature Validation (if secret is provided)
    if (webhookSecret) {
      const signature = request.headers.get('x-signature-256') || 
                       request.headers.get('x-hub-signature-256');
      
      if (!signature) {
        console.warn('[WEBHOOK SECURITY] Missing webhook signature');
        return { valid: false, error: 'Missing webhook signature' };
      }

      const payload = JSON.stringify(body);
      if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
        console.warn('[WEBHOOK SECURITY] Invalid webhook signature');
        return { valid: false, error: 'Invalid webhook signature' };
      }
    }

    return { valid: true, body };
  } catch (error) {
    console.error('[WEBHOOK SECURITY] Validation error:', error);
    return { valid: false, error: 'Validation failed' };
  }
}

/**
 * Log webhook events for monitoring
 */
export function logWebhookEvent(
  sessionId: string,
  event: string,
  clientIP: string,
  success: boolean,
  error?: string
) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    sessionId,
    event,
    clientIP,
    success,
    error: error || null,
  };

  // In production, send to your logging service (e.g., Datadog, CloudWatch)
  // console.log('[WEBHOOK LOG]', JSON.stringify(logEntry));
  
  // Store in database for analytics if needed
  // await prisma.webhookLog.create({ data: logEntry });
}

/**
 * Cleanup rate limit store (call periodically)
 */
export function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, value] of requestCounts.entries()) {
    if (value.resetTime < now - 300000) { // 5 minutes old
      requestCounts.delete(key);
    }
  }
}

// Cleanup every 5 minutes
if (typeof window === 'undefined') {
  setInterval(cleanupRateLimitStore, 300000);
}
