const { sequelize } = require('./dist/config/database');
const { User, Listing, Booking } = require('./dist/models');

async function seedDemoData() {
  try {
    console.log('Starting database seeding...');
    
    // Clear existing data
    await Booking.destroy({ where: {} });
    await Listing.destroy({ where: {} });
    await User.destroy({ where: {} });
    
    // Create demo users
    const users = await User.bulkCreate([
      {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@rentza.co.za',
        passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J.8.8.8.8',
        role: 'admin',
        phoneNumber: '+27 11 123 4567',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified'
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'host1@rentza.co.za',
        passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J.8.8.8.8',
        role: 'host',
        phoneNumber: '+27 21 234 5678',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified'
      },
      {
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'host2@rentza.co.za',
        passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J.8.8.8.8',
        role: 'host',
        phoneNumber: '+27 31 345 6789',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified'
      },
      {
        firstName: 'Mike',
        lastName: 'Wilson',
        email: 'renter1@rentza.co.za',
        passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J.8.8.8.8',
        role: 'renter',
        phoneNumber: '+27 82 456 7890',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified'
      },
      {
        firstName: 'Lisa',
        lastName: 'Brown',
        email: 'renter2@rentza.co.za',
        passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J.8.8.8.8',
        role: 'renter',
        phoneNumber: '+27 83 567 8901',
        isEmailVerified: true,
        approvalStatus: 'approved',
        documentStatus: 'verified'
      }
    ]);
    
    console.log('Users created:', users.length);
    
    // Create demo listings
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
        status: 'approved'
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
        status: 'approved'
      }
    ]);
    
    console.log('Listings created:', listings.length);
    
    // Create demo bookings
    const bookings = await Booking.bulkCreate([
      {
        vehicleId: 1, // Toyota Corolla
        renterId: 4, // Mike Wilson
        startDate: new Date('2024-12-15'),
        endDate: new Date('2024-12-17'),
        totalPrice: 1350,
        status: 'confirmed',
        paymentStatus: 'paid',
        paymentIntentId: 'pi_demo_123',
        paymentReference: 'ref_123456'
      },
      {
        vehicleId: 1, // Toyota Corolla
        renterId: 5, // Lisa Brown
        startDate: new Date('2024-12-20'),
        endDate: new Date('2024-12-22'),
        totalPrice: 1350,
        status: 'pending',
        paymentStatus: 'pending'
      }
    ]);
    
    console.log('Bookings created:', bookings.length);
    console.log('Database seeding completed successfully!');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seedDemoData();
