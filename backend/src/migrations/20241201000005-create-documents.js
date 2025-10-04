'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documents', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      documentType: {
        type: Sequelize.ENUM('license', 'id', 'insurance', 'registration', 'other'),
        allowNull: false
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fileUrl: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending'
      },
      rejectionReason: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      uploadedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      reviewedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      reviewedBy: {
        type: Sequelize.STRING,
        allowNull: true
      },
      expiryDate: {
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
    await queryInterface.addIndex('documents', ['userId']);
    await queryInterface.addIndex('documents', ['status']);
    await queryInterface.addIndex('documents', ['documentType']);
    await queryInterface.addIndex('documents', ['uploadedAt']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('documents');
  }
};

