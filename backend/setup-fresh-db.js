const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

console.log('Setting up fresh database...');

// Remove existing database file
const dbPath = './database.sqlite';
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
  console.log('Removed existing database file');
}

// Create new Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: console.log,
  define: {
    timestamps: true,
    underscored: true,
  },
});

async function setupDatabase() {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log('Database connection established');

    // Import models
    require('./src/models/User');
    require('./src/models/Listing');
    require('./src/models/Booking');
    require('./src/models/Notification');

    // Sync all models
    await sequelize.sync({ force: true });
    console.log('Database models synchronized');

    console.log('Database setup completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();
