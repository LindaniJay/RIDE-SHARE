const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create admin user
    await User.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@rentza.co.za',
      password: 'Admin123!',
      role: 'admin',
      phoneNumber: '+27 21 123 4567',
      isEmailVerified: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await User.destroy({
      where: {
        email: 'admin@rentza.co.za'
      }
    });
  }
};
