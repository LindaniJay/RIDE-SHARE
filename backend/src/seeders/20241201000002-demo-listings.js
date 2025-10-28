'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listings', [
      {
        id: '00000000-0000-0000-0000-000000000001',
        host_id: '00000000-0000-0000-0000-000000000002', // John Smith
        title: '2020 Toyota Corolla - Clean & Reliable',
        description: 'A reliable and fuel-efficient Toyota Corolla perfect for city driving.',
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        vehicle_type: 'car',
        category: 'compact',
        transmission: 'manual',
        fuel_type: 'petrol',
        seats: 5,
        mileage: 45000,
        color: 'Silver',
        features: JSON.stringify(['AC', 'Bluetooth', 'USB Port', 'Airbags']),
        price_per_day: 450,
        price_per_week: 2800,
        price_per_month: 10000,
        location: JSON.stringify({
          city: 'Cape Town',
          province: 'Western Cape',
          address: '123 Main Street, Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        }),
        images: JSON.stringify([
          'https://example.com/corolla1.jpg',
          'https://example.com/corolla2.jpg'
        ]),
        image: 'https://example.com/corolla1.jpg',
        city: 'Cape Town',
        minimum_rental_days: 1,
        maximum_rental_days: 30,
        status: 'approved',
        approval_status: 'approved',
        rejection_reason: null,
        is_featured: false,
        rating: 4.5,
        total_bookings: 12,
        total_earnings: 5400,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000002',
        host_id: '00000000-0000-0000-0000-000000000003', // Sarah Johnson
        title: '2018 VW Amarok Bakkie - Perfect for Work',
        description: 'A powerful VW Amarok bakkie ideal for work and outdoor adventures.',
        make: 'Volkswagen',
        model: 'Amarok',
        year: 2018,
        vehicle_type: 'bakkie',
        category: 'full_size',
        transmission: 'manual',
        fuel_type: 'diesel',
        seats: 5,
        mileage: 85000,
        color: 'White',
        features: JSON.stringify(['Towbar', '4x4', 'Load Bed', 'Air Conditioning']),
        price_per_day: 750,
        price_per_week: 4500,
        price_per_month: 18000,
        location: JSON.stringify({
          city: 'Johannesburg',
          province: 'Gauteng',
          address: '456 Business District, Johannesburg',
          coordinates: { lat: -26.2041, lng: 28.0473 }
        }),
        images: JSON.stringify([
          'https://example.com/amarok1.jpg',
          'https://example.com/amarok2.jpg'
        ]),
        image: 'https://example.com/amarok1.jpg',
        city: 'Johannesburg',
        minimum_rental_days: 1,
        maximum_rental_days: 14,
        status: 'pending',
        approval_status: 'pending',
        rejection_reason: null,
        is_featured: false,
        rating: 0,
        total_bookings: 0,
        total_earnings: 0,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '00000000-0000-0000-0000-000000000003',
        host_id: '00000000-0000-0000-0000-000000000002', // John Smith
        title: '2.5m Trailer - Great for Moving',
        description: 'A sturdy trailer perfect for moving, hauling, or transporting goods.',
        make: 'Generic',
        model: 'Trailer',
        year: 2020,
        vehicle_type: 'truck',
        category: 'economy',
        transmission: 'manual',
        fuel_type: 'petrol',
        seats: 0,
        mileage: 0,
        color: 'Blue',
        features: JSON.stringify(['Towbar', 'Brakes', 'Lights']),
        price_per_day: 150,
        price_per_week: 900,
        price_per_month: 3000,
        location: JSON.stringify({
          city: 'Durban',
          province: 'KwaZulu-Natal',
          address: '789 Coastal Road, Durban',
          coordinates: { lat: -29.8587, lng: 31.0218 }
        }),
        images: JSON.stringify([
          'https://example.com/trailer1.jpg'
        ]),
        image: 'https://example.com/trailer1.jpg',
        city: 'Durban',
        minimum_rental_days: 1,
        maximum_rental_days: 7,
        status: 'rejected',
        approval_status: 'rejected',
        rejection_reason: 'Missing required documents and insurance',
        is_featured: false,
        rating: 0,
        total_bookings: 0,
        total_earnings: 0,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listings', null, {});
  }
};
