const fs = require('fs');
const path = require('path');

console.log('🔧 Final Model Fix');
console.log('==================');

// 1. Fix User model to include all required properties
console.log('\n1. Fixing User model...');
const userModelPath = path.join(__dirname, 'src', 'models', 'User.ts');

try {
  let userContent = fs.readFileSync(userModelPath, 'utf8');
  
  // Add missing properties
  const missingUserProperties = [
    'name: DataTypes.STRING',
    'password: DataTypes.STRING',
    'password_hash: DataTypes.STRING',
    'firebase_uid: DataTypes.STRING',
    'display_name: DataTypes.STRING',
    'first_name: DataTypes.STRING',
    'last_name: DataTypes.STRING',
    'is_email_verified: DataTypes.BOOLEAN',
    'is_phone_verified: DataTypes.BOOLEAN',
    'approval_status: DataTypes.ENUM("pending", "approved", "rejected")',
    'document_status: DataTypes.ENUM("not_uploaded", "pending", "approved", "rejected")',
    'verified: DataTypes.BOOLEAN'
  ];

  missingUserProperties.forEach(prop => {
    if (!userContent.includes(prop.split(':')[0])) {
      userContent = userContent.replace(
        'isVerified: DataTypes.BOOLEAN',
        `isVerified: DataTypes.BOOLEAN,
      ${prop}`
      );
    }
  });

  fs.writeFileSync(userModelPath, userContent);
  console.log('✅ Fixed User model');
} catch (error) {
  console.log('❌ Error fixing User model:', error.message);
}

// 2. Fix Listing model to include all required properties
console.log('\n2. Fixing Listing model...');
const listingModelPath = path.join(__dirname, 'src', 'models', 'Listing.ts');

try {
  let listingContent = fs.readFileSync(listingModelPath, 'utf8');
  
  // Add missing properties
  const missingListingProperties = [
    'vehicle_type: DataTypes.STRING',
    'price_per_week: DataTypes.DECIMAL(10, 2)',
    'price_per_month: DataTypes.DECIMAL(10, 2)',
    'rating_average: DataTypes.DECIMAL(3, 2)',
    'rating_count: DataTypes.INTEGER',
    'rating: DataTypes.DECIMAL(3, 2)',
    'total_bookings: DataTypes.INTEGER',
    'is_featured: DataTypes.BOOLEAN',
    'category: DataTypes.STRING',
    'minimum_rental_days: DataTypes.INTEGER',
    'approval_status: DataTypes.ENUM("pending", "approved", "rejected")',
    'host_id: DataTypes.INTEGER'
  ];

  missingListingProperties.forEach(prop => {
    if (!listingContent.includes(prop.split(':')[0])) {
      listingContent = listingContent.replace(
        'image: DataTypes.STRING',
        `image: DataTypes.STRING,
      ${prop}`
      );
    }
  });

  fs.writeFileSync(listingModelPath, listingContent);
  console.log('✅ Fixed Listing model');
} catch (error) {
  console.log('❌ Error fixing Listing model:', error.message);
}

// 3. Fix Notification model
console.log('\n3. Fixing Notification model...');
const notificationModelPath = path.join(__dirname, 'src', 'models', 'Notification.ts');

try {
  let notificationContent = fs.readFileSync(notificationModelPath, 'utf8');
  
  // Update notification types to include all valid types
  const validTypes = [
    'booking', 'approval', 'payment', 'system', 
    'booking_request', 'booking_approved', 'booking_rejected', 
    'payment_received', 'listing_approved', 'listing_rejected', 
    'review_received', 'system_announcement'
  ];

  if (notificationContent.includes('type: DataTypes.ENUM')) {
    notificationContent = notificationContent.replace(
      /type: DataTypes\.ENUM\([^)]+\)/,
      `type: DataTypes.ENUM('${validTypes.join("', '")}')`
    );
  }

  // Add missing properties
  const missingNotificationProperties = [
    'read_at: DataTypes.DATE',
    'user_id: DataTypes.INTEGER'
  ];

  missingNotificationProperties.forEach(prop => {
    if (!notificationContent.includes(prop.split(':')[0])) {
      notificationContent = notificationContent.replace(
        'is_read: DataTypes.BOOLEAN',
        `is_read: DataTypes.BOOLEAN,
      ${prop}`
      );
    }
  });

  fs.writeFileSync(notificationModelPath, notificationContent);
  console.log('✅ Fixed Notification model');
} catch (error) {
  console.log('❌ Error fixing Notification model:', error.message);
}

// 4. Fix auth middleware to handle missing name property
console.log('\n4. Fixing auth middleware...');
const authMiddlewarePath = path.join(__dirname, 'src', 'middleware', 'auth.ts');

try {
  let authContent = fs.readFileSync(authMiddlewarePath, 'utf8');
  
  // Update the AuthenticatedRequest interface to make name optional
  if (authContent.includes('name: string;')) {
    authContent = authContent.replace('name: string;', 'name?: string;');
    fs.writeFileSync(authMiddlewarePath, authContent);
    console.log('✅ Made name property optional in AuthenticatedRequest');
  }
} catch (error) {
  console.log('❌ Error fixing auth middleware:', error.message);
}

// 5. Fix notification service
console.log('\n5. Fixing notification service...');
const notificationServicePath = path.join(__dirname, 'src', 'services', 'notification.service.ts');

try {
  let content = fs.readFileSync(notificationServicePath, 'utf8');
  
  // Fix user_id property name
  if (content.includes('user_id: parseInt(data.userId),')) {
    content = content.replace('user_id: parseInt(data.userId),', 'userId: parseInt(data.userId),');
  }
  
  // Fix is_read property name
  if (content.includes('is_read: true')) {
    content = content.replace('is_read: true', 'isRead: true');
  }
  
  // Fix read_at property name
  if (content.includes('read_at: new Date()')) {
    content = content.replace('read_at: new Date()', 'readAt: new Date()');
  }
  
  fs.writeFileSync(notificationServicePath, content);
  console.log('✅ Fixed notification service property names');
} catch (error) {
  console.log('❌ Error fixing notification service:', error.message);
}

// 6. Fix seed data
console.log('\n6. Fixing seed data...');
const seedDataPath = path.join(__dirname, 'src', 'scripts', 'seedData.ts');

try {
  let content = fs.readFileSync(seedDataPath, 'utf8');
  
  // Fix listing creation
  if (content.includes('host_id: listingData.host_id!')) {
    content = content.replace('host_id: listingData.host_id!', 'hostId: listingData.host_id!');
  }
  
  fs.writeFileSync(seedDataPath, content);
  console.log('✅ Fixed seed data');
} catch (error) {
  console.log('❌ Error fixing seed data:', error.message);
}

// 7. Fix test helpers
console.log('\n7. Fixing test helpers...');
const testHelpersPath = path.join(__dirname, 'src', 'tests', 'test-helpers.ts');

try {
  let content = fs.readFileSync(testHelpersPath, 'utf8');
  
  // Fix property names
  if (content.includes('firebase_uid: string;')) {
    content = content.replace('firebase_uid: string;', 'uid: string;');
  }
  
  if (content.includes('is_email_verified: boolean;')) {
    content = content.replace('is_email_verified: boolean;', 'isVerified: boolean;');
  }
  
  fs.writeFileSync(testHelpersPath, content);
  console.log('✅ Fixed test helpers');
} catch (error) {
  console.log('❌ Error fixing test helpers:', error.message);
}

// 8. Fix auth service
console.log('\n8. Fixing auth service...');
const authServicePath = path.join(__dirname, 'src', 'services', 'auth.service.ts');

try {
  let content = fs.readFileSync(authServicePath, 'utf8');
  
  // Fix verified property
  if (content.includes('verified: firebaseUser.email_verified || false,')) {
    content = content.replace('verified: firebaseUser.email_verified || false,', 'isVerified: firebaseUser.email_verified || false,');
  }
  
  fs.writeFileSync(authServicePath, content);
  console.log('✅ Fixed auth service');
} catch (error) {
  console.log('❌ Error fixing auth service:', error.message);
}

// 9. Fix auto approval service
console.log('\n9. Fixing auto approval service...');
const autoApprovalPath = path.join(__dirname, 'src', 'services', 'autoApprovalService.ts');

try {
  let content = fs.readFileSync(autoApprovalPath, 'utf8');
  
  // Fix created_at access
  if (content.includes('user.created_at?.getTime() || Date.now()')) {
    content = content.replace(
      'user.created_at?.getTime() || Date.now()',
      '(user.created_at?.getTime() || Date.now())'
    );
  }
  
  fs.writeFileSync(autoApprovalPath, content);
  console.log('✅ Fixed auto approval service');
} catch (error) {
  console.log('❌ Error fixing auto approval service:', error.message);
}

console.log('\n✅ Final model fixes applied!');
console.log('Run "npm run build" to check for remaining errors.');
