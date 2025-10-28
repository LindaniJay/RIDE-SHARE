'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        id: '00000000-0000-0000-0000-000000000001',
        booking_id: '00000000-0000-0000-0000-000000000001', // First booking
        reviewer_id: '00000000-0000-0000-0000-000000000004', // Mike Wilson
        reviewee_id: '00000000-0000-0000-0000-000000000002', // John Smith (host)
        listing_id: '00000000-0000-0000-0000-000000000001', // Toyota Corolla
        rating: 5,
        title: 'Excellent car and service!',
        comment: 'Car was clean and reliable! Perfect for my trip around Cape Town. John was very helpful and the pickup/dropoff was smooth.',
        review_type: 'renter_to_host',
        is_public: true,
        is_verified: true,
        helpful_count: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000002',
        booking_id: '00000000-0000-0000-0000-000000000002', // Second booking
        reviewer_id: '00000000-0000-0000-0000-000000000005', // Lisa Brown
        reviewee_id: '00000000-0000-0000-0000-000000000002', // John Smith (host)
        listing_id: '00000000-0000-0000-0000-000000000001', // Toyota Corolla
        rating: 4,
        title: 'Great experience',
        comment: 'Great car, good fuel economy. Would definitely rent again.',
        review_type: 'renter_to_host',
        is_public: true,
        is_verified: true,
        helpful_count: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};

