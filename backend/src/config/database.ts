import { Sequelize } from 'sequelize';
import { env } from './env';

// Database configuration based on environment
const isTest = env.NODE_ENV === 'test';
const isProduction = env.NODE_ENV === 'production';

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
} else if (env.DATABASE_URL && env.DATABASE_URL.startsWith('postgresql://')) {
  // Use PostgreSQL when DATABASE_URL is provided (production, staging, or local with PostgreSQL)
  sequelize = new Sequelize(env.DATABASE_URL, {
    logging: env.NODE_ENV === 'development' ? console.log : false,
    define: {
      timestamps: true,
      underscored: true,
    },
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else if (isProduction) {
  // Production should always use PostgreSQL
  throw new Error('DATABASE_URL must be set in production environment');
} else {
  // Use SQLite locally for development when no DATABASE_URL is provided
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: env.NODE_ENV === 'development' ? console.log : false,
    define: {
      timestamps: true,
      underscored: true,
    },
  });
}

export { sequelize };
