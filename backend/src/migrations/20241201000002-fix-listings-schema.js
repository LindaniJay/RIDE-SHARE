'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop existing listings table if it exists
    await queryInterface.dropTable('listings').catch(() => {});
    
    await queryInterface.createTable('listings', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      host_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      make: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      model: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1900,
          max: new Date().getFullYear() + 1
        }
      },
      vehicle_type: {
        type: Sequelize.ENUM('car', 'suv', 'bakkie', 'van', 'motorcycle', 'truck'),
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM('economy', 'compact', 'mid_size', 'full_size', 'premium', 'luxury', 'sports'),
        allowNull: false
      },
      price_per_day: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0
        }
      },
      price_per_week: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          min: 0
        }
      },
      price_per_month: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          min: 0
        }
      },
      location: {
        type: Sequelize.JSONB,
        allowNull: false
      },
      images: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: []
      },
      features: {
        type: Sequelize.JSONB,
        allowNull: false,
        defaultValue: []
      },
      specifications: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {}
      },
      availability_calendar: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {}
      },
      minimum_rental_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      maximum_rental_days: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      fuel_type: {
        type: Sequelize.ENUM('petrol', 'diesel', 'electric', 'hybrid'),
        allowNull: false,
        defaultValue: 'petrol'
      },
      transmission: {
        type: Sequelize.ENUM('manual', 'automatic', 'semi_automatic'),
        allowNull: false,
        defaultValue: 'manual'
      },
      seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5,
        validate: {
          min: 1,
          max: 50
        }
      },
      mileage: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: {
          min: 0
        }
      },
      color: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      license_plate: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      insurance_provider: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      insurance_policy_number: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      roadworthy_certificate: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('draft', 'pending', 'approved', 'rejected', 'inactive'),
        allowNull: false,
        defaultValue: 'pending' // CRITICAL FIX: Default to pending for approval workflow
      },
      approval_status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        allowNull: false,
        defaultValue: 'pending'
      },
      rejection_reason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      is_featured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      rating: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true,
        validate: {
          min: 0,
          max: 5
        }
      },
      total_bookings: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      total_earnings: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.addIndex('listings', ['host_id']);
    await queryInterface.addIndex('listings', ['status']);
    await queryInterface.addIndex('listings', ['approval_status']);
    await queryInterface.addIndex('listings', ['vehicle_type']);
    await queryInterface.addIndex('listings', ['category']);
    await queryInterface.addIndex('listings', ['price_per_day']);
    await queryInterface.addIndex('listings', ['rating']);
    await queryInterface.addIndex('listings', ['is_featured']);
    await queryInterface.addIndex('listings', ['created_at']);
    
    // Create composite indexes for common queries
    await queryInterface.addIndex('listings', ['status', 'approval_status']);
    await queryInterface.addIndex('listings', ['vehicle_type', 'category']);
    await queryInterface.addIndex('listings', ['host_id', 'status']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('listings');
  }
};
