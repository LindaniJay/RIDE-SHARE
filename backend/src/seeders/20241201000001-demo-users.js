'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'admin',
        phoneNumber: '+27 11 123 4567',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'host1@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'host',
        phoneNumber: '+27 21 234 5678',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'host2@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'host',
        phoneNumber: '+27 31 345 6789',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mike',
        lastName: 'Wilson',
        email: 'renter1@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 82 456 7890',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Lisa',
        lastName: 'Brown',
        email: 'renter2@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 83 567 8901',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'David',
        lastName: 'Davis',
        email: 'renter3@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 84 678 9012',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

