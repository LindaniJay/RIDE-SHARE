import { beforeAll, afterAll, beforeEach } from 'vitest';
import { sequelize } from './config/database';

// Setup database for tests
beforeAll(async () => {
  try {
    // Ensure JWT secrets exist for tests
    process.env.JWT_SECRET = process.env.JWT_SECRET || 'test-jwt-secret';
    process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'test-jwt-refresh-secret';

    await sequelize.authenticate();
    console.log('Test database connection established successfully.');
    
    // Sync all models for tests
    // For PostgreSQL, use force: true to recreate tables and avoid enum conflicts
    if (sequelize.getDialect() === 'postgres') {
      await sequelize.sync({ force: true });
    } else {
      await sequelize.sync({ force: true });
    }
  } catch (error) {
    console.warn('Unable to connect to test database:', error);
    // Don't exit, just warn and continue
  }
}, 30000); // Increase timeout for CI

beforeEach(async () => {
  try {
    // Clean database before each test
    if (sequelize.getDialect() === 'postgres') {
      // For PostgreSQL, use force: true to recreate tables and avoid enum issues
      await sequelize.sync({ force: true });
    } else {
      await sequelize.sync({ force: true });
    }
  } catch (error) {
    console.warn('Database sync failed in beforeEach:', error);
  }
});

afterAll(async () => {
  try {
    // Close database connection after all tests
    await sequelize.close();
  } catch (error) {
    console.warn('Database close failed in afterAll:', error);
  }
});
