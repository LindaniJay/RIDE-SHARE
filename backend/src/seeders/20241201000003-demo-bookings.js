'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookings', [
      {
        listingId: 1, // Toyota Corolla
        renterId: 4, // Mike Wilson
        startDate: new Date('2024-12-15'),
        endDate: new Date('2024-12-17'),
        totalPrice: 1350, // 3 days * 450
        status: 'confirmed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 1, // Toyota Corolla
        renterId: 5, // Lisa Brown
        startDate: new Date('2024-12-20'),
        endDate: new Date('2024-12-22'),
        totalPrice: 1350, // 3 days * 450
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bookings', null, {});
  }
};

