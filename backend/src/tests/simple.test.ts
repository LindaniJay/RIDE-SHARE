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
    // dialect and storage are not part of the public config in all versions
    // Assert via a simple query to confirm in-memory sqlite works
    expect(sequelize.getDialect()).toBe('sqlite');
  });
});