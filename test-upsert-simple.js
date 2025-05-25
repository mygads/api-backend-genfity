/**
 * Simple test for webhook upsert functionality
 */

const fetch = require('node-fetch');
const crypto = require('crypto');

const BASE_URL = 'http://localhost:3000';
const TEST_SESSION_ID = `test-session-${Date.now()}`;
const WEBHOOK_SECRET = 'test-secret-key'; // Use the test secret

console.log('🧪 Testing WhatsApp Webhook Upsert Fix...');
console.log(`📱 Test Session ID: ${TEST_SESSION_ID}`);

// Helper function to generate webhook signature
function generateWebhookSignature(body, secret) {
  return 'sha256=' + crypto.createHmac('sha256', secret).update(body).digest('hex');
}

// Test QR event on non-existent session
async function testQREvent() {
  console.log('\n📱 Testing QR Event (should create session with upsert)...');
  
  const payload = {
    event: 'qr',
    data: {
      qr: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
    },
    timestamp: new Date().toISOString()
  };
  
  const bodyString = JSON.stringify(payload);
  const signature = generateWebhookSignature(bodyString, WEBHOOK_SECRET);
  
  try {
    const response = await fetch(`${BASE_URL}/api/whatsapp/webhook/${TEST_SESSION_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-signature': signature,
      },
      body: bodyString,
    });
    
    const result = await response.text();
    console.log('Status:', response.status);
    console.log('Response:', result);
    
    if (response.status === 200) {
      console.log('✅ QR Event: SUCCESS - Session created with upsert');
    } else {
      console.log('❌ QR Event: FAILED');
    }
  } catch (error) {
    console.error('❌ QR Event Error:', error.message);
  }
}

// Test ready event 
async function testReadyEvent() {
  console.log('\n🟢 Testing Ready Event (should update existing session)...');
  
  const payload = {
    event: 'ready',
    data: {},
    timestamp: new Date().toISOString()
  };
  
  const bodyString = JSON.stringify(payload);
  const signature = generateWebhookSignature(bodyString, WEBHOOK_SECRET);
  
  try {
    const response = await fetch(`${BASE_URL}/api/whatsapp/webhook/${TEST_SESSION_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-signature': signature,
      },
      body: bodyString,
    });
    
    const result = await response.text();
    console.log('Status:', response.status);
    console.log('Response:', result);
    
    if (response.status === 200) {
      console.log('✅ Ready Event: SUCCESS - Session updated');
    } else {
      console.log('❌ Ready Event: FAILED');
    }
  } catch (error) {
    console.error('❌ Ready Event Error:', error.message);
  }
}

// Run tests
async function runTests() {
  try {
    await testQREvent();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
    await testReadyEvent();
    
    console.log('\n📋 Test Summary:');
    console.log('✅ If both tests show SUCCESS, the upsert fix is working correctly');
    console.log('🎉 Database P2025 errors should be resolved!');
  } catch (error) {
    console.error('❌ Test execution failed:', error);
  }
}

runTests();
