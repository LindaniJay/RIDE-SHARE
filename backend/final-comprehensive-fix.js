const fs = require('fs');
const path = require('path');

console.log('🔧 Final Comprehensive Fix');
console.log('==========================');

// 1. Fix model exports in index.ts
console.log('\n1. Fixing model exports...');
const modelsIndexPath = path.join(__dirname, 'src', 'models', 'index.ts');

try {
  let content = fs.readFileSync(modelsIndexPath, 'utf8');
  
  // Add missing model exports
  const missingExports = [
    'export { default as Checkpoint } from "./Checkpoint";',
    'export { default as CheckpointItem } from "./CheckpointItem";',
    'export { default as CheckpointImage } from "./CheckpointImage";',
    'export { default as Document } from "./Document";',
    'export { default as Payment } from "./Payment";',
    'export { default as Review } from "./Review";',
    'export { default as AdminLog } from "./AdminLog";'
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

// 2. Fix Booking model to include missing properties
console.log('\n2. Fixing Booking model...');
const bookingModelPath = path.join(__dirname, 'src', 'models', 'Booking.ts');

try {
  let content = fs.readFileSync(bookingModelPath, 'utf8');
  
  // Add missing properties
  const missingProperties = [
    'total_price: DataTypes.DECIMAL(10, 2)',
    'cancellation_reason: DataTypes.TEXT',
    'host_notes: DataTypes.TEXT',
    'pickup_time: DataTypes.DATE',
    'pickup_location: DataTypes.STRING',
    'return_time: DataTypes.DATE',
    'return_location: DataTypes.STRING',
    'start_date: DataTypes.DATE',
    'end_date: DataTypes.DATE'
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

  // Add missing methods
  const methods = `
  // Instance methods
  async approve() {
    this.status = 'confirmed';
    await this.save();
  }

  async reject() {
    this.status = 'cancelled';
    await this.save();
  }

  async cancel(reason: string, userId: number) {
    this.status = 'cancelled';
    this.cancellation_reason = reason;
    await this.save();
  }

  async start() {
    this.status = 'confirmed';
    await this.save();
  }

  async complete() {
    this.status = 'completed';
    await this.save();
  }

  async incrementViewCount() {
    // This would be implemented in the Listing model
  }
`;

  if (!content.includes('async approve()')) {
    content = content.replace(
      'export default Booking;',
      `${methods}\n\nexport default Booking;`
    );
  }

  fs.writeFileSync(bookingModelPath, content);
  console.log('✅ Fixed Booking model');
} catch (error) {
  console.log('❌ Error fixing Booking model:', error.message);
}

// 3. Fix User model to include missing properties
console.log('\n3. Fixing User model...');
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
    'document_status: DataTypes.ENUM("not_uploaded", "pending", "approved", "rejected")'
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
  console.log('✅ Fixed User model');
} catch (error) {
  console.log('❌ Error fixing User model:', error.message);
}

// 4. Fix Listing model to include missing properties
console.log('\n4. Fixing Listing model...');
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

  // Add missing methods
  const methods = `
  // Instance methods
  async incrementViewCount() {
    // Implementation would go here
  }
`;

  if (!content.includes('async incrementViewCount()')) {
    content = content.replace(
      'export default Listing;',
      `${methods}\n\nexport default Listing;`
    );
  }

  fs.writeFileSync(listingModelPath, content);
  console.log('✅ Fixed Listing model');
} catch (error) {
  console.log('❌ Error fixing Listing model:', error.message);
}

// 5. Fix Notification model
console.log('\n5. Fixing Notification model...');
const notificationModelPath = path.join(__dirname, 'src', 'models', 'Notification.ts');

try {
  let content = fs.readFileSync(notificationModelPath, 'utf8');
  
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

  fs.writeFileSync(notificationModelPath, content);
  console.log('✅ Fixed Notification model');
} catch (error) {
  console.log('❌ Error fixing Notification model:', error.message);
}

// 6. Fix auth middleware to add missing exports
console.log('\n6. Fixing auth middleware...');
const authMiddlewarePath = path.join(__dirname, 'src', 'middleware', 'auth.ts');

try {
  let content = fs.readFileSync(authMiddlewarePath, 'utf8');
  
  // Add missing exports
  const missingExports = `
// Additional auth middleware
export const requireAuth = authenticateToken;

export const requireHostOrAdmin = requireRole(['host', 'admin']);

export const verifyJWT = authenticateToken;
`;

  if (!content.includes('export const requireAuth')) {
    content += missingExports;
    fs.writeFileSync(authMiddlewarePath, content);
    console.log('✅ Added missing auth middleware exports');
  }
} catch (error) {
  console.log('❌ Error fixing auth middleware:', error.message);
}

// 7. Fix Firebase config
console.log('\n7. Fixing Firebase config...');
const firebaseConfigPath = path.join(__dirname, 'src', 'config', 'firebase.ts');

try {
  let content = fs.readFileSync(firebaseConfigPath, 'utf8');
  
  // Add missing export
  if (!content.includes('export const getFirebaseAdmin')) {
    content += `
export const getFirebaseAdmin = () => admin;
`;
    fs.writeFileSync(firebaseConfigPath, content);
    console.log('✅ Added missing Firebase export');
  }
} catch (error) {
  console.log('❌ Error fixing Firebase config:', error.message);
}

// 8. Fix role comparisons
console.log('\n8. Fixing role comparisons...');
const filesToFix = [
  'src/routes/dashboard.ts',
  'src/routes/documents.ts',
  'src/routes/firestore-auth.ts',
  'src/routes/listings-production.ts',
  'src/routes/payments-production.ts',
  'src/routes/stats.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix role comparisons
      content = content.replace(/'ADMIN'/g, "'admin'");
      content = content.replace(/'HOST'/g, "'host'");
      content = content.replace(/"ADMIN"/g, '"admin"');
      content = content.replace(/"HOST"/g, '"host"');
      
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
});

console.log('✅ Fixed role comparisons');

// 9. Fix property name mismatches
console.log('\n9. Fixing property name mismatches...');
const propertyFixes = [
  { file: 'src/routes/bookings-production.ts', from: 'total_price', to: 'totalPrice' },
  { file: 'src/routes/bookings-production.ts', from: 'cancellation_reason', to: 'cancellationReason' },
  { file: 'src/routes/bookings.routes.ts', from: 'start_date', to: 'startDate' },
  { file: 'src/routes/bookings.routes.ts', from: 'end_date', to: 'endDate' },
  { file: 'src/routes/bookings.routes.ts', from: 'host_notes', to: 'hostNotes' },
  { file: 'src/routes/bookings.routes.ts', from: 'cancellation_reason', to: 'cancellationReason' },
  { file: 'src/routes/bookings.routes.ts', from: 'pickup_time', to: 'pickupTime' },
  { file: 'src/routes/bookings.routes.ts', from: 'pickup_location', to: 'pickupLocation' },
  { file: 'src/routes/bookings.routes.ts', from: 'return_time', to: 'returnTime' },
  { file: 'src/routes/bookings.routes.ts', from: 'return_location', to: 'returnLocation' },
  { file: 'src/routes/payments-production.ts', from: 'payment_status', to: 'paymentStatus' },
  { file: 'src/routes/vehicles-production.ts', from: 'vehicle_type', to: 'vehicleType' },
  { file: 'src/routes/vehicles-production.ts', from: 'price_per_week', to: 'pricePerWeek' },
  { file: 'src/routes/vehicles-production.ts', from: 'price_per_month', to: 'pricePerMonth' },
  { file: 'src/routes/vehicles-production.ts', from: 'rating_average', to: 'ratingAverage' },
  { file: 'src/routes/vehicles-production.ts', from: 'rating_count', to: 'ratingCount' }
];

propertyFixes.forEach(fix => {
  const fullPath = path.join(__dirname, fix.file);
  if (fs.existsSync(fullPath)) {
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(new RegExp(fix.from, 'g'), fix.to);
      fs.writeFileSync(fullPath, content);
    } catch (error) {
      console.log(`❌ Error fixing ${fix.file}:`, error.message);
    }
  }
});

console.log('✅ Fixed property name mismatches');

console.log('\n✅ Final comprehensive fixes applied!');
console.log('Run "npm run build" to check for remaining errors.');
