const { sequelize } = require('./dist/config/database');
const bcrypt = require('bcryptjs');

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // Import models
    const { User, Listing, Booking, Review } = require('./dist/models');

    // Hash password
    const hashedPassword = await bcrypt.hash('password123', 10);

    // Create users
    const users = await User.bulkCreate([
      {
        name: 'Admin User',
        email: 'admin@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'admin',
        phoneNumber: '+27 11 123 4567'
      },
      {
        name: 'John Smith',
        email: 'host1@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'host',
        phoneNumber: '+27 21 234 5678'
      },
      {
        name: 'Sarah Johnson',
        email: 'host2@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'host',
        phoneNumber: '+27 31 345 6789'
      },
      {
        name: 'Mike Wilson',
        email: 'renter1@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 82 456 7890'
      },
      {
        name: 'Lisa Brown',
        email: 'renter2@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 83 567 8901'
      },
      {
        name: 'David Davis',
        email: 'renter3@rentza.co.za',
        passwordHash: hashedPassword,
        role: 'renter',
        phoneNumber: '+27 84 678 9012'
      }
    ]);

    console.log('Users created:', users.length);

    // Create listings
    const listings = await Listing.bulkCreate([
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
        features: ['AC', 'Bluetooth', 'USB Port', 'Airbags'],
        pricePerDay: 450,
        location: 'Cape Town, Western Cape',
        images: [
          'https://example.com/corolla1.jpg',
          'https://example.com/corolla2.jpg'
        ],
        availability: {
          available: true,
          blockedDates: []
        },
        status: 'approved',
        declineReason: null
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
        features: ['Towbar', '4x4', 'Load Bed', 'Air Conditioning'],
        pricePerDay: 750,
        location: 'Johannesburg, Gauteng',
        images: [
          'https://example.com/amarok1.jpg',
          'https://example.com/amarok2.jpg'
        ],
        availability: {
          available: true,
          blockedDates: []
        },
        status: 'pending',
        declineReason: null
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
        features: ['Towbar', 'Brakes', 'Lights'],
        pricePerDay: 150,
        location: 'Durban, KwaZulu-Natal',
        images: [
          'https://example.com/trailer1.jpg'
        ],
        availability: {
          available: true,
          blockedDates: []
        },
        status: 'declined',
        declineReason: 'Missing required documents and insurance'
      }
    ]);

    console.log('Listings created:', listings.length);

    // Create bookings
    const bookings = await Booking.bulkCreate([
      {
        listingId: 1, // Toyota Corolla
        renterId: 4, // Mike Wilson
        startDate: new Date('2024-12-15'),
        endDate: new Date('2024-12-17'),
        totalPrice: 1350, // 3 days * 450
        status: 'confirmed'
      },
      {
        listingId: 1, // Toyota Corolla
        renterId: 5, // Lisa Brown
        startDate: new Date('2024-12-20'),
        endDate: new Date('2024-12-22'),
        totalPrice: 1350, // 3 days * 450
        status: 'pending'
      }
    ]);

    console.log('Bookings created:', bookings.length);

    // Create reviews
    const reviews = await Review.bulkCreate([
      {
        listingId: 1, // Toyota Corolla
        renterId: 4, // Mike Wilson
        rating: 5,
        comment: 'Car was clean and reliable! Perfect for my trip around Cape Town. John was very helpful and the pickup/dropoff was smooth.'
      },
      {
        listingId: 1, // Toyota Corolla
        renterId: 5, // Lisa Brown
        rating: 4,
        comment: 'Great car, good fuel economy. Would definitely rent again.'
      }
    ]);

    console.log('Reviews created:', reviews.length);

    console.log('✅ Database seeded successfully!');
    console.log('📊 Summary:');
    console.log(`   - ${users.length} users created`);
    console.log(`   - ${listings.length} listings created`);
    console.log(`   - ${bookings.length} bookings created`);
    console.log(`   - ${reviews.length} reviews created`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();
