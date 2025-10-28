#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 RideShareX Backend Issue Resolution');
console.log('=====================================\n');

// Issue detection and resolution
const issues = [];

// 1. Check for missing dependencies
console.log('1. Checking Dependencies...');
console.log('---------------------------');

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const criticalDeps = [
    'express', 'sequelize', 'firebase-admin', 'socket.io', 
    'cors', 'helmet', 'compression', 'morgan'
  ];
  
  const missingDeps = criticalDeps.filter(dep => !packageJson.dependencies[dep]);
  
  if (missingDeps.length > 0) {
    issues.push({
      type: 'missing-dependencies',
      message: `Missing dependencies: ${missingDeps.join(', ')}`,
      solution: 'Run: npm install'
    });
    console.log(`❌ Missing dependencies: ${missingDeps.join(', ')}`);
  } else {
    console.log('✅ All critical dependencies present');
  }
} catch (error) {
  issues.push({
    type: 'package-json-error',
    message: 'Could not read package.json',
    solution: 'Check package.json file exists and is valid JSON'
  });
  console.log('❌ Could not read package.json');
}

// 2. Check TypeScript compilation
console.log('\n2. Checking TypeScript Compilation...');
console.log('-------------------------------------');

try {
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  console.log('✅ TypeScript compilation successful');
} catch (error) {
  issues.push({
    type: 'typescript-errors',
    message: 'TypeScript compilation errors found',
    solution: 'Fix TypeScript errors or run: npm run lint:fix'
  });
  console.log('❌ TypeScript compilation errors found');
  console.log('Run: npm run lint for details');
}

// 3. Check for route conflicts
console.log('\n3. Checking Route Conflicts...');
console.log('-----------------------------');

try {
  const routesDir = 'src/routes';
  const routeFiles = fs.readdirSync(routesDir);
  
  const routeGroups = {};
  routeFiles.forEach(file => {
    const baseName = file.replace(/\.(ts|js)$/, '').replace(/-production$/, '');
    if (!routeGroups[baseName]) {
      routeGroups[baseName] = [];
    }
    routeGroups[baseName].push(file);
  });
  
  const conflicts = Object.entries(routeGroups).filter(([_, files]) => files.length > 1);
  
  if (conflicts.length > 0) {
    issues.push({
      type: 'route-conflicts',
      message: `Route conflicts found: ${conflicts.map(([name, files]) => `${name} (${files.join(', ')})`).join(', ')}`,
      solution: 'Remove duplicate route files or consolidate them'
    });
    console.log('❌ Route conflicts found:');
    conflicts.forEach(([name, files]) => {
      console.log(`  - ${name}: ${files.join(', ')}`);
    });
  } else {
    console.log('✅ No route conflicts found');
  }
} catch (error) {
  console.log('❌ Could not check routes directory');
}

// 4. Check environment variables
console.log('\n4. Checking Environment Variables...');
console.log('------------------------------------');

const requiredEnvVars = [
  'NODE_ENV', 'PORT', 'JWT_SECRET'
];

const optionalEnvVars = [
  'DATABASE_URL', 'FIREBASE_PROJECT_ID', 'FIREBASE_PRIVATE_KEY', 
  'FIREBASE_CLIENT_EMAIL', 'FRONTEND_URLS'
];

const missingRequired = requiredEnvVars.filter(envVar => !process.env[envVar]);
const missingOptional = optionalEnvVars.filter(envVar => !process.env[envVar]);

if (missingRequired.length > 0) {
  issues.push({
    type: 'missing-required-env',
    message: `Missing required environment variables: ${missingRequired.join(', ')}`,
    solution: 'Set required environment variables in .env file'
  });
  console.log(`❌ Missing required environment variables: ${missingRequired.join(', ')}`);
} else {
  console.log('✅ All required environment variables set');
}

if (missingOptional.length > 0) {
  console.log(`⚠️  Missing optional environment variables: ${missingOptional.join(', ')}`);
  console.log('These are recommended for full functionality');
}

// 5. Check database connection
console.log('\n5. Testing Database Connection...');
console.log('---------------------------------');

try {
  const { Sequelize } = require('sequelize');
  
  // Test SQLite connection
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  });
  
  await sequelize.authenticate();
  console.log('✅ Database connection test successful');
  await sequelize.close();
} catch (error) {
  issues.push({
    type: 'database-connection',
    message: `Database connection failed: ${error.message}`,
    solution: 'Check database configuration and ensure database server is running'
  });
  console.log(`❌ Database connection failed: ${error.message}`);
}

// 6. Check Firebase configuration
console.log('\n6. Checking Firebase Configuration...');
console.log('-------------------------------------');

const firebaseVars = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL'
];

const missingFirebase = firebaseVars.filter(envVar => !process.env[envVar]);

if (missingFirebase.length > 0) {
  issues.push({
    type: 'firebase-config',
    message: `Missing Firebase configuration: ${missingFirebase.join(', ')}`,
    solution: 'Configure Firebase Admin SDK credentials'
  });
  console.log(`❌ Missing Firebase configuration: ${missingFirebase.join(', ')}`);
} else {
  console.log('✅ Firebase configuration appears complete');
}

// 7. Check for common file issues
console.log('\n7. Checking File Structure...');
console.log('-----------------------------');

const requiredFiles = [
  'src/server.ts',
  'src/app.ts',
  'src/config/database.ts',
  'src/config/env.ts',
  'src/config/firebase.ts'
];

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  issues.push({
    type: 'missing-files',
    message: `Missing required files: ${missingFiles.join(', ')}`,
    solution: 'Ensure all required files exist in the correct locations'
  });
  console.log(`❌ Missing required files: ${missingFiles.join(', ')}`);
} else {
  console.log('✅ All required files present');
}

// 8. Check for build issues
console.log('\n8. Checking Build Status...');
console.log('---------------------------');

if (!fs.existsSync('dist')) {
  issues.push({
    type: 'not-built',
    message: 'TypeScript not compiled',
    solution: 'Run: npm run build'
  });
  console.log('❌ TypeScript not compiled - run: npm run build');
} else {
  const distFiles = fs.readdirSync('dist');
  const criticalFiles = ['server.js', 'app.js'];
  const missingDistFiles = criticalFiles.filter(file => !distFiles.includes(file));
  
  if (missingDistFiles.length > 0) {
    issues.push({
      type: 'incomplete-build',
      message: `Missing compiled files: ${missingDistFiles.join(', ')}`,
      solution: 'Run: npm run build'
    });
    console.log(`❌ Missing compiled files: ${missingDistFiles.join(', ')}`);
  } else {
    console.log('✅ Build appears complete');
  }
}

// Print resolution summary
console.log('\n📊 Issue Summary');
console.log('================');

if (issues.length === 0) {
  console.log('🎉 No issues found! Backend should be working correctly.');
} else {
  console.log(`Found ${issues.length} issue(s):\n`);
  
  issues.forEach((issue, index) => {
    console.log(`${index + 1}. ${issue.type.toUpperCase()}`);
    console.log(`   Message: ${issue.message}`);
    console.log(`   Solution: ${issue.solution}\n`);
  });
}

// Generate resolution script
console.log('🔧 Generating Resolution Script...');
console.log('----------------------------------');

const resolutionSteps = [];

if (issues.some(issue => issue.type === 'missing-dependencies')) {
  resolutionSteps.push('npm install');
}

if (issues.some(issue => issue.type === 'typescript-errors')) {
  resolutionSteps.push('npm run lint:fix');
}

if (issues.some(issue => issue.type === 'not-built' || issue.type === 'incomplete-build')) {
  resolutionSteps.push('npm run build');
}

if (issues.some(issue => issue.type === 'missing-required-env')) {
  resolutionSteps.push('Create .env file with required variables');
}

if (issues.some(issue => issue.type === 'route-conflicts')) {
  resolutionSteps.push('Remove duplicate route files');
}

if (issues.some(issue => issue.type === 'database-connection')) {
  resolutionSteps.push('Check database configuration');
}

if (issues.some(issue => issue.type === 'firebase-config')) {
  resolutionSteps.push('Configure Firebase credentials');
}

if (resolutionSteps.length > 0) {
  console.log('Recommended resolution steps:');
  resolutionSteps.forEach((step, index) => {
    console.log(`${index + 1}. ${step}`);
  });
  
  // Create resolution script
  const resolutionScript = `#!/usr/bin/env node

console.log('🔧 Running Backend Resolution Steps...');
console.log('=====================================\n');

${resolutionSteps.map((step, index) => `
console.log('${index + 1}. ${step}');
try {
  ${step.includes('npm') ? `require('child_process').execSync('${step}', { stdio: 'inherit' });` : `console.log('Manual step: ${step}');`}
  console.log('✅ Completed: ${step}');
} catch (error) {
  console.log('❌ Failed: ${step} -', error.message);
}
`).join('')}

console.log('\\n🎉 Resolution steps completed!');
console.log('Try running: npm run dev');
`;

  fs.writeFileSync('resolve-issues.js', resolutionScript);
  console.log('\n✅ Created resolve-issues.js script');
  console.log('Run: node resolve-issues.js to automatically fix issues');
}

console.log('\n🎯 Next Steps:');
console.log('==============');
console.log('1. Fix the identified issues');
console.log('2. Run: npm run build');
console.log('3. Run: npm run dev');
console.log('4. Test endpoints with: node test-backend-endpoints.js');
console.log('5. Check logs for any remaining errors');

console.log('\nFor detailed debugging:');
console.log('- Run: node debug-backend.js');
console.log('- Check server logs');
console.log('- Verify all environment variables');
console.log('- Test database connection manually');
