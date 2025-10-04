'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      renter_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      listing_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'listings',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      total_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1
        }
      },
      price_per_day: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      subtotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      service_fee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      insurance_fee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0
        }
      },
      total_amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      status: {
        type: Sequelize.ENUM('pending', 'confirmed', 'approved', 'declined', 'cancelled', 'completed', 'disputed'),
        allowNull: false,
        defaultValue: 'pending'
      },
      payment_status: {
        type: Sequelize.ENUM('pending', 'paid', 'failed', 'refunded', 'partially_refunded'),
        allowNull: false,
        defaultValue: 'pending'
      },
      pickup_location: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      return_location: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      pickup_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      return_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      special_requests: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      add_ons: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: []
      },
      cancellation_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      cancellation_fee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          min: 0
        }
      },
      host_notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      renter_notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      admin_notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      dispute_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      dispute_resolution: {
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

    // Create indexes for better performance
    await queryInterface.addIndex('bookings', ['renter_id']);
    await queryInterface.addIndex('bookings', ['listing_id']);
    await queryInterface.addIndex('bookings', ['status']);
    await queryInterface.addIndex('bookings', ['payment_status']);
    await queryInterface.addIndex('bookings', ['start_date']);
    await queryInterface.addIndex('bookings', ['end_date']);
    await queryInterface.addIndex('bookings', ['created_at']);
    
    // Create composite indexes for common queries
    await queryInterface.addIndex('bookings', ['renter_id', 'status']);
    await queryInterface.addIndex('bookings', ['listing_id', 'status']);
    await queryInterface.addIndex('bookings', ['status', 'payment_status']);
    await queryInterface.addIndex('bookings', ['start_date', 'end_date']);
    
    // Create unique constraint to prevent double booking
    await queryInterface.addIndex('bookings', ['listing_id', 'start_date', 'end_date'], {
      unique: true,
      name: 'unique_booking_dates'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};
