#!/usr/bin/env node

const { User } = require('../dist/models');
const bcrypt = require('bcryptjs');

async function createAdminUser() {
  try {
    console.log('Creating admin user...');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({
      where: { 
        email: 'admin@ridesharex.com',
        role: 'admin'
      }
    });

    if (existingAdmin) {
      console.log('✅ Admin user already exists');
      return;
    }

    // Create admin user
    const adminUser = await User.create({
      email: 'admin@ridesharex.com',
      password: 'Admin123!', // This will be hashed by the model hook
      first_name: 'System',
      last_name: 'Administrator',
      role: 'admin',
      is_email_verified: true,
      is_phone_verified: true,
      approval_status: 'approved',
      document_status: 'approved',
      is_active: true
    });

    console.log('✅ Admin user created successfully');
    console.log('Email: admin@ridesharex.com');
    console.log('Password: Admin123!');
    console.log('⚠️  Please change the password after first login');

  } catch (error) {
    console.error('❌ Failed to create admin user:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  createAdminUser()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { createAdminUser };
