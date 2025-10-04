'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
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
      reviewer_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      reviewee_id: {
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
        allowNull: true,
        references: {
          model: 'listings',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      review_type: {
        type: Sequelize.ENUM('renter_to_host', 'host_to_renter', 'renter_to_vehicle', 'host_to_vehicle'),
        allowNull: false
      },
      is_public: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      is_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      helpful_count: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      response: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      response_date: {
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

    // Create indexes for better performance
    await queryInterface.addIndex('reviews', ['booking_id']);
    await queryInterface.addIndex('reviews', ['reviewer_id']);
    await queryInterface.addIndex('reviews', ['reviewee_id']);
    await queryInterface.addIndex('reviews', ['listing_id']);
    await queryInterface.addIndex('reviews', ['rating']);
    await queryInterface.addIndex('reviews', ['review_type']);
    await queryInterface.addIndex('reviews', ['is_public']);
    await queryInterface.addIndex('reviews', ['created_at']);
    
    // Create composite indexes for common queries
    await queryInterface.addIndex('reviews', ['reviewee_id', 'review_type']);
    await queryInterface.addIndex('reviews', ['listing_id', 'is_public']);
    await queryInterface.addIndex('reviews', ['reviewer_id', 'review_type']);
    
    // Create unique constraint to prevent duplicate reviews
    await queryInterface.addIndex('reviews', ['booking_id', 'reviewer_id', 'review_type'], {
      unique: true,
      name: 'unique_booking_review'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};
