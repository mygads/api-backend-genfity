# 🚀 WhatsApp Server Integration - Complete Setup Guide

## 📋 Status: READY FOR INTEGRATION

Sistem webhook WhatsApp Anda sudah **SIAP** untuk diintegrasikan dengan WhatsApp server. Ada **2 opsi** endpoint yang bisa digunakan:

## 🎯 **Opsi 1: Universal Webhook (REKOMENDASI)**

### **Endpoint:**
```
POST https://your-domain.com/api/whatsapp/webhook
```

### **Keuntungan:**
- ✅ Satu URL untuk semua session
- ✅ sessionId diekstrak dari payload
- ✅ Sesuai dengan arsitektur WhatsApp server Anda
- ✅ Lebih mudah dikonfigurasi

### **Payload Format:**
```json
{
  "sessionId": "session-123",
  "event": "qr",
  "data": {
    "qr": "qr-code-data"
  }
}
```

## 🎯 **Opsi 2: Session-Specific Webhook**

### **Endpoint:**
```
POST https://your-domain.com/api/whatsapp/webhook/[sessionId]
```

### **Keuntungan:**
- ✅ sessionId dalam URL path
- ✅ Support multiple payload formats
- ✅ Sudah teruji dan working

## 🔧 **Konfigurasi WhatsApp Server**

### **1. Update config.js:**

```javascript
// config.js
module.exports = {
  // OPSI 1: Universal webhook (RECOMMENDED)
  baseWebhookURL: 'https://your-backend-domain.com/api/whatsapp/webhook',
  
  // OPSI 2: Session-specific webhook  
  // baseWebhookURL: 'https://your-backend-domain.com/api/whatsapp/webhook',
  
  // Untuk development
  // baseWebhookURL: 'http://localhost:3000/api/whatsapp/webhook',
  
  // Security (opsional tapi recommended)
  webhookSecret: process.env.WHATSAPP_WEBHOOK_SECRET || null,
  
  // ... konfigurasi lainnya
  sessionFolderPath: './sessions',
  maxAttachmentSize: 64000000, // 64MB
  setMessagesAsSeen: true,
  webVersion: '2.2412.54',
  webVersionCacheType: 'remote',
  recoverSessions: true
};
```

### **2. Update utils.js (untuk Universal Webhook):**

```javascript
// utils.js - Modified triggerWebhook function
const triggerWebhook = async (webhookURL, sessionId, event, data = {}) => {
  try {
    // Format payload untuk universal webhook
    const payload = {
      sessionId: sessionId,    // Session ID untuk identifikasi
      event: event,           // Event type (qr, ready, message, etc.)
      data: data              // Event-specific data
    };
    
    console.log(`[WEBHOOK] Sending ${event} event for session ${sessionId}`);
    
    // Headers
    let headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'WhatsApp-Server/1.0'
    };
    
    // HMAC signature untuk security (jika webhook secret ada)
    const webhookSecret = process.env.WHATSAPP_WEBHOOK_SECRET;
    if (webhookSecret) {
      const crypto = require('crypto');
      const payloadString = JSON.stringify(payload);
      const signature = crypto.createHmac('sha256', webhookSecret).update(payloadString).digest('hex');
      headers['X-Webhook-Signature'] = `sha256=${signature}`;
    }
    
    // Send POST request
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
      timeout: 10000 // 10 second timeout
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(`[WEBHOOK] Success: ${event} event processed for session ${sessionId}`);
      return result;
    } else {
      const errorText = await response.text();
      console.error(`[WEBHOOK] Error ${response.status}: ${errorText}`);
      throw new Error(`Webhook failed with status ${response.status}`);
    }
    
  } catch (error) {
    console.error('[WEBHOOK] Error sending webhook:', error.message);
    // Don't throw error to prevent breaking WhatsApp session
    return { success: false, error: error.message };
  }
};

// Export function yang sudah dimodifikasi
module.exports = {
  triggerWebhook,
  // ... functions lainnya
};
```

### **3. Update .env WhatsApp Server:**

```bash
# .env WhatsApp Server
WHATSAPP_WEBHOOK_SECRET=your-secure-webhook-secret-key
# Pastikan sama dengan backend!
```

## 🔐 **Konfigurasi Backend (.env.local):**

```bash
# Backend .env.local
WHATSAPP_WEBHOOK_SECRET=your-secure-webhook-secret-key
DATABASE_URL="your-database-connection-string"
```

## 🧪 **Testing Integration:**

### **1. Test Universal Webhook:**

```bash
# Test endpoint availability
curl https://your-domain.com/api/whatsapp/webhook

# Test dengan payload
curl -X POST https://your-domain.com/api/whatsapp/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "sessionId": "test-session",
    "event": "qr", 
    "data": {
      "qr": "sample-qr-code"
    }
  }'
```

### **2. Test dengan WhatsApp Server:**

```javascript
// Test script untuk WhatsApp server
const { triggerWebhook } = require('./utils');

// Test QR event
triggerWebhook(
  'https://your-domain.com/api/whatsapp/webhook',
  'test-session',
  'qr',
  { qr: 'test-qr-code-12345' }
);

// Test ready event
triggerWebhook(
  'https://your-domain.com/api/whatsapp/webhook',
  'test-session', 
  'ready',
  {}
);
```

## 📊 **Supported Events:**

Kedua endpoint mendukung semua event berikut:

- ✅ `qr` - QR code generated
- ✅ `ready` - Session connected and ready
- ✅ `authenticated` - Session authenticated  
- ✅ `disconnected` - Session disconnected
- ✅ `auth_failure` - Authentication failed
- ✅ `change_state` - State change event
- ✅ `loading_screen` - Loading progress
- ✅ `message` / `message_create` - New message
- ✅ `message_ack` - Message acknowledgment
- ✅ `call` - Incoming call
- ✅ `media_uploaded` - Media upload complete
- ✅ `media` - Media message received

## 🎯 **Recommendations:**

### **Untuk Production:**

1. **Gunakan Universal Webhook** (`/api/whatsapp/webhook`)
2. **Aktifkan HMAC signature validation**
3. **Set webhook secret yang sama di WhatsApp server dan backend**
4. **Monitor logs untuk debugging**

### **Untuk Development:**

1. **Test tanpa signature validation dulu**
2. **Gunakan ngrok untuk localhost testing**
3. **Monitor console logs di kedua server**

## 🚨 **Important Notes:**

1. **SessionId Handling:** Universal webhook mengekstrak sessionId dari payload, bukan dari URL
2. **Security:** HMAC signature validation diaktifkan jika `WHATSAPP_WEBHOOK_SECRET` ada
3. **Error Handling:** Webhook errors tidak akan break WhatsApp session
4. **Rate Limiting:** Backend menerapkan rate limiting (100 requests/IP/minute)

## 📞 **Jika Ada Masalah:**

1. Check console logs di WhatsApp server
2. Check console logs di backend Next.js
3. Verify webhook secret consistency
4. Test endpoint availability dengan curl
5. Check database connection

---

**Status: ✅ READY FOR INTEGRATION**
**Universal Webhook: ✅ IMPLEMENTED**
**Session-Specific Webhook: ✅ AVAILABLE**
**Security: ✅ HMAC VALIDATION**
**Testing: ✅ SCRIPTS PROVIDED**

Pilih **Universal Webhook** untuk kemudahan setup! 🚀
