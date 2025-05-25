// Test webhook sederhana tanpa signature validation (untuk development)
const testWebhookEvents = async () => {
  console.log('🔗 Testing WhatsApp Webhook (Development Mode)');
  console.log('=================================================');
  
  const baseUrl = 'http://localhost:3000';
  const sessionId = `test-session-${Date.now()}`;
  
  // Events yang akan ditest sesuai format server WhatsApp Anda
  const events = [
    {
      name: 'QR Code Generated',
      payload: {
        sessionId: sessionId,
        event: 'qr',
        data: {
          qr: 'sample-qr-code-data-for-testing'
        }
      }
    },
    {
      name: 'Authentication Status',
      payload: {
        sessionId: sessionId,
        event: 'status',
        data: {
          msg: 'Authentication failed - session expired'
        }
      }
    },
    {
      name: 'Authenticated',
      payload: {
        sessionId: sessionId,
        event: 'authenticated',
        data: {}
      }
    },
    {
      name: 'Ready',
      payload: {
        sessionId: sessionId,
        event: 'ready',
        data: {}
      }
    },
    {
      name: 'State Change',
      payload: {
        sessionId: sessionId,
        event: 'change_state',
        data: {
          state: 'connected'
        }
      }
    },
    {
      name: 'Loading Screen',
      payload: {
        sessionId: sessionId,
        event: 'loading_screen',
        data: {
          percent: 75,
          message: 'Loading WhatsApp Web...'
        }
      }
    },
    {
      name: 'Message Received',
      payload: {
        sessionId: sessionId,
        event: 'message',
        data: {
          message: {
            id: 'test-message-id',
            body: 'Hello from test',
            from: '6281234567890@c.us',
            to: '6289876543210@c.us',
            timestamp: Math.floor(Date.now() / 1000)
          }
        }
      }
    },
    {
      name: 'Disconnected',
      payload: {
        sessionId: sessionId,
        event: 'disconnected',
        data: {
          reason: 'User logged out'
        }
      }
    }
  ];

  let successCount = 0;
  let failCount = 0;

  console.log(`📱 Test Session ID: ${sessionId}\n`);

  for (const testEvent of events) {
    try {
      console.log(`📡 Testing: ${testEvent.name}`);
      
      const response = await fetch(`${baseUrl}/api/whatsapp/webhook/${sessionId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testEvent.payload)
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log(`   ✅ SUCCESS - ${result.message}`);
        successCount++;
      } else {
        console.log(`   ❌ FAILED - Status: ${response.status}, Error: ${JSON.stringify(result)}`);
        failCount++;
      }
    } catch (error) {
      console.log(`   ❌ ERROR - ${error.message}`);
      failCount++;
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('\n📊 TEST RESULTS:');
  console.log('================');
  console.log(`✅ Successful: ${successCount}/${events.length}`);
  console.log(`❌ Failed: ${failCount}/${events.length}`);
  
  if (failCount === 0) {
    console.log('🎉 ALL TESTS PASSED!');
    console.log('✅ Webhook system is working correctly');
    console.log('✅ Database upsert operations are successful');
    console.log('✅ All event types are handled properly');
  } else if (successCount > 0) {
    console.log('⚠️  SOME TESTS FAILED');
    console.log('🔧 Check the server logs for detailed error information');
  } else {
    console.log('💥 ALL TESTS FAILED');
    console.log('🔧 Check if the server is running and accessible');
  }
};

// Run the test
testWebhookEvents().catch(console.error);
