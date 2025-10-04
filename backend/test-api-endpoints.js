#!/usr/bin/env node

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testAPIEndpoints() {
  const baseURL = 'http://localhost:5001/api';
  
  console.log('🧪 Testing API endpoints...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing health check...');
    const healthResponse = await fetch(`${baseURL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    console.log('');

    // Test 2: User registration
    console.log('2. Testing user registration...');
    const registerData = {
      email: 'test@example.com',
      password: 'Password123!',
      first_name: 'Test',
      last_name: 'User',
      role: 'renter'
    };

    const registerResponse = await fetch(`${baseURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    });

    const registerResult = await registerResponse.json();
    console.log('✅ Registration result:', registerResult);
    console.log('');

    // Test 3: User login
    console.log('3. Testing user login...');
    const loginData = {
      email: 'test@example.com',
      password: 'Password123!'
    };

    const loginResponse = await fetch(`${baseURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });

    const loginResult = await loginResponse.json();
    console.log('✅ Login result:', loginResult);
    console.log('');

    if (loginResult.token) {
      // Test 4: Get user profile
      console.log('4. Testing get user profile...');
      const profileResponse = await fetch(`${baseURL}/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${loginResult.token}`
        }
      });

      const profileResult = await profileResponse.json();
      console.log('✅ Profile result:', profileResult);
      console.log('');

      // Test 5: Get listings
      console.log('5. Testing get listings...');
      const listingsResponse = await fetch(`${baseURL}/listings`);
      const listingsResult = await listingsResponse.json();
      console.log('✅ Listings result:', listingsResult);
      console.log('');
    }

    console.log('🎉 All API tests completed successfully!');

  } catch (error) {
    console.error('❌ API test failed:', error.message);
    process.exit(1);
  }
}

// Run the tests
testAPIEndpoints();
