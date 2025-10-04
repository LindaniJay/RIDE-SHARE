const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testAPI() {
  try {
    console.log('Testing API endpoints...');
    
    // Test health endpoint
    console.log('\n1. Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:5001/api/health');
    const healthData = await healthResponse.json();
    console.log('Health:', healthData);
    
    // Test vehicles endpoint
    console.log('\n2. Testing vehicles endpoint...');
    const vehiclesResponse = await fetch('http://localhost:5001/api/vehicles');
    const vehiclesData = await vehiclesResponse.json();
    console.log('Vehicles:', vehiclesData);
    
    // Test auth endpoint
    console.log('\n3. Testing auth endpoint...');
    const authResponse = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@rentza.co.za',
        password: 'password123'
      })
    });
    const authData = await authResponse.json();
    console.log('Auth:', authData);
    
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testAPI();
