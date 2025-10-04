#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🗄️ Setting up production database...');

// Create .env file for production
const envContent = `# Production Environment Configuration
NODE_ENV=production
PORT=5001

# Database Configuration
DATABASE_URL=postgresql://ridesharex_user:ridesharex_password@localhost:5432/ridesharex_production
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ridesharex_production
DB_USER=ridesharex_user
DB_PASSWORD=ridesharex_password

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key_here_change_this_in_production
JWT_EXPIRES_IN=7d

# Payment Configuration
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
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

# CORS
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
`;

fs.writeFileSync('.env', envContent);
console.log('✅ Created .env file with production configuration');

// Install dependencies
console.log('📦 Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

// Build application
console.log('🔨 Building application...');
execSync('npm run build', { stdio: 'inherit' });

// Run database migrations
console.log('🗄️ Running database migrations...');
execSync('npm run db:migrate', { stdio: 'inherit' });

// Create admin user
console.log('👤 Creating admin user...');
execSync('npm run db:create-admin', { stdio: 'inherit' });

// Seed demo data
console.log('🌱 Seeding demo data...');
execSync('SEED_DEMO_DATA=true npm run db:seed-demo', { stdio: 'inherit' });

console.log('\n🎉 Production database setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Start the backend: npm start');
console.log('2. Start the frontend: cd ../frontend && npm run dev');
console.log('3. Test the complete workflow');
console.log('\n🔑 Demo accounts created:');
console.log('Admin: admin@ridesharex.com / Admin123!');
console.log('Renter: john.doe@example.com / Password123!');
console.log('Host 1: sarah.johnson@example.com / Password123!');
console.log('Host 2: mike.wilson@example.com / Password123!');
