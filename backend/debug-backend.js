#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 RideShareX Backend Debugging Tool');
console.log('=====================================\n');

// Check environment variables
console.log('1. Environment Variables Check:');
console.log('--------------------------------');
const requiredEnvVars = [
  'NODE_ENV',
  'PORT',
  'DATABASE_URL',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL',
  'JWT_SECRET'
];

requiredEnvVars.forEach(envVar => {
  const value = process.env[envVar];
  if (value) {
    console.log(`✅ ${envVar}: ${envVar.includes('KEY') || envVar.includes('SECRET') ? '***' : value}`);
  } else {
    console.log(`❌ ${envVar}: Not set`);
  }
});

// Check package.json dependencies
console.log('\n2. Package Dependencies Check:');
console.log('--------------------------------');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const criticalDeps = [
    'express',
    'sequelize',
    'firebase-admin',
    'socket.io',
    'cors',
    'helmet'
  ];
  
  criticalDeps.forEach(dep => {
    if (packageJson.dependencies[dep]) {
      console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
    } else {
      console.log(`❌ ${dep}: Missing`);
    }
  });
} catch (error) {
  console.log('❌ Could not read package.json');
}

// Check TypeScript compilation
console.log('\n3. TypeScript Compilation Check:');
console.log('----------------------------------');
try {
  const distExists = fs.existsSync('dist');
  if (distExists) {
    console.log('✅ dist/ directory exists');
    
    const distFiles = fs.readdirSync('dist');
    const criticalFiles = ['server.js', 'app.js'];
    criticalFiles.forEach(file => {
      if (distFiles.includes(file)) {
        console.log(`✅ ${file} compiled`);
      } else {
        console.log(`❌ ${file} missing`);
      }
    });
  } else {
    console.log('❌ dist/ directory not found - run "npm run build"');
  }
} catch (error) {
  console.log('❌ Could not check dist directory');
}

// Check route conflicts
console.log('\n4. Route Conflicts Check:');
console.log('---------------------------');
try {
  const routesDir = 'src/routes';
  const routeFiles = fs.readdirSync(routesDir);
  
  // Check for duplicate route files
  const routeGroups = {};
  routeFiles.forEach(file => {
    const baseName = file.replace(/\.(ts|js)$/, '').replace(/-production$/, '');
    if (!routeGroups[baseName]) {
      routeGroups[baseName] = [];
    }
    routeGroups[baseName].push(file);
  });
  
  Object.entries(routeGroups).forEach(([baseName, files]) => {
    if (files.length > 1) {
      console.log(`⚠️  ${baseName}: Multiple files found - ${files.join(', ')}`);
    } else {
      console.log(`✅ ${baseName}: ${files[0]}`);
    }
  });
} catch (error) {
  console.log('❌ Could not check routes directory');
}

// Check database connection
console.log('\n5. Database Connection Test:');
console.log('------------------------------');
try {
  const { Sequelize } = require('sequelize');
  
  // Test SQLite connection (development)
  const sqliteTest = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  });
  
  sqliteTest.authenticate()
    .then(() => {
      console.log('✅ SQLite connection successful');
      sqliteTest.close();
    })
    .catch((error) => {
      console.log('❌ SQLite connection failed:', error.message);
    });
    
} catch (error) {
  console.log('❌ Could not test database connection:', error.message);
}

// Check Firebase configuration
console.log('\n6. Firebase Configuration Check:');
console.log('---------------------------------');
const firebaseVars = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL'
];

let firebaseConfigValid = true;
firebaseVars.forEach(envVar => {
  if (!process.env[envVar]) {
    console.log(`❌ ${envVar}: Not set`);
    firebaseConfigValid = false;
  } else {
    console.log(`✅ ${envVar}: Set`);
  }
});

if (firebaseConfigValid) {
  console.log('✅ Firebase configuration appears valid');
} else {
  console.log('❌ Firebase configuration incomplete');
}

// Check for common issues
console.log('\n7. Common Issues Check:');
console.log('------------------------');

// Check for missing .env file
if (!fs.existsSync('.env')) {
  console.log('❌ .env file not found - create one with required variables');
} else {
  console.log('✅ .env file exists');
}

// Check for node_modules
if (!fs.existsSync('node_modules')) {
  console.log('❌ node_modules not found - run "npm install"');
} else {
  console.log('✅ node_modules exists');
}

// Check for TypeScript errors
console.log('\n8. TypeScript Compilation Test:');
console.log('--------------------------------');
try {
  const { execSync } = require('child_process');
  execSync('npx tsc --noEmit', { stdio: 'pipe' });
  console.log('✅ TypeScript compilation successful');
} catch (error) {
  console.log('❌ TypeScript compilation errors found');
  console.log('Run "npm run lint" for details');
}

console.log('\n🎯 Debugging Summary:');
console.log('====================');
console.log('1. Check environment variables are set correctly');
console.log('2. Run "npm install" if dependencies are missing');
console.log('3. Run "npm run build" to compile TypeScript');
console.log('4. Fix route conflicts by removing duplicate files');
console.log('5. Ensure database is accessible');
console.log('6. Configure Firebase credentials properly');
console.log('7. Run "npm run dev" to start the server');
console.log('\nFor detailed logs, run: DEBUG=ridesharex:* npm run dev');
