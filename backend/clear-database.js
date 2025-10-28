#!/usr/bin/env node

const { User, Listing } = require('./dist/models');

async function clearDatabase() {
  try {
    console.log('🧹 Clearing database to check for real listings...');
    
    // Get all current listings first
    const allListings = await Listing.findAll({
      attributes: ['id', 'title', 'host_id', 'created_at'],
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ]
    });
    
    console.log(`📊 Current listings in database: ${allListings.length}`);
    
    if (allListings.length > 0) {
      console.log('\n📋 All current listings:');
      allListings.forEach((listing, index) => {
        console.log(`${index + 1}. ${listing.title}`);
        console.log(`   - ID: ${listing.id}`);
        console.log(`   - Host: ${listing.host ? listing.host.first_name : 'No host'}`);
        console.log(`   - Created: ${listing.created_at}`);
        console.log('');
      });
    }
    
    // Clear all listings
    console.log('🗑️ Clearing all listings...');
    await Listing.destroy({ where: {} });
    console.log('✅ All listings cleared');
    
    // Clear all users
    console.log('🗑️ Clearing all users...');
    await User.destroy({ where: {} });
    console.log('✅ All users cleared');
    
    // Check final state
    const finalListings = await Listing.count();
    const finalUsers = await User.count();
    
    console.log(`\n📊 Database after clearing:`);
    console.log(`   - Listings: ${finalListings}`);
    console.log(`   - Users: ${finalUsers}`);
    
    console.log('\n🎉 Database cleared! Now you can create real listings through the frontend.');
    console.log('💡 To test:');
    console.log('   1. Start the frontend: npm run dev:frontend');
    console.log('   2. Create a new listing as a host');
    console.log('   3. Check the admin dashboard for pending approvals');
    
  } catch (error) {
    console.error('❌ Error clearing database:', error);
  }
}

clearDatabase();






