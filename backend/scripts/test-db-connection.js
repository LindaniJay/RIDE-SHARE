#!/usr/bin/env node

const { sequelize } = require('../dist/config/database');

async function testDatabaseConnection() {
  try {
    console.log('🔍 Testing database connection...');
    
    // Test connection
    await sequelize.authenticate();
    console.log('✅ Database connection successful');

    // Test basic query (SQLite compatible)
    const result = await sequelize.query('SELECT datetime("now") as current_time');
    console.log('✅ Database query successful');
    console.log(`Current database time: ${result[0][0].current_time}`);

    // Test table existence (SQLite compatible)
    const tables = await sequelize.query(`
      SELECT name as table_name 
      FROM sqlite_master 
      WHERE type = 'table' AND name NOT LIKE 'sqlite_%'
    `);
    
    console.log('✅ Database tables found:');
    tables[0].forEach(table => {
      console.log(`  - ${table.table_name}`);
    });

    console.log('\n🎉 Database connection test completed successfully!');

  } catch (error) {
    console.error('❌ Database connection test failed:', error.message);
    throw error;
  } finally {
    await sequelize.close();
  }
}

// Run if called directly
if (require.main === module) {
  testDatabaseConnection()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { testDatabaseConnection };
