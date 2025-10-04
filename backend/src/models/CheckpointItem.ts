import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';

export interface CheckpointItemAttributes {
  id: string;
  checkpoint_id: string;
  item_name: string;
  status: 'working' | 'not_working' | 'damaged';
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CheckpointItemCreationAttributes extends Optional<CheckpointItemAttributes, 'id' | 'notes' | 'createdAt' | 'updatedAt'> {}

export class CheckpointItem extends Model<CheckpointItemAttributes, CheckpointItemCreationAttributes> implements CheckpointItemAttributes {
  public id!: string;
  public checkpoint_id!: string;
  public item_name!: string;
  public status!: 'working' | 'not_working' | 'damaged';
  public notes?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CheckpointItem.init(
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
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('working', 'not_working', 'damaged'),
      allowNull: false,
      defaultValue: 'working'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'CheckpointItem',
    tableName: 'checkpoint_items',
    timestamps: true
  }
);

export default CheckpointItem;
