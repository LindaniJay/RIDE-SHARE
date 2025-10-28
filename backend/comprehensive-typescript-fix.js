const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive TypeScript Error Fix');
console.log('=====================================');

// 1. Fix auth middleware exports
console.log('\n1. Fixing auth middleware exports...');
const authMiddlewarePath = path.join(__dirname, 'src', 'middleware', 'auth.ts');
let authContent = fs.readFileSync(authMiddlewarePath, 'utf8');

// Add missing exports
if (!authContent.includes('export const requireRole')) {
  authContent += `
// Role-based access control middleware
export const requireRole = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
};

// Firebase token verification middleware
export const verifyFirebaseToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    const user = await User.findOne({ where: { uid: decodedToken.uid } });
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = {
      id: user.id,
      uid: user.uid,
      name: user.firstName + ' ' + user.lastName,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified
    };

    next();
  } catch (error) {
    console.error('Firebase token verification error:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};
`;
}

fs.writeFileSync(authMiddlewarePath, authContent);

// 2. Fix User model to include name property
console.log('\n2. Fixing User model...');
const userModelPath = path.join(__dirname, 'src', 'models', 'User.ts');
let userContent = fs.readFileSync(userModelPath, 'utf8');

// Add name property to User model
if (!userContent.includes('name: DataTypes.STRING')) {
  userContent = userContent.replace(
    'firstName: DataTypes.STRING',
    `firstName: DataTypes.STRING,
    name: DataTypes.STRING`
  );
}

fs.writeFileSync(userModelPath, userContent);

// 3. Fix Listing model to include missing properties
console.log('\n3. Fixing Listing model...');
const listingModelPath = path.join(__dirname, 'src', 'models', 'Listing.ts');
let listingContent = fs.readFileSync(listingModelPath, 'utf8');

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
  'approval_status: DataTypes.ENUM("pending", "approved", "rejected")'
];

missingProperties.forEach(prop => {
  if (!listingContent.includes(prop.split(':')[0])) {
    listingContent = listingContent.replace(
      'image: DataTypes.STRING',
      `image: DataTypes.STRING,
      ${prop}`
    );
  }
});

fs.writeFileSync(listingModelPath, listingContent);

// 4. Fix Notification model
console.log('\n4. Fixing Notification model...');
const notificationModelPath = path.join(__dirname, 'src', 'models', 'Notification.ts');
let notificationContent = fs.readFileSync(notificationModelPath, 'utf8');

// Update notification types
const validTypes = ['booking', 'approval', 'payment', 'system', 'booking_request', 'booking_approved', 'booking_rejected', 'payment_received', 'listing_approved', 'listing_rejected', 'review_received', 'system_announcement'];

if (notificationContent.includes('type: DataTypes.ENUM')) {
  notificationContent = notificationContent.replace(
    /type: DataTypes\.ENUM\([^)]+\)/,
    `type: DataTypes.ENUM('${validTypes.join("', '")}')`
  );
}

// Add missing properties
if (!notificationContent.includes('read_at: DataTypes.DATE')) {
  notificationContent = notificationContent.replace(
    'is_read: DataTypes.BOOLEAN',
    `is_read: DataTypes.BOOLEAN,
    read_at: DataTypes.DATE`
  );
}

fs.writeFileSync(notificationModelPath, notificationContent);

// 5. Fix role types in all files
console.log('\n5. Fixing role types...');
const filesToFix = [
  'src/scripts/seedData.ts',
  'src/services/auth.service.ts',
  'src/routes/vehicles-production.ts',
  'src/routes/vehicles.ts',
  'src/tests/test-helpers.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace role values
    content = content.replace(/'HOST'/g, "'host'");
    content = content.replace(/'RENTER'/g, "'renter'");
    content = content.replace(/'ADMIN'/g, "'admin'");
    content = content.replace(/"HOST"/g, '"host"');
    content = content.replace(/"RENTER"/g, '"renter"');
    content = content.replace(/"ADMIN"/g, '"admin"');
    
    fs.writeFileSync(fullPath, content);
  }
});

// 6. Fix user_id type issues
console.log('\n6. Fixing user_id type issues...');
const notificationServicePath = path.join(__dirname, 'src', 'services', 'notification.service.ts');
let notificationServiceContent = fs.readFileSync(notificationServicePath, 'utf8');

// Fix user_id type conversion
notificationServiceContent = notificationServiceContent.replace(
  'user_id: data.userId,',
  'user_id: parseInt(data.userId),'
);

fs.writeFileSync(notificationServicePath, notificationServiceContent);

// 7. Fix auth service token generation
console.log('\n7. Fixing auth service...');
const authServicePath = path.join(__dirname, 'src', 'services', 'auth.service.ts');
let authServiceContent = fs.readFileSync(authServicePath, 'utf8');

// Fix token generation calls
authServiceContent = authServiceContent.replace(
  'this.generateTokens(user.id)',
  'this.generateTokens(user.id.toString())'
);

fs.writeFileSync(authServicePath, authServiceContent);

// 8. Fix auto approval service
console.log('\n8. Fixing auto approval service...');
const autoApprovalPath = path.join(__dirname, 'src', 'services', 'autoApprovalService.ts');
let autoApprovalContent = fs.readFileSync(autoApprovalPath, 'utf8');

// Fix created_at access
autoApprovalContent = autoApprovalContent.replace(
  'user.created_at.getTime()',
  'user.created_at?.getTime() || Date.now()'
);

fs.writeFileSync(autoApprovalPath, autoApprovalContent);

// 9. Fix test helpers
console.log('\n9. Fixing test helpers...');
const testHelpersPath = path.join(__dirname, 'src', 'tests', 'test-helpers.ts');
let testHelpersContent = fs.readFileSync(testHelpersPath, 'utf8');

// Fix user creation
testHelpersContent = testHelpersContent.replace(
  'firebase_uid: string;',
  'uid: string;'
);

testHelpersContent = testHelpersContent.replace(
  'is_email_verified: boolean;',
  'isVerified: boolean;'
);

fs.writeFileSync(testHelpersPath, testHelpersContent);

// 10. Fix seed data
console.log('\n10. Fixing seed data...');
const seedDataPath = path.join(__dirname, 'src', 'scripts', 'seedData.ts');
let seedDataContent = fs.readFileSync(seedDataPath, 'utf8');

// Fix listing creation
seedDataContent = seedDataContent.replace(
  'host_id: listingData.host_id!',
  'hostId: listingData.host_id!'
);

fs.writeFileSync(seedDataPath, seedDataContent);

console.log('\n✅ Comprehensive TypeScript fixes applied!');
console.log('Run "npm run build" to check for remaining errors.');
