'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('approval_requests', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      requestType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [['DocumentVerification', 'VehicleListing', 'InsuranceVerification', 'ProfileVerification', 'VehicleApproval']]
        }
      },
      entityId: {
        type: Sequelize.UUID,
        allowNull: false,
        comment: 'ID of the related entity (user, vehicle, listing, etc.)'
      },
      submittedBy: {
        type: Sequelize.ENUM('renter', 'host'),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('Pending', 'UnderReview', 'Approved', 'Declined', 'RequiresMoreInfo'),
        allowNull: false,
        defaultValue: 'Pending'
      },
      submittedById: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      reviewedById: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      reviewNotes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      reviewedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Add indexes for better performance
    await queryInterface.addIndex('approval_requests', ['status']);
    await queryInterface.addIndex('approval_requests', ['submittedById']);
    await queryInterface.addIndex('approval_requests', ['requestType']);
    await queryInterface.addIndex('approval_requests', ['entityId']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('approval_requests');
  }
};