import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcryptjs";
import { sequelize } from "../config/database";
import { Listing } from "./Listing";
import { Booking } from "./Booking";
import { Review } from "./Review";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string; // Virtual field for input
  passwordHash: string;
  role: "renter" | "host" | "admin";
  phoneNumber?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string; // Virtual field
  public passwordHash!: string;
  public role!: "renter" | "host" | "admin";
  public phoneNumber?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("renter", "host", "admin"),
      allowNull: false,
      defaultValue: "renter",
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

// Add hooks for password hashing
User.addHook('beforeCreate', async (user: User) => {
  if (user.password) {
    user.passwordHash = await bcrypt.hash(user.password, 12);
  }
});

User.addHook('beforeUpdate', async (user: User) => {
  if (user.changed('password') && user.password) {
    user.passwordHash = await bcrypt.hash(user.password, 12);
  }
});

// Define associations
User.hasMany(Listing, { foreignKey: "hostId", as: "listings" });
User.hasMany(Booking, { foreignKey: "renterId", as: "bookings" });
User.hasMany(Review, { foreignKey: "renterId", as: "reviews" });
