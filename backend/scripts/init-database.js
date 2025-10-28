#!/usr/bin/env node

const { sequelize } = require('../dist/config/database');
const { User, Listing, Booking, Image } = require('../dist/models');

async function initializeDatabase() {
  try {
    console.log('🔄 Initializing database...');
    
    // Force sync to recreate all tables
    await sequelize.sync({ force: true });
    console.log('✅ Database tables created successfully');
    
    // Create some sample users
    const host1 = await User.create({
      firebase_uid: 'firebase-host-1',
      display_name: 'John Smith',
      first_name: 'John',
      last_name: 'Smith',
      email: 'john@example.com',
      password: 'password123',
      role: 'host',
      isVerified: true,
      phone_number: '+27 21 123 4567',
      is_email_verified: true,
      approval_status: 'approved',
      document_status: 'approved',
      is_active: true
    });

    const host2 = await User.create({
      firebase_uid: 'firebase-host-2',
      display_name: 'Sarah Johnson',
      first_name: 'Sarah',
      last_name: 'Johnson',
      email: 'sarah@example.com',
      password: 'password123',
      role: 'host',
      isVerified: true,
      phone_number: '+27 11 987 6543',
      is_email_verified: true,
      approval_status: 'approved',
      document_status: 'approved',
      is_active: true
    });

    const renter = await User.create({
      firebase_uid: 'firebase-renter-1',
      display_name: 'Mike Wilson',
      first_name: 'Mike',
      last_name: 'Wilson',
      email: 'mike@example.com',
      password: 'password123',
      role: 'renter',
      isVerified: true,
      phone_number: '+27 82 555 1234',
      is_email_verified: true,
      approval_status: 'approved',
      document_status: 'approved',
      is_active: true
    });

    console.log('✅ Sample users created');

    // Create sample vehicles
    const vehicles = [
      {
        hostId: host1.id,
        make: 'Toyota',
        model: 'Corolla',
        year: 2022,
        pricePerDay: 250,
        image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
        city: 'Cape Town',
        status: 'approved',
        title: '2022 Toyota Corolla - Clean & Reliable',
        description: 'A reliable and fuel-efficient Toyota Corolla perfect for city driving.',
        location: JSON.stringify({
          city: 'Cape Town',
          province: 'Western Cape',
          address: '123 Main Street, Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        }),
        images: JSON.stringify([
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
        ]),
        features: JSON.stringify(['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS']),
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 15000,
        vehicle_type: 'car',
        category: 'economy',
        minimum_rental_days: 1,
        color: 'White',
        license_plate: 'CA123GP',
        approval_status: 'approved',
        is_featured: false,
        rating: 4.7,
        total_bookings: 12,
        total_earnings: 3000,
        price_per_week: 1500,
        price_per_month: 5000
      },
      {
        hostId: host2.id,
        make: 'BMW',
        model: 'X3',
        year: 2021,
        pricePerDay: 450,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
        city: 'Johannesburg',
        status: 'approved',
        title: '2021 BMW X3 - Luxury SUV',
        description: 'Premium BMW X3 with luxury features and excellent performance.',
        location: JSON.stringify({
          city: 'Johannesburg',
          province: 'Gauteng',
          address: '456 Sandton Drive, Johannesburg',
          coordinates: { lat: -26.2041, lng: 28.0473 }
        }),
        images: JSON.stringify([
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'
        ]),
        features: JSON.stringify(['Leather Seats', 'Sunroof', 'Navigation', 'Backup Camera']),
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 25000,
        vehicle_type: 'suv',
        category: 'luxury',
        minimum_rental_days: 2,
        color: 'Black',
        license_plate: 'JHB456GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.8,
        total_bookings: 18,
        total_earnings: 8100,
        price_per_week: 2700,
        price_per_month: 9000
      },
      {
        hostId: host1.id,
        make: 'Toyota',
        model: 'Hilux',
        year: 2021,
        pricePerDay: 320,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        city: 'Durban',
        status: 'approved',
        title: '2021 Toyota Hilux - Work Truck',
        description: 'Reliable Toyota Hilux perfect for work and outdoor adventures.',
        location: JSON.stringify({
          city: 'Durban',
          province: 'KwaZulu-Natal',
          address: '789 Umhlanga, Durban',
          coordinates: { lat: -29.8587, lng: 31.0218 }
        }),
        images: JSON.stringify([
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ]),
        features: JSON.stringify(['4x4', 'Air Conditioning', 'Bluetooth', 'Towing Package']),
        fuelType: 'diesel',
        transmission: 'manual',
        seats: 5,
        mileage: 22000,
        vehicle_type: 'truck',
        category: 'premium',
        minimum_rental_days: 1,
        color: 'White',
        license_plate: 'DBN789GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.8,
        total_bookings: 15,
        total_earnings: 4800,
        price_per_week: 1900,
        price_per_month: 6500
      }
    ];

    for (const vehicleData of vehicles) {
      await Listing.create(vehicleData);
    }

    console.log('✅ Sample vehicles created');
    console.log('🎉 Database initialization completed successfully!');
    
    // Show summary
    const userCount = await User.count();
    const vehicleCount = await Listing.count();
    console.log(`📊 Database contains ${userCount} users and ${vehicleCount} vehicles`);
    
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  initializeDatabase()
    .then(() => {
      console.log('✅ Initialization complete');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Initialization failed:', error);
      process.exit(1);
    });
}

module.exports = { initializeDatabase };
