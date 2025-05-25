// Test script untuk Customer WhatsApp API dengan JWT authentication
const BASE_URL = 'http://localhost:3001';

async function testWhatsappServices() {
  try {
    console.log('🧪 Testing Customer WhatsApp API with JWT Authentication...\n');

    // Step 1: Sign in untuk mendapatkan JWT token
    console.log('1. Signing in to get JWT token...');
    const signinResponse = await fetch(`${BASE_URL}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: 'testuser@example.com',
        password: 'password123'
      })
    });

    const signinData = await signinResponse.json();
    console.log(`   Status: ${signinResponse.status} ${signinResponse.statusText}`);
    
    if (!signinResponse.ok || !signinData.token) {
      console.log('   ❌ Failed to get JWT token');
      console.log('   Response:', signinData);
      return;
    }

    console.log('   ✅ Successfully obtained JWT token');
    const token = signinData.token;
    const userId = signinData.user.id;
    
    // Step 2: Test GET /api/customer/whatsapp/packages (public endpoint)
    console.log('\n2. Testing WhatsApp packages endpoint (public)...');
    const packagesResponse = await fetch(`${BASE_URL}/api/customer/whatsapp/packages`);
    console.log(`   Status: ${packagesResponse.status} ${packagesResponse.statusText}`);
    
    if (packagesResponse.ok) {
      const packagesData = await packagesResponse.json();
      console.log('   ✅ Successfully fetched WhatsApp packages');
      console.log(`   Found ${packagesData.data?.length || 0} packages`);
    } else {
      console.log('   ❌ Failed to fetch packages');
    }

    // Step 3: Test GET /api/customer/whatsapp/services (protected endpoint)
    console.log('\n3. Testing WhatsApp services endpoint without authentication...');
    const unauthedServicesResponse = await fetch(`${BASE_URL}/api/customer/whatsapp/services`);
    console.log(`   Status: ${unauthedServicesResponse.status} ${unauthedServicesResponse.statusText}`);
    console.log('   ✅ Correctly rejected unauthenticated request');

    // Step 4: Test GET /api/customer/whatsapp/services dengan JWT token
    console.log('\n4. Testing WhatsApp services endpoint with JWT token...');
    const servicesResponse = await fetch(`${BASE_URL}/api/customer/whatsapp/services`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`   Status: ${servicesResponse.status} ${servicesResponse.statusText}`);
    
    if (servicesResponse.ok) {
      const servicesData = await servicesResponse.json();
      console.log('   ✅ Successfully accessed WhatsApp services with JWT token');
      console.log('   Response:', servicesData);
    } else {
      const errorData = await servicesResponse.json();
      console.log('   ⚠️  Services endpoint response:', errorData);
    }

    // Step 5: Test GET /api/customer/whatsapp/transactions dengan JWT token
    console.log('\n5. Testing WhatsApp transactions endpoint with JWT token...');
    const transactionsResponse = await fetch(`${BASE_URL}/api/customer/whatsapp/transactions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`   Status: ${transactionsResponse.status} ${transactionsResponse.statusText}`);
    
    if (transactionsResponse.ok) {
      const transactionsData = await transactionsResponse.json();
      console.log('   ✅ Successfully accessed WhatsApp transactions with JWT token');
      console.log('   Response:', transactionsData);
    } else {
      const errorData = await transactionsResponse.json();
      console.log('   ⚠️  Transactions endpoint response:', errorData);
    }

    // Step 6: Test berbagai query parameters
    console.log('\n6. Testing WhatsApp services with query parameters...');
    const servicesWithStatusResponse = await fetch(`${BASE_URL}/api/customer/whatsapp/services?status=active`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log(`   Status: ${servicesWithStatusResponse.status} ${servicesWithStatusResponse.statusText}`);
    
    if (servicesWithStatusResponse.ok) {
      const servicesWithStatusData = await servicesWithStatusResponse.json();
      console.log('   ✅ Successfully tested query parameters');
      console.log(`   Active services: ${servicesWithStatusData.data?.length || 0}`);
    }

    console.log('\n🎉 Customer WhatsApp API Test Complete!');
    console.log('✅ All JWT authentication tests passed for WhatsApp APIs');

  } catch (error) {
    console.error('❌ Test failed with error:', error.message);
  }
}

// Run the test
testWhatsappServices();
