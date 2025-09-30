import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Use PostgreSQL in CI/CD, SQLite locally
const isCI = process.env.CI === 'true';
const isTest = process.env.NODE_ENV === 'test';
const databaseUrl = process.env.DATABASE_URL;

let sequelize: Sequelize;

if (isTest) {
  // Always use in-memory SQLite for tests
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
    pool: {
      max: 1,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else if (isCI && databaseUrl) {
  // Use PostgreSQL in CI
  sequelize = new Sequelize(databaseUrl, {
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  });
} else {
  // Use SQLite locally for development
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    define: {
      timestamps: true,
      underscored: true,
    },
  });
}

export { sequelize };
