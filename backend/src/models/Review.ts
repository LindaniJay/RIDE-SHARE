import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./User";
import { Listing } from "./Listing";

export interface ReviewAttributes {
  id: number;
  listingId: number;
  renterId: number;
  rating: number;
  comment: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id" | "createdAt" | "updatedAt"> {}

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
  public id!: number;
  public listingId!: number;
  public renterId!: number;
  public rating!: number;
  public comment!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "listings",
        key: "id",
      },
    },
    renterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Review",
    tableName: "reviews",
  }
);

// Associations are defined in models/index.ts
