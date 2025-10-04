import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface CheckpointImageAttributes {
  id: string;
  checkpoint_id: string;
  uploaded_by: string;
  file_url: string;
  filename: string;
  file_size?: number;
  mime_type?: string;
  category?: string;
  description?: string;
  createdAt?: Date;
}

export interface CheckpointImageCreationAttributes extends Optional<CheckpointImageAttributes, 'id' | 'file_size' | 'mime_type' | 'category' | 'description' | 'createdAt'> {}

export class CheckpointImage extends Model<CheckpointImageAttributes, CheckpointImageCreationAttributes> implements CheckpointImageAttributes {
  public id!: string;
  public checkpoint_id!: string;
  public uploaded_by!: string;
  public file_url!: string;
  public filename!: string;
  public file_size?: number;
  public mime_type?: string;
  public category?: string;
  public description?: string;
  public readonly createdAt!: Date;
}

CheckpointImage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    checkpoint_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'checkpoints',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    uploaded_by: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    file_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file_size: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mime_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'CheckpointImage',
    tableName: 'checkpoint_images',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
  }
);

export default CheckpointImage;
