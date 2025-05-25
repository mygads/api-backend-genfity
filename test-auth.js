// Simple test script to verify JWT authentication is working

const BASE_URL = 'http://localhost:3000';

async function testAuth() {
  try {
    console.log('🧪 Testing Customer Authentication System...\n');

    // Test 1: Try to access protected endpoint without auth (should fail)
    console.log('1. Testing protected endpoint without authentication...');
    const unauthedResponse = await fetch(`${BASE_URL}/api/customer/transactions`);
    console.log(`   Status: ${unauthedResponse.status} ${unauthedResponse.statusText}`);
    console.log('   ✅ Correctly rejected unauthenticated request\n');

    // Test 2: Sign in and get JWT token
    console.log('2. Testing signin to get JWT token...');
    const signinResponse = await fetch(`${BASE_URL}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: 'test@example.com', // Replace with actual test user
        password: 'password123'
      })
    });

    const signinData = await signinResponse.json();
    console.log(`   Status: ${signinResponse.status} ${signinResponse.statusText}`);
    
    if (signinResponse.ok && signinData.token) {
      console.log('   ✅ Successfully obtained JWT token');
      const token = signinData.token;
      
      // Test 3: Use JWT token to access protected endpoint
      console.log('\n3. Testing protected endpoint with JWT token...');
      const authedResponse = await fetch(`${BASE_URL}/api/customer/transactions`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log(`   Status: ${authedResponse.status} ${authedResponse.statusText}`);
      
      if (authedResponse.ok) {
        console.log('   ✅ Successfully accessed protected endpoint with JWT token');
      } else {
        console.log('   ❌ Failed to access protected endpoint with JWT token');
        const errorData = await authedResponse.json();
        console.log('   Error:', errorData);
      }
    } else {
      console.log('   ❌ Failed to get JWT token');
      console.log('   Response:', signinData);
    }

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

// Run the test
testAuth();
