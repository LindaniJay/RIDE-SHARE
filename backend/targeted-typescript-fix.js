const fs = require('fs');
const path = require('path');

console.log('🔧 Targeted TypeScript Error Fix');
console.log('================================');

// 1. Fix auth middleware exports
console.log('\n1. Fixing auth middleware exports...');
const authMiddlewarePath = path.join(__dirname, 'src', 'middleware', 'auth.ts');

try {
  let authContent = fs.readFileSync(authMiddlewarePath, 'utf8');
  
  // Add missing exports at the end
  const additionalExports = `
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
      name: (user.firstName || '') + ' ' + (user.lastName || ''),
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

  if (!authContent.includes('export const requireRole')) {
    authContent += additionalExports;
    fs.writeFileSync(authMiddlewarePath, authContent);
    console.log('✅ Added missing auth middleware exports');
  } else {
    console.log('✅ Auth middleware exports already exist');
  }
} catch (error) {
  console.log('❌ Error fixing auth middleware:', error.message);
}

// 2. Fix role types in key files
console.log('\n2. Fixing role types...');
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
    try {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      // Replace role values
      if (content.includes("'HOST'")) {
        content = content.replace(/'HOST'/g, "'host'");
        modified = true;
      }
      if (content.includes("'RENTER'")) {
        content = content.replace(/'RENTER'/g, "'renter'");
        modified = true;
      }
      if (content.includes("'ADMIN'")) {
        content = content.replace(/'ADMIN'/g, "'admin'");
        modified = true;
      }
      if (content.includes('"HOST"')) {
        content = content.replace(/"HOST"/g, '"host"');
        modified = true;
      }
      if (content.includes('"RENTER"')) {
        content = content.replace(/"RENTER"/g, '"renter"');
        modified = true;
      }
      if (content.includes('"ADMIN"')) {
        content = content.replace(/"ADMIN"/g, '"admin"');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed role types in ${filePath}`);
      }
    } catch (error) {
      console.log(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
});

// 3. Fix notification service user_id type
console.log('\n3. Fixing notification service...');
const notificationServicePath = path.join(__dirname, 'src', 'services', 'notification.service.ts');
if (fs.existsSync(notificationServicePath)) {
  try {
    let content = fs.readFileSync(notificationServicePath, 'utf8');
    
    // Fix user_id type conversion
    if (content.includes('user_id: data.userId,')) {
      content = content.replace('user_id: data.userId,', 'user_id: parseInt(data.userId),');
      fs.writeFileSync(notificationServicePath, content);
      console.log('✅ Fixed notification service user_id type');
    }
  } catch (error) {
    console.log('❌ Error fixing notification service:', error.message);
  }
}

// 4. Fix auth service token generation
console.log('\n4. Fixing auth service...');
const authServicePath = path.join(__dirname, 'src', 'services', 'auth.service.ts');
if (fs.existsSync(authServicePath)) {
  try {
    let content = fs.readFileSync(authServicePath, 'utf8');
    
    // Fix token generation calls
    if (content.includes('this.generateTokens(user.id)')) {
      content = content.replace(/this\.generateTokens\(user\.id\)/g, 'this.generateTokens(user.id.toString())');
      fs.writeFileSync(authServicePath, content);
      console.log('✅ Fixed auth service token generation');
    }
  } catch (error) {
    console.log('❌ Error fixing auth service:', error.message);
  }
}

// 5. Fix auto approval service
console.log('\n5. Fixing auto approval service...');
const autoApprovalPath = path.join(__dirname, 'src', 'services', 'autoApprovalService.ts');
if (fs.existsSync(autoApprovalPath)) {
  try {
    let content = fs.readFileSync(autoApprovalPath, 'utf8');
    
    // Fix created_at access
    if (content.includes('user.created_at.getTime()')) {
      content = content.replace('user.created_at.getTime()', 'user.created_at?.getTime() || Date.now()');
      fs.writeFileSync(autoApprovalPath, content);
      console.log('✅ Fixed auto approval service');
    }
  } catch (error) {
    console.log('❌ Error fixing auto approval service:', error.message);
  }
}

console.log('\n✅ Targeted TypeScript fixes applied!');
console.log('Run "npm run build" to check for remaining errors.');
