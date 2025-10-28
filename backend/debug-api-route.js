#!/usr/bin/env node

const { User, Listing } = require('./dist/models');

async function debugApiRoute() {
  try {
    console.log('🔍 Debugging API route issue...');
    
    // Test the exact query that should be used by the API
    console.log('\n1. Testing database query directly...');
    const directQuery = await Listing.findAndCountAll({
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
    
    console.log(`✅ Direct query: ${directQuery.count} vehicles found`);
    
    // Test if the issue is with the User association
    console.log('\n2. Testing without User association...');
    const queryWithoutUser = await Listing.findAndCountAll({
      where: { 
        approved: false,
        is_available: true
      },
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: 0
    });
    
    console.log(`✅ Without User association: ${queryWithoutUser.count} vehicles found`);
    
    // Test if the issue is with the where clause
    console.log('\n3. Testing with different where clauses...');
    
    const allListings = await Listing.count();
    console.log(`📊 Total listings: ${allListings}`);
    
    const approvedFalse = await Listing.count({ where: { approved: false } });
    console.log(`📊 Approved false: ${approvedFalse}`);
    
    const availableTrue = await Listing.count({ where: { is_available: true } });
    console.log(`📊 Available true: ${availableTrue}`);
    
    const bothConditions = await Listing.count({ 
      where: { 
        approved: false,
        is_available: true
      }
    });
    console.log(`📊 Both conditions: ${bothConditions}`);
    
    // Test the exact API response format
    console.log('\n4. Testing API response format...');
    const apiFormat = await Listing.findAndCountAll({
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
    
    const response = {
      success: true,
      vehicles: apiFormat.rows,
      pagination: {
        page: 1,
        limit: 20,
        total: apiFormat.count,
        pages: Math.ceil(apiFormat.count / 20)
      }
    };
    
    console.log(`✅ API format: ${response.vehicles.length} vehicles`);
    console.log(`📊 Total: ${response.pagination.total}`);
    
    if (response.vehicles.length > 0) {
      console.log('\n📋 Sample vehicle:');
      const vehicle = response.vehicles[0];
      console.log(`   - ID: ${vehicle.id}`);
      console.log(`   - Title: ${vehicle.title}`);
      console.log(`   - Host: ${vehicle.host ? vehicle.host.first_name : 'No host'}`);
    }
    
  } catch (error) {
    console.error('❌ Error debugging API route:', error);
  }
}

debugApiRoute();






