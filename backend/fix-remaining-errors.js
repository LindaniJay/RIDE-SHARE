const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Remaining TypeScript Errors');
console.log('=====================================');

// 1. Fix property name mismatches (snake_case to camelCase)
console.log('\n1. Fixing property name mismatches...');

const propertyMappings = {
  'total_price': 'totalPrice',
  'start_date': 'startDate',
  'end_date': 'endDate',
  'host_notes': 'hostNotes',
  'cancellation_reason': 'cancellationReason',
  'pickup_time': 'pickupTime',
  'pickup_location': 'pickupLocation',
  'return_time': 'returnTime',
  'return_location': 'returnLocation',
  'payment_status': 'paymentStatus',
  'vehicle_type': 'vehicleType',
  'price_per_week': 'pricePerWeek',
  'price_per_month': 'pricePerMonth',
  'rating_average': 'ratingAverage',
  'rating_count': 'ratingCount',
  'host_id': 'hostId',
  'renter_id': 'renterId',
  'admin_id': 'adminId',
  'user_id': 'userId',
  'booking_id': 'bookingId',
  'listing_id': 'listingId',
  'reviewer_id': 'reviewerId',
  'target_id': 'targetId',
  'display_name': 'displayName',
  'first_name': 'firstName',
  'last_name': 'lastName',
  'firebase_uid': 'firebaseUid',
  'password_hash': 'passwordHash',
  'is_email_verified': 'isEmailVerified',
  'is_phone_verified': 'isPhoneVerified',
  'approval_status': 'approvalStatus',
  'document_status': 'documentStatus',
  'updated_at': 'updatedAt',
  'created_at': 'createdAt'
};

// Files to fix property names
const filesToFix = [
  'src/routes/bookings-production.ts',
  'src/routes/bookings.routes.ts',
  'src/routes/payments-production.ts',
  'src/routes/payments.routes.ts',
  'src/routes/vehicles-production.ts',
  'src/routes/vehicles.ts',
  'src/routes/messages.ts',
  'src/routes/reviews.ts',
  'src/routes/auth.routes.ts',
  'src/routes/firestore-auth.ts',
  'src/routes/documents.ts',
  'src/routes/stats.ts',
  'src/routes/earnings.ts',
  'src/routes/enhanced-listings.ts',
  'src/routes/listings-production.ts',
  'src/routes/listings.routes.ts',
  'src/routes/dashboard.ts',
  'src/routes/admin-production.ts',
  'src/routes/admin.ts',
  'src/routes/analytics.ts',
  'src/routes/approval-requests.ts',
  'src/routes/auth-production.ts',
  'src/routes/bookings-new.ts',
  'src/routes/checkpoints-production.ts',
  'src/routes/checkout-analytics.ts',
  'src/routes/enhanced-listings.ts',
  'src/routes/host.ts',
  'src/routes/listings.ts',
  'src/routes/notifications.ts',
  'src/routes/support.ts',
  'src/scripts/seedData.ts',
  'src/services/auth.service.ts',
  'src/services/notification.service.ts',
  'src/services/notifications.ts',
  'src/tests/test-helpers.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Apply property name mappings
      Object.entries(propertyMappings).forEach(([oldName, newName]) => {
        const regex = new RegExp(`\\b${oldName}\\b`, 'g');
        if (content.includes(oldName)) {
          content = content.replace(regex, newName);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed property names in ${filePath}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
});

// 2. Fix role comparisons
console.log('\n2. Fixing role comparisons...');
const roleFiles = [
  'src/routes/auth.routes.ts',
  'src/routes/bookings-production.ts',
  'src/routes/dashboard.ts',
  'src/routes/documents.ts',
  'src/routes/enhanced-listings.ts',
  'src/routes/firestore-auth.ts',
  'src/routes/listings-production.ts',
  'src/routes/messages.ts',
  'src/routes/payments-production.ts',
  'src/routes/stats.ts'
];

roleFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix role comparisons
      content = content.replace(/'ADMIN'/g, "'admin'");
      content = content.replace(/'HOST'/g, "'host'");
      content = content.replace(/'RENTER'/g, "'renter'");
      content = content.replace(/"ADMIN"/g, '"admin"');
      content = content.replace(/"HOST"/g, '"host"');
      content = content.replace(/"RENTER"/g, '"renter"');
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing roles in ${filePath}:`, error.message);
    }
  }
});

// 3. Fix type mismatches (string vs number)
console.log('\n3. Fixing type mismatches...');

// Fix user ID type conversions
const typeFixFiles = [
  'src/routes/messages.ts',
  'src/routes/payments.routes.ts',
  'src/routes/reviews.ts',
  'src/routes/vehicles-production.ts'
];

typeFixFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix user ID conversions
      content = content.replace(/parseInt\(req\.user!\.id\)/g, 'req.user!.id.toString()');
      content = content.replace(/req\.user!\.id(?!\s*[=<>])/g, 'req.user!.id.toString()');
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing types in ${filePath}:`, error.message);
    }
  }
});

// 4. Fix missing required properties
console.log('\n4. Fixing missing required properties...');

// Fix User model creation
const userCreationFiles = [
  'src/services/auth.service.ts',
  'src/tests/test-helpers.ts'
];

userCreationFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix User creation
      if (content.includes('firebase_uid:')) {
        content = content.replace('firebase_uid:', 'uid:');
      }
      if (content.includes('is_email_verified:')) {
        content = content.replace('is_email_verified:', 'isVerified:');
      }
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing user creation in ${filePath}:`, error.message);
    }
  }
});

// Fix Notification model creation
const notificationServicePath = path.join(__dirname, 'src', 'services', 'notification.service.ts');
if (fs.existsSync(notificationServicePath)) {
  try {
    let content = fs.readFileSync(notificationServicePath, 'utf8');
    
    // Add missing isRead property
    if (content.includes('userId: parseInt(data.userId),')) {
      content = content.replace(
        'userId: parseInt(data.userId),',
        'userId: parseInt(data.userId),\n        isRead: false,'
      );
    }
    
    // Fix readAt property
    if (content.includes('readAt: new Date()')) {
      content = content.replace('readAt: new Date()', 'readAt: new Date()');
    }
    
    fs.writeFileSync(notificationServicePath, content);
  } catch (error) {
    console.log('❌ Error fixing notification service:', error.message);
  }
}

// 5. Fix missing model exports
console.log('\n5. Fixing missing model exports...');
const modelsIndexPath = path.join(__dirname, 'src', 'models', 'index.ts');

try {
  let content = fs.readFileSync(modelsIndexPath, 'utf8');
  
  // Add missing exports
  const missingExports = [
    'export { default as Checkpoint } from "./Checkpoint";',
    'export { default as CheckpointItem } from "./CheckpointItem";',
    'export { default as CheckpointImage } from "./CheckpointImage";',
    'export { default as Document } from "./Document";',
    'export { default as Payment } from "./Payment";',
    'export { default as Review } from "./Review";',
    'export { default as AdminLog } from "./AdminLog";',
    'export { sequelize } from "./index";'
  ];

  missingExports.forEach(exportLine => {
    if (!content.includes(exportLine)) {
      content += `\n${exportLine}`;
    }
  });

  fs.writeFileSync(modelsIndexPath, content);
  console.log('✅ Added missing model exports');
} catch (error) {
  console.log('❌ Error fixing model exports:', error.message);
}

// 6. Fix missing properties in models
console.log('\n6. Fixing missing model properties...');

// Fix Booking model
const bookingModelPath = path.join(__dirname, 'src', 'models', 'Booking.ts');
try {
  let content = fs.readFileSync(bookingModelPath, 'utf8');
  
  // Add missing properties
  const missingProperties = [
    'totalPrice: DataTypes.DECIMAL(10, 2)',
    'cancellationReason: DataTypes.TEXT',
    'hostNotes: DataTypes.TEXT',
    'pickupTime: DataTypes.DATE',
    'pickupLocation: DataTypes.STRING',
    'returnTime: DataTypes.DATE',
    'returnLocation: DataTypes.STRING'
  ];

  missingProperties.forEach(prop => {
    if (!content.includes(prop.split(':')[0])) {
      content = content.replace(
        'paymentStatus: DataTypes.ENUM("pending", "paid", "failed", "refunded")',
        `paymentStatus: DataTypes.ENUM("pending", "paid", "failed", "refunded"),
      ${prop}`
      );
    }
  });

  fs.writeFileSync(bookingModelPath, content);
  console.log('✅ Fixed Booking model properties');
} catch (error) {
  console.log('❌ Error fixing Booking model:', error.message);
}

// Fix Listing model
const listingModelPath = path.join(__dirname, 'src', 'models', 'Listing.ts');
try {
  let content = fs.readFileSync(listingModelPath, 'utf8');
  
  // Add missing properties
  const missingProperties = [
    'vehicleType: DataTypes.STRING',
    'pricePerWeek: DataTypes.DECIMAL(10, 2)',
    'pricePerMonth: DataTypes.DECIMAL(10, 2)',
    'ratingAverage: DataTypes.DECIMAL(3, 2)',
    'ratingCount: DataTypes.INTEGER',
    'rating: DataTypes.DECIMAL(3, 2)',
    'totalBookings: DataTypes.INTEGER',
    'isFeatured: DataTypes.BOOLEAN',
    'category: DataTypes.STRING',
    'minimumRentalDays: DataTypes.INTEGER',
    'approvalStatus: DataTypes.ENUM("pending", "approved", "rejected")',
    'hostId: DataTypes.INTEGER'
  ];

  missingProperties.forEach(prop => {
    if (!content.includes(prop.split(':')[0])) {
      content = content.replace(
        'image: DataTypes.STRING',
        `image: DataTypes.STRING,
      ${prop}`
      );
    }
  });

  fs.writeFileSync(listingModelPath, content);
  console.log('✅ Fixed Listing model properties');
} catch (error) {
  console.log('❌ Error fixing Listing model:', error.message);
}

// Fix User model
const userModelPath = path.join(__dirname, 'src', 'models', 'User.ts');
try {
  let content = fs.readFileSync(userModelPath, 'utf8');
  
  // Add missing properties
  const missingProperties = [
    'displayName: DataTypes.STRING',
    'firstName: DataTypes.STRING',
    'lastName: DataTypes.STRING',
    'firebaseUid: DataTypes.STRING',
    'passwordHash: DataTypes.STRING',
    'isEmailVerified: DataTypes.BOOLEAN',
    'isPhoneVerified: DataTypes.BOOLEAN',
    'approvalStatus: DataTypes.ENUM("pending", "approved", "rejected")',
    'documentStatus: DataTypes.ENUM("not_uploaded", "pending", "approved", "rejected")'
  ];

  missingProperties.forEach(prop => {
    if (!content.includes(prop.split(':')[0])) {
      content = content.replace(
        'isVerified: DataTypes.BOOLEAN',
        `isVerified: DataTypes.BOOLEAN,
      ${prop}`
      );
    }
  });

  fs.writeFileSync(userModelPath, content);
  console.log('✅ Fixed User model properties');
} catch (error) {
  console.log('❌ Error fixing User model:', error.message);
}

// Fix Notification model
const notificationModelPath = path.join(__dirname, 'src', 'models', 'Notification.ts');
try {
  let content = fs.readFileSync(notificationModelPath, 'utf8');
  
  // Add missing properties
  const missingProperties = [
    'readAt: DataTypes.DATE',
    'userId: DataTypes.INTEGER'
  ];

  missingProperties.forEach(prop => {
    if (!content.includes(prop.split(':')[0])) {
      content = content.replace(
        'isRead: DataTypes.BOOLEAN',
        `isRead: DataTypes.BOOLEAN,
      ${prop}`
      );
    }
  });

  fs.writeFileSync(notificationModelPath, content);
  console.log('✅ Fixed Notification model properties');
} catch (error) {
  console.log('❌ Error fixing Notification model:', error.message);
}

// 7. Fix status comparisons
console.log('\n7. Fixing status comparisons...');
const statusFiles = [
  'src/routes/bookings.routes.ts',
  'src/routes/payments.routes.ts'
];

statusFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix status comparisons
      content = content.replace(/status !== 'approved'/g, "status !== 'confirmed'");
      content = content.replace(/status !== 'active'/g, "status !== 'confirmed'");
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing status in ${filePath}:`, error.message);
    }
  }
});

// 8. Fix missing imports
console.log('\n8. Fixing missing imports...');
const importFiles = [
  'src/routes/bookings-new.ts',
  'src/routes/payments.routes.ts'
];

importFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix missing imports
      if (content.includes('import auth from')) {
        content = content.replace('import auth from', 'import { authenticateToken as auth } from');
      }
      
      if (content.includes('import { verifyJWT')) {
        content = content.replace('import { verifyJWT', 'import { authenticateToken as verifyJWT');
      }
      
      if (content.includes('import { requireAuth')) {
        content = content.replace('import { requireAuth', 'import { authenticateToken as requireAuth');
      }
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing imports in ${filePath}:`, error.message);
    }
  }
});

console.log('\n✅ Remaining error fixes applied!');
console.log('Run "npm run build" to check for remaining errors.');
