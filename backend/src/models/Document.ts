import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface DocumentAttributes {
  id: string;
  userId: string;
  documentType: 'license' | 'id' | 'insurance' | 'registration' | 'other';
  fileName: string;
  fileUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  uploadedAt: Date;
  reviewedAt?: Date;
  reviewedBy?: string;
  expiryDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DocumentCreationAttributes extends Optional<DocumentAttributes, 'id' | 'rejectionReason' | 'reviewedAt' | 'reviewedBy' | 'expiryDate' | 'createdAt' | 'updatedAt'> {}

class Document extends Model<DocumentAttributes, DocumentCreationAttributes> implements DocumentAttributes {
  public id!: string;
  public userId!: string;
  public documentType!: 'license' | 'id' | 'insurance' | 'registration' | 'other';
  public fileName!: string;
  public fileUrl!: string;
  public status!: 'pending' | 'approved' | 'rejected';
  public rejectionReason?: string;
  public uploadedAt!: Date;
  public reviewedAt?: Date;
  public reviewedBy?: string;
  public expiryDate?: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Document.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    documentType: {
      type: DataTypes.ENUM('license', 'id', 'insurance', 'registration', 'other'),
      allowNull: false
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending'
    },
    rejectionReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uploadedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    reviewedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reviewedBy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Document',
    tableName: 'documents',
    timestamps: true
  }
);

export default Document;

