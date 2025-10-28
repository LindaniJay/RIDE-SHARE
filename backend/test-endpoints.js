const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5001';

async function testEndpoint(endpoint, method = 'GET', body = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    console.log(`Testing ${method} ${endpoint}...`);
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    
    console.log(`Status: ${response.status}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('Response:', JSON.stringify(data, null, 2));
    } else {
      const error = await response.text();
      console.log('Error:', error);
    }
    
    console.log('---');
  } catch (error) {
    console.error(`Error testing ${endpoint}:`, error.message);
    console.log('---');
  }
}

async function runTests() {
  console.log('🧪 Testing RideShare SA Backend Endpoints\n');
  
  // Test health check
  await testEndpoint('/api/health');
  
  // Test vehicles endpoint
  await testEndpoint('/api/vehicles');
  await testEndpoint('/api/vehicles?status=APPROVED');
  
  // Test notifications endpoint (should return 401 without auth)
  await testEndpoint('/api/notifications');
  
  // Test bookings endpoint (should return 401 without auth)
  await testEndpoint('/api/bookings');
  
  console.log('✅ All tests completed!');
}

runTests().catch(console.error);
