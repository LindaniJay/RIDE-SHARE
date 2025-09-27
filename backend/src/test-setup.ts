import { beforeAll, afterAll, beforeEach } from 'vitest';
import { sequelize } from './config/database';

// Setup database for tests
beforeAll(async () => {
  try {
    await sequelize.authenticate();
    console.log('Test database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to test database:', error);
    process.exit(1);
  }
});

beforeEach(async () => {
  // Clean database before each test
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  // Close database connection after all tests
  await sequelize.close();
});
