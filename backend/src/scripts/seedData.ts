// import { sequelize } from '../config/database';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import bcrypt from 'bcryptjs';

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Create sample users
    const host1 = await User.create({
      firebase_uid: `firebase-${Date.now()}-1`,
      display_name: 'John Smith',
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@example.com',
      password: 'password123',
      password_hash: await bcrypt.hash('password123', 12),
      role: 'host',
      isVerified: true,
      phone_number: '+27 21 123 4567',
      is_email_verified: true,
      is_phone_verified: false,
      approval_status: 'approved',
      document_status: 'not_uploaded',
      is_active: true
    });

    const host2 = await User.create({
      firebase_uid: `firebase-${Date.now()}-2`,
      display_name: 'Sarah Johnson',
      first_name: 'Sarah',
      last_name: 'Johnson',
      email: 'sarah@example.com',
      password: 'password123',
      password_hash: await bcrypt.hash('password123', 12),
      role: 'host',
      isVerified: true,
      phone_number: '+27 11 987 6543',
      is_email_verified: true,
      is_phone_verified: false,
      approval_status: 'approved',
      document_status: 'not_uploaded',
      is_active: true
    });

    await User.create({
      firebase_uid: `firebase-${Date.now()}-3`,
      display_name: 'Mike Wilson',
      first_name: 'Mike',
      last_name: 'Wilson',
      email: 'mike@example.com',
      password: 'password123',
      password_hash: await bcrypt.hash('password123', 12),
      role: 'renter',
      isVerified: true,
      phone_number: '+27 82 555 1234',
      is_email_verified: true,
      is_phone_verified: false,
      approval_status: 'approved',
      document_status: 'not_uploaded',
      is_active: true
    });

    // Create sample listings
    const listings = [
      {
        title: '2020 Toyota Corolla - Perfect for City Driving',
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        vehicle_type: 'car' as const,
        transmission: 'automatic' as const,
        fuel_type: 'petrol' as const,
        seats: 5,
        price_per_day: 250,
        location: 'Cape Town',
        latitude: -33.9249,
        longitude: 18.4241,
        description: 'Reliable and fuel-efficient Toyota Corolla perfect for exploring Cape Town. Well maintained with low mileage.',
        images: [
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS'],
        host_id: host1.id,
        status: 'approved' as const,
        approval_status: 'approved' as const,
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      },
      {
        title: '2019 BMW X3 - Luxury SUV for Family Trips',
        make: 'BMW',
        model: 'X3',
        year: 2019,
        vehicle_type: 'suv' as const,
        transmission: 'automatic' as const,
        fuel_type: 'petrol' as const,
        seats: 5,
        price_per_day: 450,
        location: 'Johannesburg',
        latitude: -26.2041,
        longitude: 28.0473,
        description: 'Premium BMW X3 with all the luxury features. Perfect for family trips and business travel.',
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS', 'Sunroof', 'Heated Seats'],
        host_id: host2.id,
        status: 'approved' as const,
        approval_status: 'approved' as const,
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      },
      {
        title: '2021 Ford Ranger - Work and Adventure Ready',
        make: 'Ford',
        model: 'Ranger',
        year: 2021,
        vehicle_type: 'bakkie' as const,
        transmission: 'manual' as const,
        fuel_type: 'diesel' as const,
        seats: 5,
        price_per_day: 350,
        location: 'Durban',
        latitude: -29.8587,
        longitude: 31.0218,
        description: 'Rugged Ford Ranger perfect for work or outdoor adventures. 4x4 capability and excellent fuel economy.',
        images: [
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', '4x4', 'Towing Package'],
        host_id: host1.id,
        status: 'approved' as const,
        approval_status: 'approved' as const,
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      },
      {
        title: '2018 Mercedes-Benz C-Class - Executive Comfort',
        make: 'Mercedes-Benz',
        model: 'C-Class',
        year: 2018,
        vehicle_type: 'car' as const,
        transmission: 'automatic' as const,
        fuel_type: 'petrol' as const,
        seats: 5,
        price_per_day: 400,
        location: 'Cape Town',
        latitude: -33.9249,
        longitude: 18.4241,
        description: 'Elegant Mercedes-Benz C-Class with premium features. Perfect for business meetings or special occasions.',
        images: [
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS', 'Leather Seats', 'Sunroof'],
        host_id: host2.id,
        status: 'approved' as const,
        approval_status: 'approved' as const,
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      },
      {
        title: '2020 Volkswagen Polo - Compact and Efficient',
        make: 'Volkswagen',
        model: 'Polo',
        year: 2020,
        vehicle_type: 'car' as const,
        transmission: 'manual' as const,
        fuel_type: 'petrol' as const,
        seats: 5,
        price_per_day: 200,
        location: 'Pretoria',
        latitude: -25.7479,
        longitude: 28.2293,
        description: 'Compact and fuel-efficient VW Polo. Great for city driving and short trips around Pretoria.',
        images: [
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', 'USB Port'],
        host_id: host1.id,
        status: 'approved' as const,
        approval_status: 'approved' as const,
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      },
      {
        title: '2019 Toyota Hilux - Ultimate Adventure Vehicle',
        make: 'Toyota',
        model: 'Hilux',
        year: 2019,
        vehicle_type: 'bakkie' as const,
        transmission: 'manual' as const,
        fuel_type: 'diesel' as const,
        seats: 5,
        price_per_day: 300,
        location: 'Port Elizabeth',
        latitude: -33.9608,
        longitude: 25.6022,
        description: 'Legendary Toyota Hilux - the ultimate adventure vehicle. Perfect for off-road trips and work.',
        images: [
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800'
        ],
        features: ['Air Conditioning', 'Bluetooth', '4x4', 'Towing Package', 'Off-road Package'],
        host_id: host2.id,
        status: 'approved' as const,
        approval_status: 'approved' as const,
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      }
    ];

    for (const listingData of listings) {
      await Listing.create({
        ...listingData,
        host_id: undefined, // Remove conflicting field
        hostId: Number(listingData.host_id!) || 0,
        pricePerDay: listingData.price_per_day || 100,
        image: '/uploads/default-vehicle.jpg',
        city: 'Cape Town',
        is_featured: false,
        total_bookings: 0,
        total_earnings: 0,
        category: 'economy',
        minimum_rental_days: 1
      });
    }

    console.log('✅ Database seeded successfully!');
    console.log(`📊 Created ${listings.length} vehicle listings`);
    console.log('👥 Created 3 users (2 hosts, 1 renter)');
    
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

