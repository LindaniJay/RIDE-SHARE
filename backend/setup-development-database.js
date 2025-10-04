#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up development database...\n');

// Create .env file for development
const envContent = `# Development Environment Configuration
NODE_ENV=development
PORT=5001

# Database Configuration (SQLite for development)
# DATABASE_URL=sqlite:./database.sqlite

# JWT Configuration
JWT_SECRET=development_jwt_secret_key_change_in_production
JWT_EXPIRES_IN=7d

# Firebase Admin (for admin authentication)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token

# Payment Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
PAYFAST_MERCHANT_ID=your_payfast_merchant_id
PAYFAST_MERCHANT_KEY=your_payfast_merchant_key
PAYFAST_PASSPHRASE=your_payfast_passphrase

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# CORS
CORS_ORIGIN=http://localhost:3000,http://localhost:5173
`;

try {
  // Create .env file
  fs.writeFileSync('.env', envContent);
  console.log('✅ Created .env file with development configuration');

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Build the application
  console.log('🔨 Building application...');
  execSync('npm run build', { stdio: 'inherit' });

  // Run migrations
  console.log('🗄️ Running database migrations...');
  execSync('npm run db:migrate', { stdio: 'inherit' });

  // Create admin user
  console.log('👤 Creating admin user...');
  execSync('npm run db:create-admin', { stdio: 'inherit' });

  // Seed demo data
  console.log('🌱 Seeding demo data...');
  execSync('SEED_DEMO_DATA=true npm run db:seed-demo', { stdio: 'inherit' });

  console.log('\n🎉 Development database setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Start the backend: npm start');
  console.log('2. In another terminal, start the frontend: cd ../frontend && npm run dev');
  console.log('3. Test the API endpoints');
  console.log('\n🔑 Demo accounts created:');
  console.log('Admin: admin@ridesharex.com / Admin123!');
  console.log('Renter: john.doe@example.com / Password123!');
  console.log('Host 1: sarah.johnson@example.com / Password123!');
  console.log('Host 2: mike.wilson@example.com / Password123!');

} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
