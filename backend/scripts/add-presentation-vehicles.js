#!/usr/bin/env node

const { User, Listing } = require('../dist/models');

async function addMoreVehicles() {
  try {
    console.log('🚗 Adding more vehicles for presentation...');

    // Get existing users to use as hosts
    const users = await User.findAll({ where: { role: 'host' } });
    
    if (users.length === 0) {
      console.log('❌ No host users found. Please create host users first.');
      return;
    }

    console.log(`Found ${users.length} host users`);

    // Additional vehicles for presentation
    const additionalVehicles = [
      {
        hostId: users[0].id,
        make: 'BMW',
        model: 'X5',
        year: 2022,
        pricePerDay: 1500,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
        city: 'Cape Town',
        status: 'approved',
        title: '2022 BMW X5 - Luxury SUV',
        description: 'Premium BMW X5 with all luxury features. Perfect for business trips and family outings.',
        location: '456 Sea Point, Cape Town',
        features: ['Leather Seats', 'Sunroof', 'Navigation', 'Backup Camera', 'Heated Seats', 'Premium Sound'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 7,
        mileage: 12000,
        vehicle_type: 'suv',
        category: 'luxury',
        price_per_week: 9000,
        price_per_month: 25000,
        minimum_rental_days: 2,
        color: 'White',
        license_plate: 'CA456GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.9,
        total_bookings: 5,
        total_earnings: 7500,
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[users.length > 1 ? 1 : 0].id,
        make: 'Audi',
        model: 'A4',
        year: 2021,
        pricePerDay: 900,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        city: 'Johannesburg',
        status: 'approved',
        title: '2021 Audi A4 - Executive Sedan',
        description: 'Sophisticated Audi A4 with premium interior and advanced technology features.',
        location: '789 Sandton, Johannesburg',
        features: ['Leather Seats', 'Navigation', 'Backup Camera', 'Premium Sound', 'Climate Control'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 18000,
        vehicle_type: 'car',
        category: 'luxury',
        price_per_week: 5500,
        price_per_month: 18000,
        minimum_rental_days: 1,
        color: 'Black',
        license_plate: 'JHB789GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.7,
        total_bookings: 8,
        total_earnings: 7200,
        images: [
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[0].id,
        make: 'Hyundai',
        model: 'i20',
        year: 2023,
        pricePerDay: 350,
        image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
        city: 'Durban',
        status: 'approved',
        title: '2023 Hyundai i20 - Compact & Modern',
        description: 'Modern and efficient Hyundai i20 perfect for city driving and short trips.',
        location: '123 Umhlanga, Durban',
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'Touchscreen'],
        fuelType: 'petrol',
        transmission: 'manual',
        seats: 5,
        mileage: 5000,
        vehicle_type: 'car',
        category: 'economy',
        price_per_week: 2100,
        price_per_month: 7000,
        minimum_rental_days: 1,
        color: 'Blue',
        license_plate: 'DBN123GP',
        approval_status: 'approved',
        is_featured: false,
        rating: 4.4,
        total_bookings: 3,
        total_earnings: 1050,
        images: [
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[users.length > 1 ? 1 : 0].id,
        make: 'Nissan',
        model: 'Navara',
        year: 2020,
        pricePerDay: 650,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
        city: 'Port Elizabeth',
        status: 'approved',
        title: '2020 Nissan Navara - Adventure Ready',
        description: 'Robust Nissan Navara perfect for outdoor adventures and work projects.',
        location: '456 Summerstrand, Port Elizabeth',
        features: ['4x4', 'Air Conditioning', 'Bluetooth', 'Towing Package', 'Off-road Package'],
        fuelType: 'diesel',
        transmission: 'manual',
        seats: 5,
        mileage: 40000,
        vehicle_type: 'bakkie',
        category: 'premium',
        price_per_week: 4000,
        price_per_month: 12000,
        minimum_rental_days: 1,
        color: 'Silver',
        license_plate: 'PE456GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.6,
        total_bookings: 12,
        total_earnings: 7800,
        images: [
          'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[0].id,
        make: 'Kia',
        model: 'Sorento',
        year: 2021,
        pricePerDay: 800,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
        city: 'Pretoria',
        status: 'approved',
        title: '2021 Kia Sorento - Family SUV',
        description: 'Spacious Kia Sorento perfect for family trips with excellent fuel efficiency.',
        location: '789 Hatfield, Pretoria',
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'Third Row Seating', 'Backup Camera'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 7,
        mileage: 25000,
        vehicle_type: 'suv',
        category: 'premium',
        price_per_week: 5000,
        price_per_month: 15000,
        minimum_rental_days: 1,
        color: 'Grey',
        license_plate: 'PTA789GP',
        approval_status: 'approved',
        is_featured: false,
        rating: 4.5,
        total_bookings: 6,
        total_earnings: 4800,
        images: [
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'
        ]
      },
      {
        hostId: users[users.length > 1 ? 1 : 0].id,
        make: 'Mazda',
        model: 'CX-5',
        year: 2022,
        pricePerDay: 700,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
        city: 'Cape Town',
        status: 'approved',
        title: '2022 Mazda CX-5 - Stylish SUV',
        description: 'Stylish Mazda CX-5 with excellent handling and premium interior features.',
        location: '321 Camps Bay, Cape Town',
        features: ['Air Conditioning', 'Bluetooth', 'USB Port', 'Sunroof', 'Leather Seats'],
        fuelType: 'petrol',
        transmission: 'automatic',
        seats: 5,
        mileage: 15000,
        vehicle_type: 'suv',
        category: 'premium',
        price_per_week: 4200,
        price_per_month: 13000,
        minimum_rental_days: 1,
        color: 'Red',
        license_plate: 'CA321GP',
        approval_status: 'approved',
        is_featured: true,
        rating: 4.8,
        total_bookings: 9,
        total_earnings: 6300,
        images: [
          'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
        ]
      }
    ];

    const newListings = [];
    for (const vehicleData of additionalVehicles) {
      try {
        const listing = await Listing.create(vehicleData);
        newListings.push(listing);
        console.log(`✅ Created listing: ${listing.title} - R${listing.pricePerDay}/day`);
      } catch (error) {
        console.log(`⚠️  Skipped duplicate: ${vehicleData.title}`);
      }
    }

    console.log('\n🎉 Additional vehicles added successfully!');
    console.log(`📊 Added ${newListings.length} new vehicle listings`);
    
    // Show all available vehicles
    const allListings = await Listing.findAll({ where: { status: 'approved' } });
    console.log(`\n🚗 Total vehicles available for booking: ${allListings.length}`);
    console.log('\nAvailable vehicles:');
    allListings.forEach((listing, index) => {
      console.log(`${index + 1}. ${listing.title} (${listing.make} ${listing.model}) - R${listing.pricePerDay}/day - ${listing.city}`);
    });

  } catch (error) {
    console.error('❌ Failed to add vehicles:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  addMoreVehicles()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { addMoreVehicles };
