#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');

console.log('🧪 RideShareX Backend Endpoint Testing');
console.log('======================================\n');

const BASE_URL = 'http://localhost:5001';
const testResults = {
  passed: 0,
  failed: 0,
  errors: []
};

// Test configuration
const tests = [
  {
    name: 'Health Check',
    method: 'GET',
    url: '/api/health',
    expectedStatus: 200,
    expectedData: { status: 'ok' }
  },
  {
    name: 'Test Endpoint',
    method: 'GET',
    url: '/api/test',
    expectedStatus: 200,
    expectedData: { message: 'Backend is working!' }
  },
  {
    name: 'Auth Routes - Login (should fail without token)',
    method: 'POST',
    url: '/api/auth/login',
    expectedStatus: 400,
    data: {}
  },
  {
    name: 'Listings - Get All (should work)',
    method: 'GET',
    url: '/api/listings',
    expectedStatus: 200
  },
  {
    name: 'Bookings - Get All (should work)',
    method: 'GET',
    url: '/api/bookings',
    expectedStatus: 200
  },
  {
    name: 'Admin - Dashboard Stats (should fail without auth)',
    method: 'GET',
    url: '/api/admin/dashboard-stats',
    expectedStatus: 401
  },
  {
    name: 'Host - Earnings (should fail without auth)',
    method: 'GET',
    url: '/api/host/earnings',
    expectedStatus: 401
  },
  {
    name: 'Payments - Get All (should work)',
    method: 'GET',
    url: '/api/payments',
    expectedStatus: 200
  },
  {
    name: 'Notifications - Get All (should work)',
    method: 'GET',
    url: '/api/notifications',
    expectedStatus: 200
  },
  {
    name: 'Support - Get All (should work)',
    method: 'GET',
    url: '/api/support',
    expectedStatus: 200
  }
];

async function runTest(test) {
  try {
    console.log(`Testing: ${test.name}`);
    
    const config = {
      method: test.method,
      url: `${BASE_URL}${test.url}`,
      timeout: 5000,
      validateStatus: () => true // Don't throw on any status
    };
    
    if (test.data) {
      config.data = test.data;
    }
    
    const response = await axios(config);
    
    // Check status code
    if (response.status === test.expectedStatus) {
      console.log(`  ✅ Status: ${response.status} (expected: ${test.expectedStatus})`);
      
      // Check response data if specified
      if (test.expectedData) {
        const dataMatch = Object.keys(test.expectedData).every(key => 
          response.data[key] === test.expectedData[key]
        );
        
        if (dataMatch) {
          console.log(`  ✅ Data: ${JSON.stringify(test.expectedData)}`);
          testResults.passed++;
        } else {
          console.log(`  ❌ Data mismatch: expected ${JSON.stringify(test.expectedData)}, got ${JSON.stringify(response.data)}`);
          testResults.failed++;
          testResults.errors.push(`${test.name}: Data mismatch`);
        }
      } else {
        testResults.passed++;
      }
    } else {
      console.log(`  ❌ Status: ${response.status} (expected: ${test.expectedStatus})`);
      testResults.failed++;
      testResults.errors.push(`${test.name}: Status ${response.status} instead of ${test.expectedStatus}`);
    }
    
    // Log response data for debugging
    if (response.data) {
      console.log(`  📄 Response: ${JSON.stringify(response.data).substring(0, 100)}...`);
    }
    
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    testResults.failed++;
    testResults.errors.push(`${test.name}: ${error.message}`);
  }
  
  console.log('');
}

async function runAllTests() {
  console.log('Starting backend endpoint tests...\n');
  
  // Check if server is running
  try {
    await axios.get(`${BASE_URL}/api/health`, { timeout: 2000 });
    console.log('✅ Backend server is running\n');
  } catch (error) {
    console.log('❌ Backend server is not running or not accessible');
    console.log('Please start the server with: npm run dev or npm run start:fixed\n');
    return;
  }
  
  // Run all tests
  for (const test of tests) {
    await runTest(test);
  }
  
  // Print results
  console.log('📊 Test Results Summary');
  console.log('======================');
  console.log(`✅ Passed: ${testResults.passed}`);
  console.log(`❌ Failed: ${testResults.failed}`);
  console.log(`📈 Success Rate: ${Math.round((testResults.passed / (testResults.passed + testResults.failed)) * 100)}%`);
  
  if (testResults.errors.length > 0) {
    console.log('\n❌ Errors:');
    testResults.errors.forEach(error => console.log(`  - ${error}`));
  }
  
  // Save results to file
  const results = {
    timestamp: new Date().toISOString(),
    summary: {
      passed: testResults.passed,
      failed: testResults.failed,
      successRate: Math.round((testResults.passed / (testResults.passed + testResults.failed)) * 100)
    },
    errors: testResults.errors
  };
  
  fs.writeFileSync('test-results.json', JSON.stringify(results, null, 2));
  console.log('\n💾 Results saved to test-results.json');
}

// Additional diagnostic tests
async function runDiagnostics() {
  console.log('\n🔍 Running Diagnostics...');
  console.log('=========================\n');
  
  // Test CORS
  try {
    const corsResponse = await axios.options(`${BASE_URL}/api/health`, {
      headers: {
        'Origin': 'http://localhost:3000',
        'Access-Control-Request-Method': 'GET'
      }
    });
    console.log('✅ CORS preflight working');
  } catch (error) {
    console.log('❌ CORS preflight failed:', error.message);
  }
  
  // Test WebSocket endpoint
  try {
    const wsResponse = await axios.get(`${BASE_URL}/socket.io/`, { timeout: 2000 });
    console.log('✅ WebSocket endpoint accessible');
  } catch (error) {
    console.log('❌ WebSocket endpoint not accessible:', error.message);
  }
  
  // Test rate limiting
  console.log('\nTesting rate limiting...');
  const rateLimitPromises = [];
  for (let i = 0; i < 5; i++) {
    rateLimitPromises.push(axios.get(`${BASE_URL}/api/health`, { timeout: 1000 }));
  }
  
  try {
    await Promise.all(rateLimitPromises);
    console.log('✅ Rate limiting not blocking normal requests');
  } catch (error) {
    console.log('⚠️  Rate limiting may be active:', error.message);
  }
}

// Run all tests
async function main() {
  await runAllTests();
  await runDiagnostics();
  
  console.log('\n🎯 Recommendations:');
  console.log('===================');
  
  if (testResults.failed > 0) {
    console.log('1. Check server logs for specific errors');
    console.log('2. Verify all routes are properly configured');
    console.log('3. Ensure database connection is working');
    console.log('4. Check Firebase configuration');
    console.log('5. Verify CORS settings');
  } else {
    console.log('🎉 All tests passed! Backend is working correctly.');
  }
  
  console.log('\nFor detailed debugging:');
  console.log('- Check server logs');
  console.log('- Run: npm run debug');
  console.log('- Verify environment variables');
  console.log('- Test database connection manually');
}

main().catch(console.error);
