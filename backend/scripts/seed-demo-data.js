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

    // Create demo listings
    const demoListings = [
      {
        host_id: users[1].id, // Sarah Johnson
        title: '2022 Toyota Hilux Double Cab',
        description: 'Reliable and powerful bakkie perfect for work and outdoor adventures. Well-maintained with full service history.',
        make: 'Toyota',
        model: 'Hilux',
        year: 2022,
        vehicle_type: 'bakkie',
        category: 'premium',
        price_per_day: 850,
        price_per_week: 5000,
        price_per_month: 15000,
        location: {
          address: '123 Main Street',
          city: 'Cape Town',
          province: 'Western Cape',
          postal_code: '8001',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        },
        images: [
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ],
        features: ['4x4', 'Air Conditioning', 'Bluetooth', 'GPS', 'Backup Camera'],
        specifications: {
          engine: '2.4L Turbo Diesel',
          transmission: 'Automatic',
          fuel_capacity: '80L',
          towing_capacity: '3500kg'
        },
        minimum_rental_days: 1,
        fuel_type: 'diesel',
        transmission: 'automatic',
        seats: 5,
        mileage: 15000,
        color: 'White',
        license_plate: 'CA123GP',
        status: 'approved',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.8,
        total_bookings: 24,
        total_earnings: 20400
      },
      {
        host_id: users[2].id, // Mike Wilson
        title: '2021 BMW X3 SUV',
        description: 'Luxury SUV with premium features and excellent fuel efficiency. Perfect for business trips and family outings.',
        make: 'BMW',
        model: 'X3',
        year: 2021,
        vehicle_type: 'suv',
        category: 'luxury',
        price_per_day: 1200,
        price_per_week: 7000,
        price_per_month: 18000,
        location: {
          address: '456 Oak Avenue',
          city: 'Johannesburg',
          province: 'Gauteng',
          postal_code: '2000',
          coordinates: { lat: -26.2041, lng: 28.0473 }
        },
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'
        ],
        features: ['Leather Seats', 'Sunroof', 'Navigation', 'Backup Camera', 'Heated Seats'],
        specifications: {
          engine: '2.0L Turbo Petrol',
          transmission: 'Automatic',
          fuel_capacity: '65L',
          towing_capacity: '2000kg'
        },
        minimum_rental_days: 2,
        fuel_type: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 25000,
        color: 'Black',
        license_plate: 'JHB456GP',
        status: 'approved',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.9,
        total_bookings: 18,
        total_earnings: 21600
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
        pickup_location: {
          address: '123 Main Street',
          city: 'Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        },
        return_location: {
          address: '123 Main Street',
          city: 'Cape Town',
          coordinates: { lat: -33.9249, lng: 18.4241 }
        },
        special_requests: 'Please ensure the vehicle is clean and has a full tank of fuel.'
      }
    ];

    const bookings = [];
    for (const bookingData of demoBookings) {
      const booking = await Booking.create(bookingData);
      bookings.push(booking);
      console.log(`✅ Created booking: ${booking.id}`);
    }

    // Create demo payments
    const demoPayments = [
      {
        booking_id: bookings[0].id,
        renter_id: users[0].id,
        amount: 1835,
        currency: 'ZAR',
        payment_method: 'stripe',
        payment_provider: 'stripe',
        payment_intent_id: 'pi_demo_123456789',
        transaction_id: 'txn_demo_123456789',
        status: 'completed',
        processed_at: new Date()
      }
    ];

    for (const paymentData of demoPayments) {
      const payment = await Payment.create(paymentData);
      console.log(`✅ Created payment: ${payment.id}`);
    }

    // Create demo reviews
    const demoReviews = [
      {
        booking_id: bookings[0].id,
        reviewer_id: users[0].id, // John Doe
        reviewee_id: users[1].id, // Sarah Johnson
        listing_id: listings[0].id,
        rating: 5,
        title: 'Excellent vehicle and service!',
        comment: 'The Toyota Hilux was in perfect condition and Sarah was very helpful throughout the rental period. Highly recommended!',
        review_type: 'renter_to_host',
        is_public: true,
        is_verified: true
      },
      {
        booking_id: bookings[0].id,
        reviewer_id: users[0].id, // John Doe
        reviewee_id: users[1].id, // Sarah Johnson
        listing_id: listings[0].id,
        rating: 5,
        title: 'Great bakkie for work!',
        comment: 'Perfect for our construction project. Reliable, powerful, and well-maintained.',
        review_type: 'renter_to_vehicle',
        is_public: true,
        is_verified: true
      }
    ];

    for (const reviewData of demoReviews) {
      const review = await Review.create(reviewData);
      console.log(`✅ Created review: ${review.id}`);
    }

    console.log('\n🎉 Demo data seeded successfully!');
    console.log('\nDemo accounts created:');
    console.log('Renter: john.doe@example.com / Password123!');
    console.log('Host 1: sarah.johnson@example.com / Password123!');
    console.log('Host 2: mike.wilson@example.com / Password123!');
    console.log('Admin: admin@ridesharex.com / Admin123!');

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
