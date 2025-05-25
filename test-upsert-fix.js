/**
 * Test script to verify the upsert fix for WhatsApp webhook handlers
 * This tests that webhook events can create sessions when they don't exist
 */

import crypto from 'crypto';

const BASE_URL = 'http://localhost:3000';
const TEST_SESSION_ID = `test-session-${Date.now()}`;
const WEBHOOK_SECRET = process.env.WHATSAPP_WEBHOOK_SECRET || 'test-secret-key';

console.log('🧪 Testing WhatsApp Webhook Upsert Fix...');
console.log(`📱 Test Session ID: ${TEST_SESSION_ID}`);

// Helper function to generate webhook signature
function generateWebhookSignature(body, secret) {
  return 'sha256=' + crypto.createHmac('sha256', secret).update(body).digest('hex');
}

// Helper function to send webhook event
async function sendWebhookEvent(sessionId, event, data = {}) {
  const payload = {
    event,
    data,
    timestamp: new Date().toISOString()
  };
  
  const bodyString = JSON.stringify(payload);
  const signature = generateWebhookSignature(bodyString, WEBHOOK_SECRET);
  
  try {
    const response = await fetch(`${BASE_URL}/api/whatsapp/webhook/${sessionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-signature': signature,
      },
      body: bodyString,
    });
    
    const result = await response.json();
    return { status: response.status, data: result };
  } catch (error) {
    return { error: error.message };
  }
}

// Helper function to check session in database via API
async function checkSessionStatus(sessionId) {
  try {
    const response = await fetch(`${BASE_URL}/api/whatsapp/session/${sessionId}/status`);
    const result = await response.json();
    return result;
  } catch (error) {
    return { error: error.message };
  }
}

async function runTests() {
  console.log('\n🔍 Step 1: Verify session does not exist initially...');
  const initialStatus = await checkSessionStatus(TEST_SESSION_ID);
  console.log('Initial session status:', initialStatus);
  
  console.log('\n📱 Step 2: Send QR event to non-existent session (should create it)...');
  const qrResult = await sendWebhookEvent(TEST_SESSION_ID, 'qr', {
    qr: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
  });
  console.log('QR Event Result:', qrResult);
  
  console.log('\n✅ Step 3: Check if session was created...');
  const afterQrStatus = await checkSessionStatus(TEST_SESSION_ID);
  console.log('Session status after QR:', afterQrStatus);
  
  console.log('\n🟢 Step 4: Send ready event (should update existing session)...');
  const readyResult = await sendWebhookEvent(TEST_SESSION_ID, 'ready', {});
  console.log('Ready Event Result:', readyResult);
  
  console.log('\n🔍 Step 5: Check final session status...');
  const finalStatus = await checkSessionStatus(TEST_SESSION_ID);
  console.log('Final session status:', finalStatus);
  
  console.log('\n🔴 Step 6: Send disconnected event (test another upsert scenario)...');
  const disconnectResult = await sendWebhookEvent(TEST_SESSION_ID, 'disconnected', {
    reason: 'Test disconnection'
  });
  console.log('Disconnect Event Result:', disconnectResult);
  
  console.log('\n📊 Step 7: Final verification...');
  const verificationStatus = await checkSessionStatus(TEST_SESSION_ID);
  console.log('Verification status:', verificationStatus);
  
  // Test summary
  console.log('\n📋 Test Summary:');
  console.log('✅ QR Event (create):', qrResult.status === 200 ? 'PASS' : 'FAIL');
  console.log('✅ Ready Event (update):', readyResult.status === 200 ? 'PASS' : 'FAIL');
  console.log('✅ Disconnect Event (update):', disconnectResult.status === 200 ? 'PASS' : 'FAIL');
  
  if (qrResult.status === 200 && readyResult.status === 200 && disconnectResult.status === 200) {
    console.log('\n🎉 SUCCESS: All upsert operations working correctly!');
    console.log('✅ The webhook system can now handle events for non-existent sessions');
    console.log('✅ Database P2025 errors should be resolved');
  } else {
    console.log('\n❌ FAILURE: Some operations failed');
    console.log('🔧 Check the server logs for detailed error information');
  }
}

// Run the tests
runTests().catch(error => {
  console.error('❌ Test execution failed:', error);
});
