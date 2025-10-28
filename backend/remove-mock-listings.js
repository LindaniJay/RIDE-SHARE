#!/usr/bin/env node

const { User, Listing } = require('./dist/models');

async function removeMockListings() {
  try {
    console.log('🧹 Removing mock listings...');
    
    // Remove mock listings by title patterns
    const mockTitles = [
      '2020 Toyota Camry - Excellent Condition',
      '2019 BMW 3 Series - Luxury Sedan', 
      '2021 Honda Civic - Fuel Efficient'
    ];
    
    for (const title of mockTitles) {
      const deleted = await Listing.destroy({
        where: { title: title }
      });
      console.log(`✅ Removed: ${title} (${deleted} deleted)`);
    }
    
    // Also remove test users
    const testEmails = [
      'john.doe@example.com',
      'jane.smith@example.com',
      'admin@example.com'
    ];
    
    for (const email of testEmails) {
      const deleted = await User.destroy({
        where: { email: email }
      });
      console.log(`✅ Removed user: ${email} (${deleted} deleted)`);
    }
    
    // Check what's left in the database
    const remainingListings = await Listing.count();
    const remainingUsers = await User.count();
    
    console.log(`\n📊 Database after cleanup:`);
    console.log(`   - Listings: ${remainingListings}`);
    console.log(`   - Users: ${remainingUsers}`);
    
    // Check for any real listings
    if (remainingListings > 0) {
      const realListings = await Listing.findAll({
        attributes: ['id', 'title', 'approved', 'is_available', 'created_at'],
        order: [['created_at', 'DESC']]
      });
      
      console.log(`\n📋 Real listings found:`);
      realListings.forEach((listing, index) => {
        console.log(`${index + 1}. ${listing.title}`);
        console.log(`   - ID: ${listing.id}`);
        console.log(`   - Approved: ${listing.approved}`);
        console.log(`   - Available: ${listing.is_available}`);
        console.log(`   - Created: ${listing.created_at}`);
        console.log('');
      });
    } else {
      console.log('\n📭 No listings found in database');
    }
    
    console.log('\n🎉 Mock data cleanup completed!');
    
  } catch (error) {
    console.error('❌ Error removing mock listings:', error);
  }
}

removeMockListings();






