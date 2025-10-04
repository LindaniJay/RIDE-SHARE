#!/usr/bin/env node

/**
 * Vehicle Approval Workflow Test
 * Tests the complete flow: Host lists vehicle → Admin approves → Vehicle appears in search
 */

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:5001';
const API_URL = `${BASE_URL}/api`;

// Test configuration
const TEST_CONFIG = {
  host: {
    email: 'testhost@example.com',
    password: 'TestHost123!',
    firstName: 'Test',
    lastName: 'Host'
  },
  admin: {
    email: 'admin@ridesharex.com',
    password: 'Admin123!'
  },
  vehicle: {
    title: 'Test Vehicle for Approval',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    vehicle_type: 'car',
    category: 'economy',
    price_per_day: 450,
    price_per_week: 2500,
    price_per_month: 6500,
    location: {
      city: 'Cape Town',
      province: 'Western Cape',
      latitude: -33.9249,
      longitude: 18.4241
    },
    features: ['Air conditioning', 'Bluetooth', 'GPS'],
    description: 'A reliable and fuel-efficient vehicle perfect for city driving.',
    minimum_rental_days: 1,
    maximum_rental_days: 30,
    fuel_type: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 50000,
    color: 'Silver',
    license_plate: 'CA123GP'
  }
};

class VehicleApprovalWorkflowTest {
  constructor() {
    this.hostToken = null;
    this.adminToken = null;
    this.vehicleId = null;
    this.testResults = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async makeRequest(method, url, data = null, headers = {}) {
    try {
      const config = {
        method,
        url: `${API_URL}${url}`,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      };

      if (data) {
        config.data = data;
      }

      const response = await axios(config);
      return response.data;
    } catch (error) {
      throw new Error(`Request failed: ${error.response?.data?.error || error.message}`);
    }
  }

  async authenticateHost() {
    this.log('Authenticating test host...');
    
    try {
      // Try to register host first
      try {
        await this.makeRequest('POST', '/auth/register', {
          email: TEST_CONFIG.host.email,
          password: TEST_CONFIG.host.password,
          firstName: TEST_CONFIG.host.firstName,
          lastName: TEST_CONFIG.host.lastName,
          role: 'host'
        });
        this.log('Host registered successfully', 'success');
      } catch (error) {
        if (error.message.includes('already exists')) {
          this.log('Host already exists, proceeding with login');
        } else {
          throw error;
        }
      }

      // Login as host
      const loginResponse = await this.makeRequest('POST', '/auth/login', {
        email: TEST_CONFIG.host.email,
        password: TEST_CONFIG.host.password
      });

      this.hostToken = loginResponse.token;
      this.log('Host authenticated successfully', 'success');
      return true;
    } catch (error) {
      this.log(`Host authentication failed: ${error.message}`, 'error');
      return false;
    }
  }

  async authenticateAdmin() {
    this.log('Authenticating admin...');
    
    try {
      const loginResponse = await this.makeRequest('POST', '/auth/login', {
        email: TEST_CONFIG.admin.email,
        password: TEST_CONFIG.admin.password
      });

      this.adminToken = loginResponse.token;
      this.log('Admin authenticated successfully', 'success');
      return true;
    } catch (error) {
      this.log(`Admin authentication failed: ${error.message}`, 'error');
      return false;
    }
  }

  async createVehicleListing() {
    this.log('Creating vehicle listing...');
    
    try {
      // Create a test image file
      const testImagePath = path.join(__dirname, 'test-vehicle-image.jpg');
      if (!fs.existsSync(testImagePath)) {
        // Create a simple test image (1x1 pixel JPEG)
        const testImageBuffer = Buffer.from([
          0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
          0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
          0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08, 0x07, 0x07, 0x07, 0x09,
          0x09, 0x08, 0x0A, 0x0C, 0x14, 0x0D, 0x0C, 0x0B, 0x0B, 0x0C, 0x19, 0x12,
          0x13, 0x0F, 0x14, 0x1D, 0x1A, 0x1F, 0x1E, 0x1D, 0x1A, 0x1C, 0x1C, 0x20,
          0x24, 0x2E, 0x27, 0x20, 0x22, 0x2C, 0x23, 0x1C, 0x1C, 0x28, 0x37, 0x29,
          0x2C, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1F, 0x27, 0x39, 0x3D, 0x38, 0x32,
          0x3C, 0x2E, 0x33, 0x34, 0x32, 0xFF, 0xC0, 0x00, 0x11, 0x08, 0x00, 0x01,
          0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01,
          0xFF, 0xC4, 0x00, 0x14, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0xFF, 0xC4,
          0x00, 0x14, 0x10, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xDA, 0x00, 0x0C,
          0x03, 0x01, 0x00, 0x02, 0x11, 0x03, 0x11, 0x00, 0x3F, 0x00, 0x00, 0xFF, 0xD9
        ]);
        fs.writeFileSync(testImagePath, testImageBuffer);
      }

      // Create FormData for file upload
      const formData = new FormData();
      formData.append('title', TEST_CONFIG.vehicle.title);
      formData.append('description', TEST_CONFIG.vehicle.description);
      formData.append('make', TEST_CONFIG.vehicle.make);
      formData.append('model', TEST_CONFIG.vehicle.model);
      formData.append('year', TEST_CONFIG.vehicle.year.toString());
      formData.append('vehicle_type', TEST_CONFIG.vehicle.vehicle_type);
      formData.append('category', TEST_CONFIG.vehicle.category);
      formData.append('price_per_day', TEST_CONFIG.vehicle.price_per_day.toString());
      formData.append('price_per_week', TEST_CONFIG.vehicle.price_per_week.toString());
      formData.append('price_per_month', TEST_CONFIG.vehicle.price_per_month.toString());
      formData.append('location', JSON.stringify(TEST_CONFIG.vehicle.location));
      formData.append('features', JSON.stringify(TEST_CONFIG.vehicle.features));
      formData.append('minimum_rental_days', TEST_CONFIG.vehicle.minimum_rental_days.toString());
      formData.append('maximum_rental_days', TEST_CONFIG.vehicle.maximum_rental_days.toString());
      formData.append('fuel_type', TEST_CONFIG.vehicle.fuel_type);
      formData.append('transmission', TEST_CONFIG.vehicle.transmission);
      formData.append('seats', TEST_CONFIG.vehicle.seats.toString());
      formData.append('mileage', TEST_CONFIG.vehicle.mileage.toString());
      formData.append('color', TEST_CONFIG.vehicle.color);
      formData.append('license_plate', TEST_CONFIG.vehicle.license_plate);
      formData.append('images', fs.createReadStream(testImagePath));

      const response = await axios.post(`${API_URL}/vehicles`, formData, {
        headers: {
          ...formData.getHeaders(),
          'Authorization': `Bearer ${this.hostToken}`
        }
      });

      if (response.data.success) {
        this.vehicleId = response.data.vehicle.id;
        this.log(`Vehicle listing created successfully with ID: ${this.vehicleId}`, 'success');
        this.log(`Status: ${response.data.vehicle.status}`, 'info');
        return true;
      } else {
        throw new Error(response.data.error || 'Failed to create vehicle listing');
      }
    } catch (error) {
      this.log(`Vehicle listing creation failed: ${error.message}`, 'error');
      return false;
    }
  }

  async verifyVehicleNotInSearch() {
    this.log('Verifying vehicle is NOT visible in search (should be pending)...');
    
    try {
      const response = await this.makeRequest('GET', '/vehicles');
      
      if (response.success) {
        const vehicleInSearch = response.vehicles.find(v => v.id === this.vehicleId);
        if (!vehicleInSearch) {
          this.log('Vehicle correctly NOT visible in search (pending status)', 'success');
          return true;
        } else {
          this.log('ERROR: Vehicle is visible in search when it should be pending', 'error');
          return false;
        }
      } else {
        throw new Error(response.error || 'Failed to fetch vehicles');
      }
    } catch (error) {
      this.log(`Search verification failed: ${error.message}`, 'error');
      return false;
    }
  }

  async getPendingVehicles() {
    this.log('Fetching pending vehicles for admin review...');
    
    try {
      const response = await this.makeRequest('GET', '/vehicles/admin/pending', null, {
        'Authorization': `Bearer ${this.adminToken}`
      });

      if (response.success) {
        const pendingVehicle = response.vehicles.find(v => v.id === this.vehicleId);
        if (pendingVehicle) {
          this.log('Vehicle found in pending list', 'success');
          return true;
        } else {
          this.log('ERROR: Vehicle not found in pending list', 'error');
          return false;
        }
      } else {
        throw new Error(response.error || 'Failed to fetch pending vehicles');
      }
    } catch (error) {
      this.log(`Pending vehicles fetch failed: ${error.message}`, 'error');
      return false;
    }
  }

  async approveVehicle() {
    this.log('Approving vehicle...');
    
    try {
      const response = await this.makeRequest('PATCH', `/vehicles/${this.vehicleId}/status`, {
        status: 'approved'
      }, {
        'Authorization': `Bearer ${this.adminToken}`
      });

      if (response.success) {
        this.log('Vehicle approved successfully', 'success');
        return true;
      } else {
        throw new Error(response.error || 'Failed to approve vehicle');
      }
    } catch (error) {
      this.log(`Vehicle approval failed: ${error.message}`, 'error');
      return false;
    }
  }

  async verifyVehicleInSearch() {
    this.log('Verifying vehicle is NOW visible in search (should be approved)...');
    
    try {
      const response = await this.makeRequest('GET', '/vehicles');
      
      if (response.success) {
        const vehicleInSearch = response.vehicles.find(v => v.id === this.vehicleId);
        if (vehicleInSearch) {
          this.log('Vehicle correctly visible in search (approved status)', 'success');
          this.log(`Vehicle details: ${vehicleInSearch.title} - R${vehicleInSearch.price_per_day}/day`, 'info');
          return true;
        } else {
          this.log('ERROR: Vehicle is NOT visible in search after approval', 'error');
          return false;
        }
      } else {
        throw new Error(response.error || 'Failed to fetch vehicles');
      }
    } catch (error) {
      this.log(`Search verification failed: ${error.message}`, 'error');
      return false;
    }
  }

  async testRejectionWorkflow() {
    this.log('Testing vehicle rejection workflow...');
    
    try {
      // Create another test vehicle
      const rejectionTestVehicle = {
        ...TEST_CONFIG.vehicle,
        title: 'Test Vehicle for Rejection',
        make: 'Honda',
        model: 'Civic'
      };

      // Create the vehicle (simplified without file upload for rejection test)
      const createResponse = await this.makeRequest('POST', '/vehicles', rejectionTestVehicle, {
        'Authorization': `Bearer ${this.hostToken}`
      });

      if (createResponse.success) {
        const rejectionVehicleId = createResponse.vehicle.id;
        this.log(`Rejection test vehicle created: ${rejectionVehicleId}`, 'success');

        // Reject the vehicle
        const rejectResponse = await this.makeRequest('PATCH', `/vehicles/${rejectionVehicleId}/status`, {
          status: 'rejected',
          reason: 'Vehicle does not meet quality standards'
        }, {
          'Authorization': `Bearer ${this.adminToken}`
        });

        if (rejectResponse.success) {
          this.log('Vehicle rejected successfully', 'success');
          
          // Verify it's not in search
          const searchResponse = await this.makeRequest('GET', '/vehicles');
          const rejectedVehicleInSearch = searchResponse.vehicles.find(v => v.id === rejectionVehicleId);
          
          if (!rejectedVehicleInSearch) {
            this.log('Rejected vehicle correctly NOT visible in search', 'success');
            return true;
          } else {
            this.log('ERROR: Rejected vehicle is visible in search', 'error');
            return false;
          }
        } else {
          throw new Error(rejectResponse.error || 'Failed to reject vehicle');
        }
      } else {
        throw new Error(createResponse.error || 'Failed to create rejection test vehicle');
      }
    } catch (error) {
      this.log(`Rejection workflow test failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runCompleteTest() {
    this.log('🚀 Starting Vehicle Approval Workflow Test', 'info');
    this.log('=' * 60, 'info');

    const steps = [
      { name: 'Authenticate Host', fn: () => this.authenticateHost() },
      { name: 'Authenticate Admin', fn: () => this.authenticateAdmin() },
      { name: 'Create Vehicle Listing', fn: () => this.createVehicleListing() },
      { name: 'Verify Vehicle Not in Search (Pending)', fn: () => this.verifyVehicleNotInSearch() },
      { name: 'Get Pending Vehicles (Admin)', fn: () => this.getPendingVehicles() },
      { name: 'Approve Vehicle', fn: () => this.approveVehicle() },
      { name: 'Verify Vehicle in Search (Approved)', fn: () => this.verifyVehicleInSearch() },
      { name: 'Test Rejection Workflow', fn: () => this.testRejectionWorkflow() }
    ];

    let allPassed = true;

    for (const step of steps) {
      this.log(`\n📋 Step: ${step.name}`, 'info');
      const result = await step.fn();
      
      if (result) {
        this.log(`✅ ${step.name} - PASSED`, 'success');
        this.testResults.push({ step: step.name, status: 'PASSED' });
      } else {
        this.log(`❌ ${step.name} - FAILED`, 'error');
        this.testResults.push({ step: step.name, status: 'FAILED' });
        allPassed = false;
      }
    }

    this.log('\n' + '=' * 60, 'info');
    this.log('📊 TEST RESULTS SUMMARY', 'info');
    this.log('=' * 60, 'info');

    this.testResults.forEach(result => {
      const status = result.status === 'PASSED' ? '✅' : '❌';
      this.log(`${status} ${result.step}`, result.status === 'PASSED' ? 'success' : 'error');
    });

    if (allPassed) {
      this.log('\n🎉 ALL TESTS PASSED! Vehicle approval workflow is working correctly.', 'success');
    } else {
      this.log('\n💥 SOME TESTS FAILED! Please check the implementation.', 'error');
    }

    return allPassed;
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  const test = new VehicleApprovalWorkflowTest();
  test.runCompleteTest()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Test execution failed:', error);
      process.exit(1);
    });
}

module.exports = VehicleApprovalWorkflowTest;
