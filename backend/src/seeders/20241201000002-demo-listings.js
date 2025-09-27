'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('listings', [
      {
        hostId: 2, // John Smith
        title: '2020 Toyota Corolla - Clean & Reliable',
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        type: 'car',
        transmission: 'manual',
        fuelType: 'petrol',
        seats: 5,
        features: JSON.stringify(['AC', 'Bluetooth', 'USB Port', 'Airbags']),
        pricePerDay: 450,
        location: 'Cape Town, Western Cape',
        images: JSON.stringify([
          'https://example.com/corolla1.jpg',
          'https://example.com/corolla2.jpg'
        ]),
        availability: JSON.stringify({
          available: true,
          blockedDates: []
        }),
        status: 'approved',
        declineReason: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 3, // Sarah Johnson
        title: '2018 VW Amarok Bakkie - Perfect for Work',
        make: 'Volkswagen',
        model: 'Amarok',
        year: 2018,
        type: 'bakkie',
        transmission: 'manual',
        fuelType: 'diesel',
        seats: 5,
        features: JSON.stringify(['Towbar', '4x4', 'Load Bed', 'Air Conditioning']),
        pricePerDay: 750,
        location: 'Johannesburg, Gauteng',
        images: JSON.stringify([
          'https://example.com/amarok1.jpg',
          'https://example.com/amarok2.jpg'
        ]),
        availability: JSON.stringify({
          available: true,
          blockedDates: []
        }),
        status: 'pending',
        declineReason: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2, // John Smith
        title: '2.5m Trailer - Great for Moving',
        make: 'Generic',
        model: 'Trailer',
        year: 2020,
        type: 'trailer',
        transmission: 'manual',
        fuelType: 'petrol',
        seats: 0,
        features: JSON.stringify(['Towbar', 'Brakes', 'Lights']),
        pricePerDay: 150,
        location: 'Durban, KwaZulu-Natal',
        images: JSON.stringify([
          'https://example.com/trailer1.jpg'
        ]),
        availability: JSON.stringify({
          available: true,
          blockedDates: []
        }),
        status: 'declined',
        declineReason: 'Missing required documents and insurance',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('listings', null, {});
  }
};
