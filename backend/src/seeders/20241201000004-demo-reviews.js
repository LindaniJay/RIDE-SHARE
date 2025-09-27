'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        listingId: 1, // Toyota Corolla
        renterId: 4, // Mike Wilson
        rating: 5,
        comment: 'Car was clean and reliable! Perfect for my trip around Cape Town. John was very helpful and the pickup/dropoff was smooth.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 1, // Toyota Corolla
        renterId: 5, // Lisa Brown
        rating: 4,
        comment: 'Great car, good fuel economy. Would definitely rent again.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
