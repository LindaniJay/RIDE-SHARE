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
    const config = sequelize.options;
    // In CI with DATABASE_URL, we use PostgreSQL; otherwise SQLite
    if (process.env.CI === 'true' && process.env.DATABASE_URL) {
      expect(config.dialect).toBe('postgres');
    } else {
      expect(config.dialect).toBe('sqlite');
      if (process.env.NODE_ENV === 'test') {
        expect(config.storage).toBe(':memory:');
      }
    }
  });
});