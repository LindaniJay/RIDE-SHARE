'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create checkpoints table
    await queryInterface.createTable('checkpoints', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      booking_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'bookings',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      type: {
        type: Sequelize.ENUM('pickup', 'return'),
        allowNull: false
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('pending', 'in_progress', 'completed'),
        allowNull: false,
        defaultValue: 'pending'
      },
      location: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      completed_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create checkpoint_items table
    await queryInterface.createTable('checkpoint_items', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      checkpoint_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'checkpoints',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      item_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('working', 'not_working', 'damaged'),
        allowNull: false,
        defaultValue: 'working'
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create checkpoint_images table
    await queryInterface.createTable('checkpoint_images', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      checkpoint_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'checkpoints',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      uploaded_by: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      file_url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      filename: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      file_size: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      mime_type: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      category: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create admin_logs table
    await queryInterface.createTable('admin_logs', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      action: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      details: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      ip_address: {
        type: Sequelize.STRING(45),
        allowNull: true
      },
      user_agent: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('checkpoint_images');
    await queryInterface.dropTable('checkpoint_items');
    await queryInterface.dropTable('checkpoints');
    await queryInterface.dropTable('admin_logs');
  }
};
