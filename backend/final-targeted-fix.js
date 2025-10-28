const fs = require('fs');
const path = require('path');

console.log('🔧 Final Targeted Fix for Remaining Errors');
console.log('==========================================');

// 1. Fix missing model exports
console.log('\n1. Fixing missing model exports...');
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

// 2. Fix property name mismatches in critical files
console.log('\n2. Fixing property name mismatches...');

// Fix specific property mappings
const criticalPropertyFixes = [
  {
    file: 'src/routes/bookings-production.ts',
    fixes: [
      { from: 'start_date', to: 'startDate' },
      { from: 'end_date', to: 'endDate' },
      { from: 'listing_id', to: 'listingId' },
      { from: 'cancellationReason', to: 'cancellation_reason' }
    ]
  },
  {
    file: 'src/routes/bookings.routes.ts',
    fixes: [
      { from: 'hostId', to: 'host_id' },
      { from: 'displayName', to: 'display_name' },
      { from: 'hostNotes', to: 'host_notes' },
      { from: 'renterId', to: 'renter_id' },
      { from: 'cancellationReason', to: 'cancellation_reason' },
      { from: 'pickupTime', to: 'pickup_time' },
      { from: 'pickupLocation', to: 'pickup_location' },
      { from: 'returnTime', to: 'return_time' },
      { from: 'returnLocation', to: 'return_location' }
    ]
  },
  {
    file: 'src/routes/payments.routes.ts',
    fixes: [
      { from: 'renterId', to: 'renter_id' },
      { from: 'hostId', to: 'host_id' }
    ]
  },
  {
    file: 'src/routes/reviews.ts',
    fixes: [
      { from: 'listingId', to: 'listing_id' },
      { from: 'reviewerId', to: 'reviewer_id' }
    ]
  },
  {
    file: 'src/routes/vehicles-production.ts',
    fixes: [
      { from: 'vehicleType', to: 'vehicle_type' },
      { from: 'pricePerWeek', to: 'price_per_week' },
      { from: 'pricePerMonth', to: 'price_per_month' },
      { from: 'ratingAverage', to: 'rating_average' },
      { from: 'ratingCount', to: 'rating_count' }
    ]
  },
  {
    file: 'src/routes/vehicles.ts',
    fixes: [
      { from: 'vehicle_type', to: 'vehicleType' }
    ]
  },
  {
    file: 'src/services/auth.service.ts',
    fixes: [
      { from: 'firebaseUid', to: 'firebase_uid' },
      { from: 'displayName', to: 'display_name' }
    ]
  },
  {
    file: 'src/routes/auth.routes.ts',
    fixes: [
      { from: 'firebaseUid', to: 'firebase_uid' }
    ]
  },
  {
    file: 'src/routes/firestore-auth.ts',
    fixes: [
      { from: 'passwordHash', to: 'password_hash' },
      { from: 'firebaseUid', to: 'firebase_uid' }
    ]
  },
  {
    file: 'src/routes/listings-production.ts',
    fixes: [
      { from: 'approvalStatus', to: 'approval_status' }
    ]
  }
];

criticalPropertyFixes.forEach(({ file, fixes }) => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      fixes.forEach(({ from, to }) => {
        const regex = new RegExp(`\\b${from}\\b`, 'g');
        if (content.includes(from)) {
          content = content.replace(regex, to);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed properties in ${file}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}:`, error.message);
    }
  }
});

// 3. Fix role comparisons
console.log('\n3. Fixing role comparisons...');
const roleFiles = [
  'src/routes/bookings-production.ts',
  'src/routes/enhanced-listings.ts'
];

roleFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix role comparisons
      content = content.replace(/'HOST'/g, "'host'");
      content = content.replace(/'ADMIN'/g, "'admin'");
      content = content.replace(/"HOST"/g, '"host"');
      content = content.replace(/"ADMIN"/g, '"admin"');
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing roles in ${filePath}:`, error.message);
    }
  }
});

// 4. Fix status comparisons
console.log('\n4. Fixing status comparisons...');
const statusFiles = [
  'src/routes/bookings.routes.ts',
  'src/routes/bookings-new.ts'
];

statusFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix status comparisons
      content = content.replace(/status !== 'approved'/g, "status !== 'confirmed'");
      content = content.replace(/status: 'approved'/g, "status: 'confirmed'");
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing status in ${filePath}:`, error.message);
    }
  }
});

// 5. Fix missing properties in models
console.log('\n5. Fixing missing model properties...');

// Fix Booking model
const bookingModelPath = path.join(__dirname, 'src', 'models', 'Booking.ts');
try {
  let content = fs.readFileSync(bookingModelPath, 'utf8');
  
  // Add missing properties
  const missingProperties = [
    'totalPrice: DataTypes.DECIMAL(10, 2)',
    'cancellation_reason: DataTypes.TEXT',
    'host_notes: DataTypes.TEXT',
    'pickup_time: DataTypes.DATE',
    'pickup_location: DataTypes.STRING',
    'return_time: DataTypes.DATE',
    'return_location: DataTypes.STRING'
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
    'display_name: DataTypes.STRING',
    'first_name: DataTypes.STRING',
    'last_name: DataTypes.STRING',
    'firebase_uid: DataTypes.STRING',
    'password_hash: DataTypes.STRING',
    'is_email_verified: DataTypes.BOOLEAN',
    'is_phone_verified: DataTypes.BOOLEAN',
    'approval_status: DataTypes.ENUM("pending", "approved", "rejected")',
    'document_status: DataTypes.ENUM("not_uploaded", "pending", "approved", "rejected")',
    'two_factor_enabled: DataTypes.BOOLEAN',
    'two_factor_secret: DataTypes.STRING'
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
    'read_at: DataTypes.DATE',
    'user_id: DataTypes.INTEGER'
  ];

  missingProperties.forEach(prop => {
    if (!content.includes(prop.split(':')[0])) {
      content = content.replace(
        'is_read: DataTypes.BOOLEAN',
        `is_read: DataTypes.BOOLEAN,
      ${prop}`
      );
    }
  });

  // Update notification types
  const validTypes = [
    'booking', 'approval', 'payment', 'system', 
    'booking_request', 'booking_approved', 'booking_rejected', 
    'payment_received', 'listing_approved', 'listing_rejected', 
    'review_received', 'system_announcement'
  ];

  if (content.includes('type: DataTypes.ENUM')) {
    content = content.replace(
      /type: DataTypes\.ENUM\([^)]+\)/,
      `type: DataTypes.ENUM('${validTypes.join("', '")}')`
    );
  }

  fs.writeFileSync(notificationModelPath, content);
  console.log('✅ Fixed Notification model properties');
} catch (error) {
  console.log('❌ Error fixing Notification model:', error.message);
}

// 6. Fix missing imports and exports
console.log('\n6. Fixing missing imports...');
const importFiles = [
  'src/routes/bookings-new.ts'
];

importFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix missing imports
      if (content.includes('import { sequelize }')) {
        content = content.replace('import { sequelize }', 'import { sequelize }');
      }
      
      if (content.includes('import auth from')) {
        content = content.replace('import auth from', 'import { authenticateToken as auth } from');
      }
      
      if (content.includes('auth.requireAuth')) {
        content = content.replace('auth.requireAuth', 'auth');
      }
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing imports in ${filePath}:`, error.message);
    }
  }
});

// 7. Fix type mismatches
console.log('\n7. Fixing type mismatches...');
const typeFixFiles = [
  'src/routes/messages.ts',
  'src/routes/payments.routes.ts',
  'src/routes/reviews.ts'
];

typeFixFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix user ID conversions
      content = content.replace(/req\.user!\.id\.toString\(\)\.toString\(\)/g, 'req.user!.id.toString()');
      content = content.replace(/req\.user!\.id\.toString\(\)/g, 'req.user!.id.toString()');
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing types in ${filePath}:`, error.message);
    }
  }
});

console.log('\n✅ Final targeted fixes applied!');
console.log('Run "npm run build" to check for remaining errors.');
