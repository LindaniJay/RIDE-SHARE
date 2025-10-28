#!/usr/bin/env node

const { User, Listing } = require('./dist/models');

async function testWithAuth() {
  try {
    console.log('🔍 Testing API with authentication...');
    
    // First, let's create an admin user
    const adminUser = await User.create({
      first_name: 'Admin',
      last_name: 'User',
      display_name: 'Admin User',
      email: 'admin@example.com',
      role: 'ADMIN',
      firebase_uid: 'admin-uid-123'
    });
    
    console.log('✅ Admin user created');
    
    // Test the database query directly
    const dbResults = await Listing.findAndCountAll({
      where: { 
        approved: false,
        is_available: true
      },
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: 0
    });
    
    console.log(`📊 Database has ${dbResults.count} pending vehicles`);
    
    // Test API endpoints with different authentication methods
    const testEndpoints = [
      {
        url: 'http://localhost:5001/api/admin/vehicles/pending',
        headers: { 'Authorization': 'Bearer test-token' }
      },
      {
        url: 'http://localhost:5001/api/admin/vehicles/pending',
        headers: { 'Authorization': 'Bearer admin-token' }
      },
      {
        url: 'http://localhost:5001/api/admin/vehicles/pending',
        headers: { 'X-Admin-Token': 'test' }
      },
      {
        url: 'http://localhost:5001/api/admin/vehicles/pending',
        headers: {}
      }
    ];
    
    for (const test of testEndpoints) {
      try {
        console.log(`\n🧪 Testing: ${test.url}`);
        console.log(`   Headers: ${JSON.stringify(test.headers)}`);
        
        const response = await fetch(test.url, {
          headers: test.headers
        });
        
        const data = await response.json();
        console.log(`   Status: ${response.status}`);
        console.log(`   Response: ${JSON.stringify(data, null, 2)}`);
        
        if (data.vehicles && data.vehicles.length > 0) {
          console.log(`   ✅ SUCCESS! Found ${data.vehicles.length} vehicles`);
        }
        
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error in test:', error);
  }
}

// Use built-in fetch if available, otherwise use node-fetch
if (typeof fetch === 'undefined') {
  const fetch = require('node-fetch');
  global.fetch = fetch;
}

testWithAuth();






