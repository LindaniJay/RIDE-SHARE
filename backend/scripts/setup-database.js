const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
  console.log('Setting up database...');
  
  try {
    // Create database connection
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
    console.log('Database connection established successfully.');

    // Sync database (create tables)
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully.');

    // Run migrations
    const { exec } = require('child_process');
    exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
      if (error) {
        console.error('Migration error:', error);
        return;
      }
      console.log('Migrations completed:', stdout);
    });

    // Run seeders
    exec('npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
      if (error) {
        console.error('Seeder error:', error);
        return;
      }
      console.log('Seeders completed:', stdout);
    });

    console.log('Database setup completed successfully!');
    console.log('Admin user created: admin@rideshare-sa.com / admin123');
    
  } catch (error) {
    console.error('Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();
