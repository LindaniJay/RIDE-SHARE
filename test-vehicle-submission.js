// Test script for vehicle submission
const FormData = require('form-data');
const fetch = require('node-fetch');

async function testVehicleSubmission() {
  try {
    const formData = new FormData();
    
    // Add required fields
    formData.append('title', 'Test Vehicle 2023');
    formData.append('description', 'A test vehicle for submission');
    formData.append('make', 'Toyota');
    formData.append('model', 'Corolla');
    formData.append('year', '2023');
    formData.append('vehicle_type', 'car');
    formData.append('category', 'economy');
    formData.append('price_per_day', '500');
    
    // Add location
    const location = {
      city: 'Cape Town',
      province: 'Western Cape'
    };
    formData.append('location', JSON.stringify(location));
    
    // Add features
    formData.append('features', JSON.stringify(['aircon', 'bluetooth']));
    
    const response = await fetch('http://localhost:3005/api/vehicles', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer test-token' // This will fail auth but we can see the request structure
      },
      body: formData
    });
    
    console.log('Response status:', response.status);
    const result = await response.text();
    console.log('Response:', result);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testVehicleSubmission();
