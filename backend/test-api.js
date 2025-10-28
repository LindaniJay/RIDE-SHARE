const axios = require('axios');

async function testAPI() {
  try {
    console.log('🧪 Testing API...');
    const response = await axios.get('http://localhost:5001/api/vehicles');
    console.log('✅ API Response:', response.data);
    console.log('📊 Vehicles count:', response.data.vehicles?.length || 0);
    
    if (response.data.vehicles && response.data.vehicles.length > 0) {
      console.log('🚗 First vehicle:', response.data.vehicles[0].make, response.data.vehicles[0].model);
    }
  } catch (error) {
    console.error('❌ API Error:', error.message);
  }
}

testAPI();