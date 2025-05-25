# WhatsApp Webhook System Documentation

## Overview

This comprehensive webhook system allows your application to receive real-time events from your WhatsApp API service. The system automatically updates the database, provides real-time session status, and generates QR codes for authentication.

## 🚀 Key Features

- **Real-time Event Processing**: Handles 10+ different WhatsApp event types
- **Automatic Database Updates**: Session status automatically synced
- **QR Code Generation**: Instant QR images for authentication
- **Real-time Status API**: Get current session state with computed flags
- **Session Management**: List and filter sessions in real-time
- **Error Handling**: Comprehensive logging and error recovery
- **Zod Validation**: Strict schema validation for all webhook payloads

## 📡 Webhook Endpoints

### Main Webhook Receiver
```
POST /api/whatsapp/webhook/[sessionId]
GET  /api/whatsapp/webhook/[sessionId] (verification)
```

### Session Status
```
GET /api/whatsapp/session/status/[sessionId]
```

### Real-time Session List
```
GET /api/whatsapp/session/list-realtime
GET /api/whatsapp/session/list-realtime?userId=123
GET /api/whatsapp/session/list-realtime?status=connected
```

## 🎯 Supported Webhook Events

### 1. QR Code Event
```json
{
  "event": "qr",
  "data": {
    "qr": "1@ABC123..."
  }
}
```
**Action**: Updates session status to `qr_generated`, stores QR string

### 2. Ready Event (Connected)
```json
{
  "event": "ready",
  "data": {}
}
```
**Action**: Updates status to `session_connected`, clears QR code

### 3. Disconnected Event
```json
{
  "event": "disconnected",
  "data": {
    "reason": "User logged out"
  }
}
```
**Action**: Updates status to `session_not_connected`, clears QR

### 4. Authentication Failure
```json
{
  "event": "auth_failure",
  "data": {
    "msg": "Invalid QR scan"
  }
}
```
**Action**: Updates status to `auth_failure`, logs failure reason

### 5. State Change
```json
{
  "event": "change_state",
  "data": {
    "state": "connecting"
  }
}
```
**Action**: Maps WhatsApp states to application status

### 6. Loading Screen
```json
{
  "event": "loading_screen",
  "data": {
    "percent": 75,
    "message": "Loading session..."
  }
}
```
**Action**: Updates status to `loading` with progress info

### 7. Message Events
```json
{
  "event": "message",
  "data": {
    "message": {
      "id": "msg_123",
      "body": "Hello World",
      "from": "6281234567890@c.us",
      "to": "6289876543210@c.us",
      "timestamp": 1640995200
    }
  }
}
```
**Action**: Logs message (storage can be implemented)

### 8. Message ACK
```json
{
  "event": "message_ack",
  "data": {
    "message": {...},
    "ack": 2
  }
}
```
**Action**: Updates message delivery status (1=sent, 2=delivered, 3=read)

### 9. Call Events
```json
{
  "event": "call",
  "data": {
    "call": {
      "id": "call_123",
      "from": "6281234567890@c.us"
    }
  }
}
```
**Action**: Logs call event (handling can be implemented)

## 📊 Session Status Response

### GET /api/whatsapp/session/status/[sessionId]

```json
{
  "success": true,
  "data": {
    "sessionId": "session-123",
    "status": "qr_generated",
    "message": "QR code generated, scan to connect",
    "qr": "1@ABC123...",
    "qrImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "userId": "user-456",
    "createdAt": "2025-01-20T10:00:00.000Z",
    "updatedAt": "2025-01-20T10:05:00.000Z",
    "isConnected": false,
    "needsQR": true,
    "isLoading": false,
    "hasError": false
  }
}
```

### Computed Status Flags

- **isConnected**: `true` if status is `session_connected`
- **needsQR**: `true` if status is `qr_generated` and QR string exists
- **isLoading**: `true` if status is `loading` or `connecting`
- **hasError**: `true` if status is `auth_failure` or `error`

## 📋 Session List Response

### GET /api/whatsapp/session/list-realtime

```json
{
  "success": true,
  "data": [
    {
      "sessionId": "session-123",
      "status": "session_connected",
      "message": "WhatsApp session connected successfully",
      "qr": null,
      "userId": "user-456",
      "createdAt": "2025-01-20T10:00:00.000Z",
      "updatedAt": "2025-01-20T10:05:00.000Z",
      "isConnected": true,
      "needsQR": false,
      "isLoading": false,
      "hasError": false,
      "hasQR": false,
      "lastUpdated": "2025-01-20T10:05:00.000Z"
    }
  ],
  "summary": {
    "connected": 5,
    "disconnected": 2,
    "loading": 1,
    "needsQR": 3,
    "error": 0,
    "total": 11
  },
  "timestamp": "2025-01-20T10:10:00.000Z"
}
```

## ⚙️ Configuration

### 1. WhatsApp API Service Setup
Configure your WhatsApp API service to send webhooks to:
```
https://your-domain.com/api/whatsapp/webhook/[sessionId]
```

### 2. Database Schema
The system uses the existing `WhatsAppSession` model with the added `message` field:

```prisma
model WhatsAppSession {
  id             String   @id @default(cuid())
  sessionId      String   @unique
  userId         String
  status         String
  qr             String?
  message        String?  // Added for webhook messages
  isNotification Boolean  @default(false)
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  user           User     @relation(fields: [userId], references: [id])
  aiConfig       Json?
}
```

### 3. Environment Variables
Ensure these are set in your `.env`:
```
DATABASE_URL="your-database-url"
WHATSAPP_SERVER_API="your-whatsapp-api-url"
WHATSAPP_API_KEY="your-api-key"
```

## 🧪 Testing

Run the comprehensive test suite:
```bash
node test-webhook-system.js
```

This will test:
- All webhook event types
- Session status endpoint
- Real-time session list
- QR code generation
- Error handling
- Invalid payload handling

## 🔒 Security Considerations

1. **Webhook Validation**: Consider adding webhook signature validation
2. **Rate Limiting**: Implement rate limiting for webhook endpoints
3. **Authentication**: Add authentication for status endpoints if needed
4. **CORS**: Configure CORS appropriately for your frontend

## 🚀 Frontend Integration

### React Example - Real-time Session Status

```javascript
import { useState, useEffect } from 'react';

function WhatsAppSession({ sessionId }) {
  const [session, setSession] = useState(null);
  const [qrImage, setQrImage] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await fetch(`/api/whatsapp/session/status/${sessionId}`);
      const data = await response.json();
      
      if (data.success) {
        setSession(data.data);
        setQrImage(data.data.qrImage);
      }
    };

    // Fetch immediately
    fetchStatus();

    // Poll every 3 seconds for real-time updates
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, [sessionId]);

  if (!session) return <div>Loading...</div>;

  return (
    <div className="whatsapp-session">
      <h3>Session: {session.sessionId}</h3>
      <div className="status">
        Status: <span className={session.isConnected ? 'connected' : 'disconnected'}>
          {session.status}
        </span>
      </div>
      
      {session.message && (
        <div className="message">{session.message}</div>
      )}
      
      {session.needsQR && qrImage && (
        <div className="qr-code">
          <h4>Scan QR Code:</h4>
          <img src={qrImage} alt="WhatsApp QR Code" />
        </div>
      )}
      
      {session.isLoading && (
        <div className="loading">Loading...</div>
      )}
      
      {session.hasError && (
        <div className="error">Error: {session.message}</div>
      )}
    </div>
  );
}
```

### Real-time Session List

```javascript
function WhatsAppSessionList({ userId }) {
  const [sessions, setSessions] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const fetchSessions = async () => {
      const url = userId 
        ? `/api/whatsapp/session/list-realtime?userId=${userId}`
        : '/api/whatsapp/session/list-realtime';
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setSessions(data.data);
        setSummary(data.summary);
      }
    };

    fetchSessions();
    const interval = setInterval(fetchSessions, 5000);
    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div className="session-list">
      <div className="summary">
        <div>Total: {summary.total}</div>
        <div>Connected: {summary.connected}</div>
        <div>Need QR: {summary.needsQR}</div>
        <div>Errors: {summary.error}</div>
      </div>
      
      <div className="sessions">
        {sessions.map(session => (
          <WhatsAppSession key={session.sessionId} sessionId={session.sessionId} />
        ))}
      </div>
    </div>
  );
}
```

## 📝 Error Handling

The system includes comprehensive error handling:

1. **Validation Errors**: Invalid webhook payloads return 400 with error details
2. **Database Errors**: Logged but don't break webhook processing
3. **QR Generation Errors**: Logged, QR image returns null
4. **Network Errors**: Properly caught and logged

## 🔄 Status Flow

```
Initial State → qr_generated → session_connected
     ↓              ↓              ↓
auth_failure   connecting     disconnected
     ↓              ↓              ↓
   error         loading      session_not_connected
```

## 🎯 Best Practices

1. **Polling Frequency**: Use 3-5 second intervals for real-time updates
2. **Error Recovery**: Implement retry mechanisms for failed webhook processing
3. **Monitoring**: Log all webhook events for debugging
4. **Cleanup**: Remove old QR codes and expired sessions periodically
5. **Scaling**: Consider using WebSockets for truly real-time updates at scale

## 📞 Support

If you encounter issues:
1. Check the console logs for detailed error messages
2. Verify webhook URL configuration in your WhatsApp API service
3. Test with the provided test script
4. Ensure database schema is up to date with `npx prisma generate`

## 🚀 Next Steps

1. **Message Storage**: Implement message and call storage if needed
2. **WebSocket Integration**: Add WebSocket support for real-time frontend updates  
3. **Webhook Security**: Add signature validation for webhook security
4. **Analytics**: Add session analytics and reporting
5. **Notification System**: Implement real-time notifications for status changes
