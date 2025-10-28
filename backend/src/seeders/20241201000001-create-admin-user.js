'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    await queryInterface.bulkInsert('users', [{
      id: '00000000-0000-0000-0000-000000000001',
      email: 'admin@rideshare-sa.com',
      password_hash: hashedPassword,
      first_name: 'Admin',
      last_name: 'User',
      role: 'admin',
      is_email_verified: true,
      is_phone_verified: true,
      approval_status: 'approved',
      document_status: 'approved',
      is_active: true,
      created_at: new Date(),
      updated_at: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', {
      email: 'admin@rideshare-sa.com'
    });
  }
};
