#!/usr/bin/env node

const { Sequelize } = require('sequelize');
const path = require('path');

async function setupDatabase() {
  console.log('🔧 Setting up database...');
  
  try {
    // Use SQLite for development
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './database.sqlite',
      logging: console.log,
      define: {
        timestamps: true,
        underscored: true,
      },
    });

    // Test connection
    await sequelize.authenticate();
    console.log('✅ Database connection established');

    // Import and sync models
    const { User } = require('./dist/models/User');
    const { Listing } = require('./dist/models/Listing');
    const { Booking } = require('./dist/models/Booking');
    const { Notification } = require('./dist/models/Notification');

    // Sync all models
    await sequelize.sync({ force: false });
    console.log('✅ Database models synchronized');

    console.log('🎉 Database setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();