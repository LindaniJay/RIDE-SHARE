#!/usr/bin/env node

const { User, Listing } = require('./dist/models');

async function testAdminApi() {
  try {
    console.log('🔍 Testing admin API with database query...');
    
    // Test the exact query used by the API
    const apiQuery = await Listing.findAndCountAll({
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
    
    console.log(`📊 Database query results: ${apiQuery.count} pending vehicles`);
    
    if (apiQuery.rows.length > 0) {
      console.log('\n📋 Pending vehicles found:');
      apiQuery.rows.forEach((vehicle, index) => {
        console.log(`${index + 1}. ${vehicle.title}`);
        console.log(`   - ID: ${vehicle.id}`);
        console.log(`   - Host: ${vehicle.host ? vehicle.host.first_name : 'No host'}`);
        console.log(`   - Approved: ${vehicle.approved}`);
        console.log(`   - Available: ${vehicle.is_available}`);
        console.log('');
      });
    }
    
    // Test different API endpoints
    console.log('🧪 Testing different API endpoints...');
    
    const endpoints = [
      'http://localhost:5001/api/admin/vehicles/pending',
      'http://localhost:5001/api/vehicles/admin/pending',
      'http://localhost:5001/api/listings/admin/pending'
    ];
    
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(`\n🔗 ${endpoint}:`);
        console.log(`   Status: ${response.status}`);
        console.log(`   Vehicles: ${data.vehicles ? data.vehicles.length : 'N/A'}`);
        if (data.vehicles && data.vehicles.length > 0) {
          console.log(`   ✅ Found ${data.vehicles.length} vehicles!`);
        }
      } catch (error) {
        console.log(`\n🔗 ${endpoint}: Error - ${error.message}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error testing admin API:', error);
  }
}

// Use built-in fetch if available, otherwise use node-fetch
if (typeof fetch === 'undefined') {
  const fetch = require('node-fetch');
  global.fetch = fetch;
}

testAdminApi();






