#!/usr/bin/env node

const { User, Listing, Booking, Payment, Review } = require('../dist/models');
const bcrypt = require('bcryptjs');

async function seedDemoData() {
  try {
    console.log('🌱 Seeding demo data...');

    // Create demo users
    const demoUsers = [
      {
        email: 'john.doe@example.com',
        password: 'Password123!',
        first_name: 'John',
        last_name: 'Doe',
        role: 'renter',
        is_email_verified: true,
        approval_status: 'approved',
        document_status: 'approved'
      },
      {
        email: 'sarah.johnson@example.com',
        password: 'Password123!',
        first_name: 'Sarah',
        last_name: 'Johnson',
        role: 'host',
        is_email_verified: true,
        approval_status: 'approved',
        document_status: 'approved'
      },
      {
        email: 'mike.wilson@example.com',
        password: 'Password123!',
        first_name: 'Mike',
        last_name: 'Wilson',
        role: 'host',
        is_email_verified: true,
        approval_status: 'approved',
        document_status: 'approved'
      }
    ];

    const users = [];
    for (const userData of demoUsers) {
      const user = await User.create(userData);
      users.push(user);
      console.log(`✅ Created user: ${user.email}`);
    }

    // Create demo listings with proper field mapping
    const demoListings = [
      {
        hostId: users[1].id, // Sarah Johnson
        make: 'Toyota',
        model: 'Hilux',
        year: 2022,
        pricePerDay: 850,
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
        city: 'Cape Town',
        status: 'approved',
        title: '2022 Toyota Hilux Double Cab',
        description: 'Reliable and powerful bakkie perfect for work and outdoor adventures. Well-maintained with full service history.',
        location: '123 Main Street, Cape Town',
        features: ['4x4', 'Air Conditioning', 'Bluetooth', 'GPS', 'Backup Camera'],
        fuelType: 'diesel',
        transmission: 'automatic',
        seats: 5,
        mileage: 15000,
        vehicle_type: 'bakkie',
        category: 'premium',
        price_per_week: 5000,
        price_per_month: 15000,
        minimum_rental_days: 1,
        color: 'White',
        license_plate: 'CA123GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.8,
        total_bookings: 24,
        total_earnings: 20400,
        images: [
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[2].id, // Mike Wilson
        make: 'BMW',
        model: 'X3',
        year: 2021,
        pricePerDay: 1200,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
        city: 'Johannesburg',
        status: 'approved',
        title: '2021 BMW X3 SUV',
        description: 'Luxury SUV with premium features and excellent fuel efficiency. Perfect for business trips and family outings.',
        location: '456 Oak Avenue, Johannesburg',
        features: ['Leather Seats', 'Sunroof', 'Navigation', 'Backup Camera', 'Heated Seats'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 25000,
        vehicle_type: 'suv',
        category: 'luxury',
        price_per_week: 7000,
        price_per_month: 18000,
        minimum_rental_days: 2,
        color: 'Black',
        license_plate: 'JHB456GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.9,
        total_bookings: 18,
        total_earnings: 21600,
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[1].id, // Sarah Johnson
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        pricePerDay: 450,
        image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
        city: 'Cape Town',
        status: 'approved',
        title: '2020 Toyota Corolla - Clean & Reliable',
        description: 'A reliable and fuel-efficient Toyota Corolla perfect for city driving.',
        location: '789 Beach Road, Cape Town',
        features: ['AC', 'Bluetooth', 'USB Port', 'Airbags'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 45000,
        vehicle_type: 'car',
        category: 'compact',
        price_per_week: 2800,
        price_per_month: 10000,
        minimum_rental_days: 1,
        color: 'Silver',
        license_plate: 'CA789GP',
        approval_status: 'approved',
        is_featured: false,
        rating: 4.5,
        total_bookings: 12,
        total_earnings: 5400,
        images: [
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[2].id, // Mike Wilson
        make: 'Ford',
        model: 'Ranger',
        year: 2021,
        pricePerDay: 750,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        city: 'Durban',
        status: 'approved',
        title: '2021 Ford Ranger - Work and Adventure Ready',
        description: 'Rugged Ford Ranger perfect for work or outdoor adventures. 4x4 capability and excellent fuel economy.',
        location: '321 Umhlanga Drive, Durban',
        features: ['Air Conditioning', 'Bluetooth', '4x4', 'Towing Package'],
        fuelType: 'diesel',
        transmission: 'manual',
        seats: 5,
        mileage: 30000,
        vehicle_type: 'bakkie',
        category: 'premium',
        price_per_week: 4500,
        price_per_month: 12000,
        minimum_rental_days: 1,
        color: 'Blue',
        license_plate: 'DBN321GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.7,
        total_bookings: 15,
        total_earnings: 11250,
        images: [
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[1].id, // Sarah Johnson
        make: 'Mercedes-Benz',
        model: 'C-Class',
        year: 2018,
        pricePerDay: 800,
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
        city: 'Cape Town',
        status: 'approved',
        title: '2018 Mercedes-Benz C-Class - Executive Comfort',
        description: 'Elegant Mercedes-Benz C-Class with premium features. Perfect for business meetings or special occasions.',
        location: '555 Waterfront, Cape Town',
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'GPS', 'Leather Seats', 'Sunroof'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 60000,
        vehicle_type: 'car',
        category: 'luxury',
        price_per_week: 4800,
        price_per_month: 15000,
        minimum_rental_days: 2,
        color: 'Black',
        license_plate: 'CA555GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.6,
        total_bookings: 20,
        total_earnings: 16000,
        images: [
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[2].id, // Mike Wilson
        make: 'Volkswagen',
        model: 'Polo',
        year: 2020,
        pricePerDay: 300,
        image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
        city: 'Pretoria',
        status: 'approved',
        title: '2020 Volkswagen Polo - Compact and Efficient',
        description: 'Compact and fuel-efficient VW Polo. Great for city driving and short trips around Pretoria.',
        location: '888 Church Square, Pretoria',
        features: ['Air Conditioning', 'Bluetooth', 'USB Port'],
        fuelType: 'petrol',
        transmission: 'manual',
        seats: 5,
        mileage: 35000,
        vehicle_type: 'car',
        category: 'economy',
        price_per_week: 1800,
        price_per_month: 6000,
        minimum_rental_days: 1,
        color: 'Red',
        license_plate: 'PTA888GP',
        approval_status: 'approved',
        is_featured: false,
        rating: 4.3,
        total_bookings: 8,
        total_earnings: 2400,
        images: [
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
        ]
      }
    ];

    const listings = [];
    for (const listingData of demoListings) {
      const listing = await Listing.create(listingData);
      listings.push(listing);
      console.log(`✅ Created listing: ${listing.title}`);
    }

    // Create demo bookings
    const demoBookings = [
      {
        renter_id: users[0].id, // John Doe
        listing_id: listings[0].id, // Toyota Hilux
        start_date: new Date('2024-12-15'),
        end_date: new Date('2024-12-17'),
        total_days: 2,
        price_per_day: 850,
        subtotal: 1700,
        service_fee: 85,
        insurance_fee: 50,
        total_amount: 1835,
        status: 'confirmed',
        payment_status: 'paid',
        pickup_location: '123 Main Street, Cape Town',
        return_location: '123 Main Street, Cape Town',
        special_requests: 'Please ensure the vehicle is clean and has a full tank of fuel.'
      }
    ];

    const bookings = [];
    for (const bookingData of demoBookings) {
      const booking = await Booking.create(bookingData);
      bookings.push(booking);
      console.log(`✅ Created booking: ${booking.id}`);
    }

    console.log('\n🎉 Demo data seeded successfully!');
    console.log('\nDemo accounts created:');
    console.log('Renter: john.doe@example.com / Password123!');
    console.log('Host 1: sarah.johnson@example.com / Password123!');
    console.log('Host 2: mike.wilson@example.com / Password123!');
    console.log(`\n📊 Created ${listings.length} vehicle listings:`);
    listings.forEach((listing, index) => {
      console.log(`${index + 1}. ${listing.title} - R${listing.pricePerDay}/day`);
    });

  } catch (error) {
    console.error('❌ Failed to seed demo data:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  seedDemoData()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { seedDemoData };
