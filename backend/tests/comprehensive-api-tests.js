#!/usr/bin/env node

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => import('node-fetch').then(({default: fetch}) => fetch(...args)));
const fs = require('fs');
const path = require('path');

class ComprehensiveApiTester {
  constructor() {
    this.baseURL = process.env.API_BASE_URL || 'http://localhost:5001/api';
    this.authToken = null;
    this.testResults = [];
    this.testData = {
      users: [],
      vehicles: [],
      bookings: [],
      checkpoints: [],
      payments: []
    };
  }

  async runAllTests() {
    console.log('🧪 Starting Comprehensive API Tests...\n');
    
    try {
      // Test 1: Basic Connectivity
      await this.testBasicConnectivity();
      
      // Test 2: Authentication Flow
      await this.testAuthenticationFlow();
      
      // Test 3: Vehicle Management
      await this.testVehicleManagement();
      
      // Test 4: Booking Flow
      await this.testBookingFlow();
      
      // Test 5: Checkpoint System
      await this.testCheckpointSystem();
      
      // Test 6: Payment Processing
      await this.testPaymentProcessing();
      
      // Test 7: Admin Functions
      await this.testAdminFunctions();
      
      // Test 8: Image Upload
      await this.testImageUpload();
      
      // Generate Test Report
      this.generateTestReport();
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
      this.addTestResult('system', 'fail', 'Test suite execution failed', error.message);
    }
  }

  async testBasicConnectivity() {
    console.log('🔗 Testing Basic Connectivity...');
    
    const tests = [
      {
        name: 'Health Check',
        method: 'GET',
        endpoint: '/health',
        expectedStatus: 200
      },
      {
        name: 'CORS Headers',
        method: 'OPTIONS',
        endpoint: '/health',
        expectedStatus: 200
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('connectivity', test);
    }
  }

  async testAuthenticationFlow() {
    console.log('🔐 Testing Authentication Flow...');
    
    const tests = [
      {
        name: 'User Registration',
        method: 'POST',
        endpoint: '/auth/register',
        body: {
          email: 'testuser@example.com',
          password: 'Password123!',
          first_name: 'Test',
          last_name: 'User',
          role: 'renter'
        },
        expectedStatus: 201,
        storeToken: true
      },
      {
        name: 'User Login',
        method: 'POST',
        endpoint: '/auth/login',
        body: {
          email: 'testuser@example.com',
          password: 'Password123!'
        },
        expectedStatus: 200,
        storeToken: true
      },
      {
        name: 'Get User Profile',
        method: 'GET',
        endpoint: '/users/profile',
        expectedStatus: 200,
        requiresAuth: true
      },
      {
        name: 'Invalid Login',
        method: 'POST',
        endpoint: '/auth/login',
        body: {
          email: 'invalid@example.com',
          password: 'wrongpassword'
        },
        expectedStatus: 401
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('authentication', test);
    }
  }

  async testVehicleManagement() {
    console.log('🚗 Testing Vehicle Management...');
    
    const tests = [
      {
        name: 'Get All Vehicles',
        method: 'GET',
        endpoint: '/vehicles',
        expectedStatus: 200
      },
      {
        name: 'Create Vehicle Listing',
        method: 'POST',
        endpoint: '/listings',
        body: {
          title: 'Test Vehicle Listing',
          make: 'Toyota',
          model: 'Corolla',
          year: 2020,
          vehicle_type: 'car',
          category: 'economy',
          price_per_day: 450,
          location: {
            city: 'Cape Town',
            province: 'Western Cape',
            latitude: -33.9249,
            longitude: 18.4241
          },
          features: ['Air conditioning', 'Bluetooth', 'GPS'],
          description: 'Perfect for city driving'
        },
        expectedStatus: 201,
        requiresAuth: true,
        storeResult: 'vehicles'
      },
      {
        name: 'Get Vehicle by ID',
        method: 'GET',
        endpoint: '/vehicles/1',
        expectedStatus: 200
      },
      {
        name: 'Update Vehicle Listing',
        method: 'PUT',
        endpoint: '/listings/1',
        body: {
          price_per_day: 500
        },
        expectedStatus: 200,
        requiresAuth: true
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('vehicles', test);
    }
  }

  async testBookingFlow() {
    console.log('📅 Testing Booking Flow...');
    
    const tests = [
      {
        name: 'Get All Bookings',
        method: 'GET',
        endpoint: '/bookings',
        expectedStatus: 200,
        requiresAuth: true
      },
      {
        name: 'Create Booking',
        method: 'POST',
        endpoint: '/bookings',
        body: {
          vehicle_id: '1',
          start_date: '2024-02-01',
          end_date: '2024-02-03',
          total_days: 2,
          total_price: 900,
          special_requests: 'Need GPS navigation'
        },
        expectedStatus: 201,
        requiresAuth: true,
        storeResult: 'bookings'
      },
      {
        name: 'Update Booking Status',
        method: 'PUT',
        endpoint: '/bookings/1/status',
        body: {
          status: 'confirmed'
        },
        expectedStatus: 200,
        requiresAuth: true
      },
      {
        name: 'Cancel Booking',
        method: 'PUT',
        endpoint: '/bookings/1/cancel',
        body: {
          reason: 'Change of plans'
        },
        expectedStatus: 200,
        requiresAuth: true
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('bookings', test);
    }
  }

  async testCheckpointSystem() {
    console.log('📸 Testing Checkpoint System...');
    
    const tests = [
      {
        name: 'Create Pickup Checkpoint',
        method: 'POST',
        endpoint: '/checkpoints',
        body: {
          booking_id: '1',
          type: 'pickup',
          notes: 'Vehicle pickup inspection',
          location: {
            latitude: -33.9249,
            longitude: 18.4241,
            address: 'Cape Town International Airport'
          }
        },
        expectedStatus: 201,
        requiresAuth: true,
        storeResult: 'checkpoints'
      },
      {
        name: 'Add Checkpoint Item',
        method: 'POST',
        endpoint: '/checkpoints/1/items',
        body: {
          item_name: 'Engine',
          status: 'working',
          notes: 'Engine starts and runs smoothly'
        },
        expectedStatus: 201,
        requiresAuth: true
      },
      {
        name: 'Get Checkpoints for Booking',
        method: 'GET',
        endpoint: '/checkpoints/booking/1',
        expectedStatus: 200,
        requiresAuth: true
      },
      {
        name: 'Update Checkpoint Status',
        method: 'PUT',
        endpoint: '/checkpoints/1',
        body: {
          status: 'completed',
          notes: 'Pickup inspection completed successfully'
        },
        expectedStatus: 200,
        requiresAuth: true
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('checkpoints', test);
    }
  }

  async testPaymentProcessing() {
    console.log('💳 Testing Payment Processing...');
    
    const tests = [
      {
        name: 'Get All Payments',
        method: 'GET',
        endpoint: '/payments',
        expectedStatus: 200,
        requiresAuth: true
      },
      {
        name: 'Create Payment',
        method: 'POST',
        endpoint: '/payments',
        body: {
          booking_id: '1',
          amount_cents: 90000,
          payment_method: 'payfast'
        },
        expectedStatus: 201,
        requiresAuth: true,
        storeResult: 'payments'
      },
      {
        name: 'Update Payment Status',
        method: 'PUT',
        endpoint: '/payments/1/status',
        body: {
          status: 'succeeded'
        },
        expectedStatus: 200,
        requiresAuth: true
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('payments', test);
    }
  }

  async testAdminFunctions() {
    console.log('👨‍💼 Testing Admin Functions...');
    
    const tests = [
      {
        name: 'Get Admin Stats',
        method: 'GET',
        endpoint: '/admin/stats',
        expectedStatus: 200,
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Users (Admin)',
        method: 'GET',
        endpoint: '/admin/users',
        expectedStatus: 200,
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Vehicles (Admin)',
        method: 'GET',
        endpoint: '/admin/vehicles',
        expectedStatus: 200,
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Bookings (Admin)',
        method: 'GET',
        endpoint: '/admin/bookings',
        expectedStatus: 200,
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Checkpoints (Admin)',
        method: 'GET',
        endpoint: '/checkpoints/admin/all',
        expectedStatus: 200,
        requiresAuth: true,
        requiresRole: 'admin'
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('admin', test);
    }
  }

  async testImageUpload() {
    console.log('📷 Testing Image Upload...');
    
    // Create a mock image file for testing
    const mockImageBuffer = Buffer.from('mock-image-data');
    const mockFile = new File([mockImageBuffer], 'test-image.jpg', { type: 'image/jpeg' });
    
    const tests = [
      {
        name: 'Upload Checkpoint Image',
        method: 'POST',
        endpoint: '/checkpoints/1/images',
        body: mockFile,
        expectedStatus: 201,
        requiresAuth: true,
        isFileUpload: true
      },
      {
        name: 'Get Checkpoint Images',
        method: 'GET',
        endpoint: '/checkpoints/1/images',
        expectedStatus: 200,
        requiresAuth: true
      }
    ];

    for (const test of tests) {
      await this.runSingleTest('images', test);
    }
  }

  async runSingleTest(category, test) {
    try {
      const url = `${this.baseURL}${test.endpoint}`;
      const options = {
        method: test.method,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (test.requiresAuth && this.authToken) {
        options.headers['Authorization'] = `Bearer ${this.authToken}`;
      }

      if (test.body && !test.isFileUpload) {
        options.body = JSON.stringify(test.body);
      } else if (test.isFileUpload && test.body) {
        const formData = new FormData();
        formData.append('image', test.body);
        if (test.category) formData.append('category', test.category);
        options.body = formData;
        delete options.headers['Content-Type']; // Let browser set it for FormData
      }

      const response = await fetch(url, options);
      const data = await response.json();

      const passed = response.status === test.expectedStatus;
      
      if (passed) {
        this.addTestResult(category, 'pass', `${test.name} - Success (${response.status})`, data);
        
        // Store auth token if this was a login
        if (test.storeToken && data.token) {
          this.authToken = data.token;
        }
        
        // Store result data if requested
        if (test.storeResult && data) {
          this.testData[test.storeResult].push(data);
        }
      } else {
        this.addTestResult(category, 'fail', `${test.name} - Failed (Expected: ${test.expectedStatus}, Got: ${response.status})`, data);
      }

    } catch (error) {
      this.addTestResult(category, 'fail', `${test.name} - Error`, error.message);
    }
  }

  addTestResult(category, status, message, details = null) {
    const result = {
      category,
      status,
      message,
      details,
      timestamp: new Date().toISOString()
    };

    this.testResults.push(result);
    
    const icon = status === 'pass' ? '✅' : '❌';
    console.log(`  ${icon} ${message}`);
  }

  generateTestReport() {
    const passed = this.testResults.filter(r => r.status === 'pass').length;
    const failed = this.testResults.filter(r => r.status === 'fail').length;
    const total = this.testResults.length;

    console.log('\n📊 TEST RESULTS SUMMARY');
    console.log('========================');
    console.log(`Total Tests: ${total}`);
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`Success Rate: ${((passed / total) * 100).toFixed(1)}%`);

    if (failed > 0) {
      console.log('\n❌ FAILED TESTS:');
      this.testResults
        .filter(r => r.status === 'fail')
        .forEach(result => {
          console.log(`  • ${result.message}`);
          if (result.details) {
            console.log(`    Details: ${JSON.stringify(result.details).substring(0, 100)}...`);
          }
        });
    }

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total,
        passed,
        failed,
        successRate: (passed / total) * 100
      },
      results: this.testResults,
      testData: this.testData
    };

    const reportPath = path.join(__dirname, 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed test report saved to: ${reportPath}`);
  }
}

// Run the tests
const tester = new ComprehensiveApiTester();
tester.runAllTests().catch(console.error);
