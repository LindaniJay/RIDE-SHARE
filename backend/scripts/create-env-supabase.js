#!/usr/bin/env node
/**
 * Create .env file with Supabase configuration
 * This script creates or updates the .env file with Supabase credentials
 */

const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '../.env');
const envExamplePath = path.join(__dirname, '../env.example');

// Supabase configuration
const supabaseConfig = {
  SUPABASE_URL: 'https://jmntfhcjvxlyxlyipgvk.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbnRmaGNqdnhseXhseWlwZ3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNjcxMzUsImV4cCI6MjA3Nzc0MzEzNX0.v0Qi0rGEqyx3JpAq5UYXPoDELLk-kSQyCLSEO1NKWwM',
  SUPABASE_SERVICE_ROLE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbnRmaGNqdnhseXhseWlwZ3ZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjE2NzEzNSwiZXhwIjoyMDc3NzQzMTM1fQ.4Yb9QYYqMcZwsJZ80abpm_suVAjIVNvosjeItWDRaU0',
  SUPABASE_DB_PASSWORD: '0692151207@Lj',
  DATABASE_URL: 'postgresql://postgres.jmntfhcjvxlyxlyipgvk:0692151207%40Lj@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true'
};

// Read existing .env if it exists
let existingEnv = {};
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        existingEnv[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
  console.log('📝 Found existing .env file. Updating Supabase configuration...');
} else {
  // Read from env.example as base
  if (fs.existsSync(envExamplePath)) {
    const exampleContent = fs.readFileSync(envExamplePath, 'utf8');
    exampleContent.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          if (!value.startsWith('[') && !value.startsWith('your-')) {
            existingEnv[key.trim()] = value;
          }
        }
      }
    });
  }
  console.log('📝 Creating new .env file...');
}

// Merge with Supabase config (Supabase config takes precedence)
const finalEnv = { ...existingEnv, ...supabaseConfig };

// Build .env content
const envLines = [
  '# Environment Configuration',
  '# Generated/Updated automatically',
  '',
  `NODE_ENV=${existingEnv.NODE_ENV || 'development'}`,
  `PORT=${existingEnv.PORT || '5001'}`,
  '',
  '# Database - Supabase PostgreSQL',
  `DATABASE_URL=${supabaseConfig.DATABASE_URL}`,
  '',
  '# Supabase Configuration',
  `SUPABASE_URL=${supabaseConfig.SUPABASE_URL}`,
  `SUPABASE_ANON_KEY=${supabaseConfig.SUPABASE_ANON_KEY}`,
  `SUPABASE_SERVICE_ROLE_KEY=${supabaseConfig.SUPABASE_SERVICE_ROLE_KEY}`,
  `SUPABASE_DB_PASSWORD=${supabaseConfig.SUPABASE_DB_PASSWORD}`,
  '',
  '# Firebase Admin SDK',
  `FIREBASE_PROJECT_ID=${existingEnv.FIREBASE_PROJECT_ID || 'ride-share-56610'}`,
  `FIREBASE_SERVICE_ACCOUNT_PATH=${existingEnv.FIREBASE_SERVICE_ACCOUNT_PATH || './firebase-service-account.json'}`,
  '',
  '# CORS',
  `FRONTEND_URLS=${existingEnv.FRONTEND_URLS || 'http://localhost:3000,http://localhost:5173'}`,
  '',
  '# Socket.IO',
  `SOCKET_IO_PATH=${existingEnv.SOCKET_IO_PATH || '/socket.io/'}`,
  '',
  '# JWT (Optional - Using Firebase Auth)',
  `JWT_SECRET=${existingEnv.JWT_SECRET || 'dev-secret-key-change-in-production'}`,
  `JWT_REFRESH_SECRET=${existingEnv.JWT_REFRESH_SECRET || 'dev-refresh-secret-change-in-production'}`,
  '',
  '# Payment Providers',
  `STRIPE_SECRET_KEY=${existingEnv.STRIPE_SECRET_KEY || ''}`,
  `PAYFAST_MERCHANT_ID=${existingEnv.PAYFAST_MERCHANT_ID || ''}`,
  `PAYFAST_MERCHANT_KEY=${existingEnv.PAYFAST_MERCHANT_KEY || ''}`,
  `PAYFAST_PASSPHRASE=${existingEnv.PAYFAST_PASSPHRASE || ''}`,
  `PAYFAST_SANDBOX=${existingEnv.PAYFAST_SANDBOX || 'true'}`,
  '',
  '# File Uploads',
  `UPLOADS_PATH=${existingEnv.UPLOADS_PATH || './uploads'}`,
  '',
  '# Redis (Optional)',
  `REDIS_URL=${existingEnv.REDIS_URL || ''}`,
];

// Write .env file
fs.writeFileSync(envPath, envLines.join('\n'), 'utf8');

console.log('✅ .env file created/updated successfully!');
console.log('');
console.log('📋 Supabase configuration added:');
console.log(`   - SUPABASE_URL: ${supabaseConfig.SUPABASE_URL}`);
console.log(`   - DATABASE_URL: ${supabaseConfig.DATABASE_URL.split('@')[1]}`);
console.log('');
console.log('💡 Next steps:');
console.log('   1. Review the .env file to ensure all settings are correct');
console.log('   2. Run: npm run setup:supabase (to create tables)');
console.log('   3. Start the server: npm run dev');

