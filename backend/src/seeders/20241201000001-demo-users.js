'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin User',
        email: 'admin@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'admin',
        phoneNumber: '+27 11 123 4567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Smith',
        email: 'host1@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'host',
        phoneNumber: '+27 21 234 5678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sarah Johnson',
        email: 'host2@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'host',
        phoneNumber: '+27 31 345 6789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mike Wilson',
        email: 'renter1@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 82 456 7890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lisa Brown',
        email: 'renter2@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 83 567 8901',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'David Davis',
        email: 'renter3@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 84 678 9012',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

