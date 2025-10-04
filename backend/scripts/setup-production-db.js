#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Setting up production database...\n');

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL environment variable is required for production setup');
  console.error('Please set DATABASE_URL in your environment or .env file');
  process.exit(1);
}

try {
  // 1. Run migrations
  console.log('📦 Running database migrations...');
  execSync('npx sequelize-cli db:migrate', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  console.log('✅ Migrations completed successfully\n');

  // 2. Create admin user
  console.log('👤 Creating admin user...');
  const createAdminScript = path.join(__dirname, 'create-admin-user.js');
  if (fs.existsSync(createAdminScript)) {
    execSync(`node ${createAdminScript}`, { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('✅ Admin user created successfully\n');
  } else {
    console.log('⚠️  Admin user creation script not found, skipping...\n');
  }

  // 3. Seed demo data (optional)
  if (process.env.SEED_DEMO_DATA === 'true') {
    console.log('🌱 Seeding demo data...');
    const seedScript = path.join(__dirname, 'seed-demo-data.js');
    if (fs.existsSync(seedScript)) {
      execSync(`node ${seedScript}`, { 
        stdio: 'inherit',
        cwd: path.join(__dirname, '..')
      });
      console.log('✅ Demo data seeded successfully\n');
    } else {
      console.log('⚠️  Demo data seeding script not found, skipping...\n');
    }
  }

  // 4. Verify database connection
  console.log('🔍 Verifying database connection...');
  const testScript = path.join(__dirname, 'test-db-connection.js');
  if (fs.existsSync(testScript)) {
    execSync(`node ${testScript}`, { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    console.log('✅ Database connection verified\n');
  }

  console.log('🎉 Production database setup completed successfully!');
  console.log('\nNext steps:');
  console.log('1. Start the backend server: npm run start');
  console.log('2. Configure your frontend to connect to the API');
  console.log('3. Test the complete booking workflow');

} catch (error) {
  console.error('❌ Database setup failed:', error.message);
  process.exit(1);
}
