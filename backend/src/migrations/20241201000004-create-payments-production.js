'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payments', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      booking_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      renter_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      currency: {
        type: Sequelize.STRING(3),
        allowNull: false,
        defaultValue: 'ZAR'
      },
      payment_method: {
        type: Sequelize.ENUM('stripe', 'payfast', 'bank_transfer', 'cash', 'other'),
        allowNull: false
      },
      payment_provider: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      payment_intent_id: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      transaction_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true
      },
      status: {
        type: Sequelize.ENUM('pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded', 'partially_refunded'),
        allowNull: false,
        defaultValue: 'pending'
      },
      failure_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      refund_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          min: 0
        }
      },
      refund_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      refund_processed_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      payment_metadata: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {}
      },
      processed_at: {
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

    // Add foreign key constraints
    await queryInterface.addConstraint('payments', {
      fields: ['booking_id'],
      type: 'foreign key',
      name: 'payments_booking_id_fkey',
      references: {
        table: 'bookings',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    await queryInterface.addConstraint('payments', {
      fields: ['renter_id'],
      type: 'foreign key',
      name: 'payments_renter_id_fkey',
      references: {
        table: 'users',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // Create indexes for better performance
    await queryInterface.addIndex('payments', ['booking_id']);
    await queryInterface.addIndex('payments', ['renter_id']);
    await queryInterface.addIndex('payments', ['status']);
    await queryInterface.addIndex('payments', ['payment_method']);
    await queryInterface.addIndex('payments', ['transaction_id']);
    await queryInterface.addIndex('payments', ['payment_intent_id']);
    await queryInterface.addIndex('payments', ['created_at']);
    
    // Create composite indexes for common queries
    await queryInterface.addIndex('payments', ['renter_id', 'status']);
    await queryInterface.addIndex('payments', ['booking_id', 'status']);
    await queryInterface.addIndex('payments', ['payment_method', 'status']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payments');
  }
};
