'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Drop existing users table if it exists
    await queryInterface.dropTable('users').catch(() => {});
    
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password_hash: {
        type: Sequelize.STRING(255),
        allowNull: true // Allow null for OAuth users
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      role: {
        type: Sequelize.ENUM('renter', 'host', 'admin'),
        allowNull: false,
        defaultValue: 'renter'
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      is_phone_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
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
      document_status: {
        type: Sequelize.ENUM('not_uploaded', 'pending', 'approved', 'rejected'),
        allowNull: false,
        defaultValue: 'not_uploaded'
      },
      profile_image_url: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      address: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      emergency_contact: {
        type: Sequelize.JSONB,
        allowNull: true
      },
      preferences: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {}
      },
      last_login_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      // Security fields
      failed_login_attempts: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      last_failed_login: {
        type: Sequelize.DATE,
        allowNull: true
      },
      twoFactorEnabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      twoFactorSecret: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      backupCodes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      sessionTokens: {
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

    // Create indexes
    await queryInterface.addIndex('users', ['email']);
    await queryInterface.addIndex('users', ['role']);
    await queryInterface.addIndex('users', ['approval_status']);
    await queryInterface.addIndex('users', ['is_active']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
