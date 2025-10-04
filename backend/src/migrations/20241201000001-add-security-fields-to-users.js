'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'failed_login_attempts', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    });

    await queryInterface.addColumn('users', 'last_failed_login', {
      type: Sequelize.DATE,
      allowNull: true
    });

    await queryInterface.addColumn('users', 'twoFactorEnabled', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });

    await queryInterface.addColumn('users', 'twoFactorSecret', {
      type: Sequelize.STRING(255),
      allowNull: true
    });

    await queryInterface.addColumn('users', 'backupCodes', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    await queryInterface.addColumn('users', 'sessionTokens', {
      type: Sequelize.TEXT,
      allowNull: true
    });

    // Add indexes for performance
    await queryInterface.addIndex('users', ['failed_login_attempts']);
    await queryInterface.addIndex('users', ['last_failed_login']);
    await queryInterface.addIndex('users', ['twoFactorEnabled']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'failed_login_attempts');
    await queryInterface.removeColumn('users', 'last_failed_login');
    await queryInterface.removeColumn('users', 'twoFactorEnabled');
    await queryInterface.removeColumn('users', 'twoFactorSecret');
    await queryInterface.removeColumn('users', 'backupCodes');
    await queryInterface.removeColumn('users', 'sessionTokens');
  }
};
