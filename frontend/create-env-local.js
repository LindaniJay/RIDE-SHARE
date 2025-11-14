#!/usr/bin/env node
/**
 * Script to create frontend .env.local file with Firebase configuration
 * Run: node create-env-local.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `# Firebase Configuration for RIDESHARE SA
# These values are also hardcoded in src/config/firebase.ts as fallbacks

# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI
VITE_FIREBASE_AUTH_DOMAIN=ride-share-56610.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ride-share-56610
VITE_FIREBASE_STORAGE_BUCKET=ride-share-56610.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1074725088115
VITE_FIREBASE_APP_ID=1:1074725088115:web:9d53e6c7b24a497cf3b306
VITE_FIREBASE_MEASUREMENT_ID=G-XN91B7PKY4

# API Configuration
VITE_API_URL=http://localhost:5001/api
`;

const envPath = path.join(__dirname, '.env.local');

// Check if .env.local already exists
if (fs.existsSync(envPath)) {
  console.log('⚠️  .env.local file already exists!');
  console.log('Backing up existing .env.local to .env.local.backup');
  fs.copyFileSync(envPath, path.join(__dirname, '.env.local.backup'));
}

// Write .env.local file
fs.writeFileSync(envPath, envContent, 'utf8');

console.log('✅ Frontend .env.local file created successfully!');
console.log('📍 Location:', envPath);
console.log('');
console.log('📝 Note: Firebase config is also hardcoded as fallbacks in src/config/firebase.ts');
console.log('   So this file is optional, but recommended for consistency.');
console.log('');
console.log('📝 Next steps:');
console.log('   1. Review the .env.local file');
console.log('   2. Update VITE_API_URL if your backend runs on a different port');
console.log('   3. Restart your frontend dev server');

