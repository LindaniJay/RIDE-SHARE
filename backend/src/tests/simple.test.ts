import { describe, it, expect } from 'vitest';
import { sequelize } from '../config/database';

describe('Database Connection', () => {
  it('should connect to test database', async () => {
    try {
      await sequelize.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      console.error('Database connection failed:', error);
      expect(false).toBe(true);
    }
  });

  it('should have correct database configuration', () => {
    const config = sequelize.config;
    expect(config.dialect).toBe('sqlite');
    expect(config.storage).toBe(':memory:');
  });
});