const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hash the password
    const passwordHash = await bcrypt.hash('Admin123!', 12);
    
    // Create admin user
    await User.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@rentza.co.za',
      passwordHash: passwordHash,
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
