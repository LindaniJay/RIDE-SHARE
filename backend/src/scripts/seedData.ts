import { sequelize } from '../config/database';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import bcrypt from 'bcryptjs';

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Create sample users
    const host1 = await User.create({
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      password: 'password123',
      passwordHash: await bcrypt.hash('password123', 12),
      role: 'host',
      phoneNumber: '+27 21 123 4567'
    });

    const host2 = await User.create({
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah@example.com',
      password: 'password123',
      passwordHash: await bcrypt.hash('password123', 12),
      role: 'host',
      phoneNumber: '+27 11 987 6543'
    });

    const renter1 = await User.create({
      firstName: 'Mike',
      lastName: 'Wilson',
      email: 'mike@example.com',
      password: 'password123',
      passwordHash: await bcrypt.hash('password123', 12),
      role: 'renter',
      phoneNumber: '+27 82 555 1234'
    });

    // Create sample listings
    const listings = [
      {
        title: '2020 Toyota Corolla - Perfect for City Driving',
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        type: 'car' as const,
        transmission: 'automatic' as const,
        fuelType: 'petrol' as const,
        seats: 5,
        pricePerDay: 250,
        location: 'Cape Town',
        latitude: -33.9249,
        longitude: 18.4241,
        description: 'Reliable and fuel-efficient Toyota Corolla perfect for exploring Cape Town. Well maintained with low mileage.',
        images: [
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS'],
        hostId: host1.id,
        status: 'approved' as const
      },
      {
        title: '2019 BMW X3 - Luxury SUV for Family Trips',
        make: 'BMW',
        model: 'X3',
        year: 2019,
        type: 'suv' as const,
        transmission: 'automatic' as const,
        fuelType: 'petrol' as const,
        seats: 5,
        pricePerDay: 450,
        location: 'Johannesburg',
        latitude: -26.2041,
        longitude: 28.0473,
        description: 'Premium BMW X3 with all the luxury features. Perfect for family trips and business travel.',
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS', 'Sunroof', 'Heated Seats'],
        hostId: host2.id,
        status: 'approved' as const
      },
      {
        title: '2021 Ford Ranger - Work and Adventure Ready',
        make: 'Ford',
        model: 'Ranger',
        year: 2021,
        type: 'bakkie' as const,
        transmission: 'manual' as const,
        fuelType: 'diesel' as const,
        seats: 5,
        pricePerDay: 350,
        location: 'Durban',
        latitude: -29.8587,
        longitude: 31.0218,
        description: 'Rugged Ford Ranger perfect for work or outdoor adventures. 4x4 capability and excellent fuel economy.',
        images: [
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', '4x4', 'Towing Package'],
        hostId: host1.id,
        status: 'approved' as const
      },
      {
        title: '2018 Mercedes-Benz C-Class - Executive Comfort',
        make: 'Mercedes-Benz',
        model: 'C-Class',
        year: 2018,
        type: 'car' as const,
        transmission: 'automatic' as const,
        fuelType: 'petrol' as const,
        seats: 5,
        pricePerDay: 400,
        location: 'Cape Town',
        latitude: -33.9249,
        longitude: 18.4241,
        description: 'Elegant Mercedes-Benz C-Class with premium features. Perfect for business meetings or special occasions.',
        images: [
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS', 'Leather Seats', 'Sunroof'],
        hostId: host2.id,
        status: 'approved' as const
      },
      {
        title: '2020 Volkswagen Polo - Compact and Efficient',
        make: 'Volkswagen',
        model: 'Polo',
        year: 2020,
        type: 'car' as const,
        transmission: 'manual' as const,
        fuelType: 'petrol' as const,
        seats: 5,
        pricePerDay: 200,
        location: 'Pretoria',
        latitude: -25.7479,
        longitude: 28.2293,
        description: 'Compact and fuel-efficient VW Polo. Great for city driving and short trips around Pretoria.',
        images: [
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port'],
        hostId: host1.id,
        status: 'approved' as const
      },
      {
        title: '2019 Toyota Hilux - Ultimate Adventure Vehicle',
        make: 'Toyota',
        model: 'Hilux',
        year: 2019,
        type: 'bakkie' as const,
        transmission: 'manual' as const,
        fuelType: 'diesel' as const,
        seats: 5,
        pricePerDay: 300,
        location: 'Port Elizabeth',
        latitude: -33.9608,
        longitude: 25.6022,
        description: 'Legendary Toyota Hilux - the ultimate adventure vehicle. Perfect for off-road trips and work.',
        images: [
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', '4x4', 'Towing Package', 'Off-road Package'],
        hostId: host2.id,
        status: 'approved' as const
      }
    ];

    for (const listingData of listings) {
      await Listing.create(listingData);
    }

    console.log('✅ Database seeded successfully!');
    console.log(`📊 Created ${listings.length} vehicle listings`);
    console.log(`👥 Created 3 users (2 hosts, 1 renter)`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  seedData().then(() => {
    console.log('🎉 Seeding completed!');
    process.exit(0);
  });
}

export default seedData;
