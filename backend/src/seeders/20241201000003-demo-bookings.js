'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookings', [
      {
        id: '00000000-0000-0000-0000-000000000001',
        listing_id: '00000000-0000-0000-0000-000000000001', // Toyota Corolla (first listing)
        renter_id: '00000000-0000-0000-0000-000000000004', // Mike Wilson
        start_date: '2024-12-15',
        end_date: '2024-12-17',
        total_days: 3,
        price_per_day: 450,
        subtotal: 1350, // 3 days * 450
        service_fee: 135, // 10% service fee
        insurance_fee: 50, // Insurance fee
        total_amount: 1535, // subtotal + service_fee + insurance_fee
        status: 'confirmed',
        payment_status: 'paid',
        pickup_location: JSON.stringify({
          address: '123 Main Street, Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        }),
        return_location: JSON.stringify({
          address: '123 Main Street, Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        }),
        pickup_time: new Date('2024-12-15T10:00:00Z'),
        return_time: new Date('2024-12-17T18:00:00Z'),
        special_requests: 'Please ensure the car is clean and has a full tank of fuel.',
        add_ons: JSON.stringify(['GPS Navigation', 'Child Seat']),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000002',
        listing_id: '00000000-0000-0000-0000-000000000001', // Toyota Corolla (first listing)
        renter_id: '00000000-0000-0000-0000-000000000005', // Lisa Brown
        start_date: '2024-12-20',
        end_date: '2024-12-22',
        total_days: 3,
        price_per_day: 450,
        subtotal: 1350, // 3 days * 450
        service_fee: 135, // 10% service fee
        insurance_fee: 50, // Insurance fee
        total_amount: 1535, // subtotal + service_fee + insurance_fee
        status: 'pending',
        payment_status: 'pending',
        pickup_location: JSON.stringify({
          address: '123 Main Street, Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        }),
        return_location: JSON.stringify({
          address: '123 Main Street, Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        }),
        pickup_time: new Date('2024-12-20T10:00:00Z'),
        return_time: new Date('2024-12-22T18:00:00Z'),
        special_requests: null,
        add_ons: JSON.stringify([]),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bookings', null, {});
  }
};

