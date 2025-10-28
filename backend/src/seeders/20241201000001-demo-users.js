'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    await queryInterface.bulkInsert('users', [
      {
        id: '00000000-0000-0000-0000-000000000002',
        first_name: 'John',
        last_name: 'Smith',
        email: 'host1@rentza.co.za',
        password_hash: hashedPassword,
        role: 'host',
        phone_number: '+27 21 234 5678',
        is_email_verified: true,
        is_phone_verified: true,
        approval_status: 'approved',
        document_status: 'approved',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000003',
        first_name: 'Sarah',
        last_name: 'Johnson',
        email: 'host2@rentza.co.za',
        password_hash: hashedPassword,
        role: 'host',
        phone_number: '+27 31 345 6789',
        is_email_verified: true,
        is_phone_verified: true,
        approval_status: 'approved',
        document_status: 'approved',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000004',
        first_name: 'Mike',
        last_name: 'Wilson',
        email: 'renter1@rentza.co.za',
        password_hash: hashedPassword,
        role: 'renter',
        phone_number: '+27 82 456 7890',
        is_email_verified: true,
        is_phone_verified: true,
        approval_status: 'approved',
        document_status: 'approved',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000005',
        first_name: 'Lisa',
        last_name: 'Brown',
        email: 'renter2@rentza.co.za',
        password_hash: hashedPassword,
        role: 'renter',
        phone_number: '+27 83 567 8901',
        is_email_verified: true,
        is_phone_verified: true,
        approval_status: 'approved',
        document_status: 'approved',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000006',
        first_name: 'David',
        last_name: 'Davis',
        email: 'renter3@rentza.co.za',
        password_hash: hashedPassword,
        role: 'renter',
        phone_number: '+27 84 678 9012',
        is_email_verified: true,
        is_phone_verified: true,
        approval_status: 'approved',
        document_status: 'approved',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};

