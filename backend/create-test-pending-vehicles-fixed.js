#!/usr/bin/env node

const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

// Database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'dev.db'),
  logging: false
});

// Define models matching the actual schema
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'USER'
  },
  firebase_uid: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const Listing = sequelize.define('Listing', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  host_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price_per_day: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehicle_type: {
    type: DataTypes.ENUM('sedan', 'hatchback', 'suv', 'bakkie', 'coupe', 'convertible'),
    allowNull: false
  },
  fuel_type: {
    type: DataTypes.ENUM('petrol', 'diesel', 'hybrid', 'electric'),
    allowNull: false
  },
  transmission: {
    type: DataTypes.ENUM('manual', 'automatic'),
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 5
  },
  features: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  images: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  approved: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  view_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  rating_average: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: false,
    defaultValue: 0
  },
  rating_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'listings',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// Define associations
Listing.belongsTo(User, { as: 'host', foreignKey: 'host_id' });
User.hasMany(Listing, { as: 'listings', foreignKey: 'host_id' });

async function createTestData() {
  try {
    console.log('🔧 Creating test pending vehicles with correct schema...');
    
    // Test if database is connected
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');
    
    // Sync models
    await sequelize.sync({ force: false });
    console.log('✅ Database synchronized');
    
    // Create test users
    const testUsers = await User.bulkCreate([
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        role: 'USER',
        firebase_uid: 'test-uid-1'
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        role: 'USER',
        firebase_uid: 'test-uid-2'
      }
    ], { ignoreDuplicates: true });
    
    console.log('✅ Test users created');
    
    // Create test pending vehicles with correct schema
    const testVehicles = await Listing.bulkCreate([
      {
        title: '2020 Toyota Camry - Excellent Condition',
        description: 'Well-maintained Toyota Camry with low mileage. Perfect for city driving.',
        price_per_day: 45.00,
        location: 'Cape Town, South Africa',
        vehicle_type: 'sedan',
        fuel_type: 'petrol',
        transmission: 'automatic',
        year: 2020,
        mileage: 50000,
        seats: 5,
        features: ['Air Conditioning', 'Bluetooth', 'GPS'],
        images: ['https://example.com/camry1.jpg', 'https://example.com/camry2.jpg'],
        is_available: true,
        approved: false, // This is the key field for pending vehicles
        host_id: testUsers[0].id
      },
      {
        title: '2019 BMW 3 Series - Luxury Sedan',
        description: 'Premium BMW 3 Series with leather seats and premium sound system.',
        price_per_day: 85.00,
        location: 'Johannesburg, South Africa',
        vehicle_type: 'sedan',
        fuel_type: 'petrol',
        transmission: 'automatic',
        year: 2019,
        mileage: 75000,
        seats: 5,
        features: ['Leather Seats', 'Premium Sound', 'Navigation'],
        images: ['https://example.com/bmw1.jpg', 'https://example.com/bmw2.jpg'],
        is_available: true,
        approved: false, // This is the key field for pending vehicles
        host_id: testUsers[1].id
      },
      {
        title: '2021 Honda Civic - Fuel Efficient',
        description: 'Eco-friendly Honda Civic with excellent fuel economy.',
        price_per_day: 35.00,
        location: 'Durban, South Africa',
        vehicle_type: 'sedan',
        fuel_type: 'petrol',
        transmission: 'manual',
        year: 2021,
        mileage: 30000,
        seats: 5,
        features: ['Fuel Efficient', 'Air Conditioning', 'Bluetooth'],
        images: ['https://example.com/civic1.jpg'],
        is_available: true,
        approved: false, // This is the key field for pending vehicles
        host_id: testUsers[0].id
      }
    ], { ignoreDuplicates: true });
    
    console.log('✅ Test pending vehicles created');
    
    // Verify the data
    const pendingCount = await Listing.count({
      where: { 
        approved: false,
        is_available: true
      }
    });
    
    console.log(`📊 Total pending vehicles: ${pendingCount}`);
    
    // Test the API endpoint
    console.log('\n🧪 Testing API endpoint...');
    const response = await fetch('http://localhost:5001/api/admin/vehicles/pending');
    const data = await response.json();
    
    if (data.success) {
      console.log(`✅ API endpoint working - Found ${data.vehicles.length} pending vehicles`);
      if (data.vehicles.length > 0) {
        console.log('📋 Sample vehicle:', {
          id: data.vehicles[0].id,
          title: data.vehicles[0].title,
          approved: data.vehicles[0].approved,
          is_available: data.vehicles[0].is_available
        });
      }
    } else {
      console.log('❌ API endpoint failed:', data.error);
    }
    
    console.log('\n🎉 Test data creation completed successfully!');
    
  } catch (error) {
    console.error('❌ Error creating test data:', error);
  } finally {
    await sequelize.close();
  }
}

// Run the script
createTestData();

