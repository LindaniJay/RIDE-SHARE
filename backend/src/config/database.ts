import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Use PostgreSQL in CI/CD, SQLite locally
const isCI = process.env.CI === 'true';
const databaseUrl = process.env.DATABASE_URL;

let sequelize: Sequelize;

if (isCI && databaseUrl) {
  // Use PostgreSQL in CI
  sequelize = new Sequelize(databaseUrl, {
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  });
} else {
  // Use SQLite locally
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: process.env.NODE_ENV === "development" ? console.log : false,
    define: {
      timestamps: true,
      underscored: true,
    },
  });
}

export { sequelize };
