'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admin_logs', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      admin_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      action: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      entity_type: {
        type: Sequelize.ENUM('user', 'listing', 'booking', 'payment', 'review', 'system'),
        allowNull: false
      },
      entity_id: {
        type: Sequelize.UUID,
        allowNull: true
      },
      target_user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      details: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {}
      },
      ip_address: {
        type: Sequelize.INET,
        allowNull: true
      },
      user_agent: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      severity: {
        type: Sequelize.ENUM('low', 'medium', 'high', 'critical'),
        allowNull: false,
        defaultValue: 'low'
      },
      status: {
        type: Sequelize.ENUM('success', 'failed', 'pending'),
        allowNull: false,
        defaultValue: 'success'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });

    // Create indexes for better performance
    await queryInterface.addIndex('admin_logs', ['admin_id']);
    await queryInterface.addIndex('admin_logs', ['action']);
    await queryInterface.addIndex('admin_logs', ['entity_type']);
    await queryInterface.addIndex('admin_logs', ['entity_id']);
    await queryInterface.addIndex('admin_logs', ['target_user_id']);
    await queryInterface.addIndex('admin_logs', ['severity']);
    await queryInterface.addIndex('admin_logs', ['status']);
    await queryInterface.addIndex('admin_logs', ['created_at']);
    
    // Create composite indexes for common queries
    await queryInterface.addIndex('admin_logs', ['admin_id', 'created_at']);
    await queryInterface.addIndex('admin_logs', ['entity_type', 'entity_id']);
    await queryInterface.addIndex('admin_logs', ['target_user_id', 'created_at']);
    await queryInterface.addIndex('admin_logs', ['severity', 'status']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admin_logs');
  }
};
