import { beforeAll, afterAll, beforeEach } from 'vitest';
import { sequelize } from './config/database';

// Setup database for tests
beforeAll(async () => {
  try {
    await sequelize.authenticate();
    console.log('Test database connection established successfully.');
    
    // Sync all models for tests
    // In PostgreSQL, use alter: true to avoid enum type conflicts
    if (sequelize.getDialect() === 'postgres') {
      await sequelize.sync({ alter: true });
    } else {
      await sequelize.sync({ force: true });
    }
  } catch (error) {
    console.warn('Unable to connect to test database:', error);
    // Don't exit, just warn and continue
  }
});

beforeEach(async () => {
  try {
    // Clean database before each test
    if (sequelize.getDialect() === 'postgres') {
      // For PostgreSQL, just sync without force to avoid enum issues
      await sequelize.sync({ alter: true });
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
