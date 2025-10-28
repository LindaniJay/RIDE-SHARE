#!/usr/bin/env node

const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

// Database connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'dev.db'),
  logging: false
});

// Define models
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
});

const Listing = sequelize.define('Listing', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price_per_day: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  approval_status: {
    type: DataTypes.STRING,
    defaultValue: 'pending'
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true
  },
  host_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  }
});

// Define associations
Listing.belongsTo(User, { as: 'host', foreignKey: 'host_id' });
User.hasMany(Listing, { as: 'listings', foreignKey: 'host_id' });

async function createTestData() {
  try {
    console.log('🔧 Creating test pending vehicles...');
    
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
    
    // Create test pending vehicles
    const testVehicles = await Listing.bulkCreate([
      {
        title: '2020 Toyota Camry - Excellent Condition',
        description: 'Well-maintained Toyota Camry with low mileage. Perfect for city driving.',
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        price_per_day: 45.00,
        location: 'Cape Town, South Africa',
        status: 'pending',
        approval_status: 'pending',
        images: ['https://example.com/camry1.jpg', 'https://example.com/camry2.jpg'],
        host_id: testUsers[0].id
      },
      {
        title: '2019 BMW 3 Series - Luxury Sedan',
        description: 'Premium BMW 3 Series with leather seats and premium sound system.',
        make: 'BMW',
        model: '3 Series',
        year: 2019,
        price_per_day: 85.00,
        location: 'Johannesburg, South Africa',
        status: 'pending',
        approval_status: 'pending',
        images: ['https://example.com/bmw1.jpg', 'https://example.com/bmw2.jpg'],
        host_id: testUsers[1].id
      },
      {
        title: '2021 Honda Civic - Fuel Efficient',
        description: 'Eco-friendly Honda Civic with excellent fuel economy.',
        make: 'Honda',
        model: 'Civic',
        year: 2021,
        price_per_day: 35.00,
        location: 'Durban, South Africa',
        status: 'pending',
        approval_status: 'pending',
        images: ['https://example.com/civic1.jpg'],
        host_id: testUsers[0].id
      }
    ], { ignoreDuplicates: true });
    
    console.log('✅ Test pending vehicles created');
    
    // Verify the data
    const pendingCount = await Listing.count({
      where: { status: 'pending' }
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
          make: data.vehicles[0].make,
          model: data.vehicles[0].model
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

