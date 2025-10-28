#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock vehicles data for presentation
const mockVehicles = [
  {
    id: 1,
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
    price_per_month: 5000,
    is_available: true,
    approved: true
  },
  {
    id: 2,
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
    price_per_month: 9000,
    is_available: true,
    approved: true
  },
  {
    id: 3,
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
    price_per_month: 6500,
    is_available: true,
    approved: true
  },
  {
    id: 4,
    make: 'Audi',
    model: 'A4',
    year: 2020,
    pricePerDay: 380,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    city: 'Cape Town',
    status: 'approved',
    title: '2020 Audi A4 - Executive Sedan',
    description: 'Premium Audi A4 with executive features and smooth performance.',
    location: JSON.stringify({
      city: 'Cape Town',
      province: 'Western Cape',
      address: '789 Sea Point, Cape Town',
      coordinates: { lat: -33.9249, lng: 18.4241 }
    }),
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop'
    ]),
    features: JSON.stringify(['Leather Seats', 'Navigation', 'Premium Sound', 'Climate Control']),
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 30000,
    vehicle_type: 'car',
    category: 'luxury',
    minimum_rental_days: 1,
    color: 'Silver',
    license_plate: 'CA456GP',
    approval_status: 'approved',
    is_featured: false,
    rating: 4.6,
    total_bookings: 8,
    total_earnings: 3040,
    price_per_week: 2200,
    price_per_month: 7500,
    is_available: true,
    approved: true
  },
  {
    id: 5,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2019,
    pricePerDay: 420,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
    city: 'Johannesburg',
    status: 'approved',
    title: '2019 Mercedes-Benz C-Class - Luxury Sedan',
    description: 'Elegant Mercedes-Benz C-Class with premium features and comfort.',
    location: JSON.stringify({
      city: 'Johannesburg',
      province: 'Gauteng',
      address: '321 Sandton, Johannesburg',
      coordinates: { lat: -26.2041, lng: 28.0473 }
    }),
    images: JSON.stringify([
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
    ]),
    features: JSON.stringify(['Leather Seats', 'Sunroof', 'Navigation', 'Premium Sound']),
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 35000,
    vehicle_type: 'car',
    category: 'luxury',
    minimum_rental_days: 2,
    color: 'Black',
    license_plate: 'JHB789GP',
    approval_status: 'approved',
    is_featured: true,
    rating: 4.7,
    total_bookings: 22,
    total_earnings: 9240,
    price_per_week: 2500,
    price_per_month: 8500,
    is_available: true,
    approved: true
  }
];

console.log('🚗 Mock vehicles loaded:', mockVehicles.length);
console.log('📋 First vehicle:', mockVehicles[0] ? `${mockVehicles[0].make} ${mockVehicles[0].model}` : 'None');

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

app.get('/api/vehicles', (req, res) => {
  try {
    const { status, limit, city, type, minPrice, maxPrice } = req.query;
    
    console.log('📡 API Request received:', req.query);
    console.log('🚗 Total mock vehicles:', mockVehicles.length);
    
    let filteredVehicles = [...mockVehicles];
    
    // Filter by status
    if (status) {
      filteredVehicles = filteredVehicles.filter(vehicle => vehicle.status === status);
    }
    
    // Filter by city
    if (city) {
      filteredVehicles = filteredVehicles.filter(vehicle => 
        vehicle.city.toLowerCase().includes(city.toLowerCase())
      );
    }
    
    // Filter by type
    if (type) {
      filteredVehicles = filteredVehicles.filter(vehicle => 
        vehicle.vehicle_type === type
      );
    }
    
    // Filter by price range
    if (minPrice) {
      filteredVehicles = filteredVehicles.filter(vehicle => 
        vehicle.pricePerDay >= parseInt(minPrice)
      );
    }
    
    if (maxPrice) {
      filteredVehicles = filteredVehicles.filter(vehicle => 
        vehicle.pricePerDay <= parseInt(maxPrice)
      );
    }
    
    // Apply limit
    if (limit) {
      filteredVehicles = filteredVehicles.slice(0, parseInt(limit));
    }
    
    console.log('🔍 Filtered vehicles count:', filteredVehicles.length);
    console.log('📋 First vehicle:', filteredVehicles[0] ? `${filteredVehicles[0].make} ${filteredVehicles[0].model}` : 'None');
    
    res.json({
      success: true,
      vehicles: filteredVehicles,
      total: filteredVehicles.length,
      message: 'Vehicles retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

app.get('/api/vehicles/:id', (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = mockVehicles.find(v => v.id === parseInt(id));
    
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found'
      });
    }
    
    res.json({
      success: true,
      data: vehicle,
      message: 'Vehicle retrieved successfully'
    });
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Mock booking endpoint
app.post('/api/bookings', (req, res) => {
  try {
    const { vehicleId, startDate, endDate, renterId } = req.body;
    
    // Validate required fields
    if (!vehicleId || !startDate || !endDate) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: vehicleId, startDate, endDate'
      });
    }
    
    // Find the vehicle
    const vehicle = mockVehicles.find(v => v.id === parseInt(vehicleId));
    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: 'Vehicle not found'
      });
    }
    
    // Calculate booking details
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const totalPrice = days * vehicle.pricePerDay;
    
    // Create mock booking
    const booking = {
      id: Math.floor(Math.random() * 10000),
      bookingId: `BK${Date.now()}`,
      vehicleId: parseInt(vehicleId),
      renterId: renterId || 'mock-renter-1',
      startDate,
      endDate,
      totalPrice,
      status: 'confirmed',
      paymentStatus: 'pending',
      createdAt: new Date().toISOString(),
      vehicle: vehicle
    };
    
    res.json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock API Server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🚗 Vehicles API: http://localhost:${PORT}/api/vehicles`);
  console.log(`📅 Bookings API: http://localhost:${PORT}/api/bookings`);
  console.log(`\n🎯 Available vehicles for presentation:`);
  mockVehicles.forEach(vehicle => {
    console.log(`   • ${vehicle.year} ${vehicle.make} ${vehicle.model} - R${vehicle.pricePerDay}/day (${vehicle.city})`);
  });
});

module.exports = app;
