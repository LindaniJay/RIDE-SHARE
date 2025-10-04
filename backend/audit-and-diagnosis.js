#!/usr/bin/env node

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');

class RentalSiteAuditor {
  constructor() {
    this.baseURL = process.env.API_BASE_URL || 'http://localhost:5001/api';
    this.results = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests: 0,
        passed: 0,
        failed: 0,
        warnings: 0
      },
      categories: {
        authentication: [],
        vehicles: [],
        bookings: [],
        payments: [],
        checkpoints: [],
        admin: [],
        frontend: []
      },
      issues: [],
      recommendations: []
    };
  }

  async runAudit() {
    console.log('🔍 Starting comprehensive rental site audit...\n');
    
    try {
      // Test basic connectivity
      await this.testBasicConnectivity();
      
      // Test authentication endpoints
      await this.testAuthentication();
      
      // Test vehicle/listing endpoints
      await this.testVehicles();
      
      // Test booking endpoints
      await this.testBookings();
      
      // Test payment endpoints
      await this.testPayments();
      
      // Test checkpoint endpoints
      await this.testCheckpoints();
      
      // Test admin endpoints
      await this.testAdmin();
      
      // Generate report
      this.generateReport();
      
    } catch (error) {
      console.error('❌ Audit failed:', error);
      this.results.issues.push({
        category: 'system',
        severity: 'critical',
        issue: 'Audit execution failed',
        details: error.message
      });
    }
  }

  async testBasicConnectivity() {
    console.log('🔗 Testing basic connectivity...');
    
    try {
      const response = await fetch(`${this.baseURL}/health`);
      const data = await response.json();
      
      if (response.ok) {
        this.addResult('system', 'pass', 'Health check successful', data);
      } else {
        this.addResult('system', 'fail', 'Health check failed', data);
      }
    } catch (error) {
      this.addResult('system', 'fail', 'Cannot connect to server', error.message);
    }
  }

  async testAuthentication() {
    console.log('🔐 Testing authentication endpoints...');
    
    const authTests = [
      {
        name: 'User Registration',
        method: 'POST',
        endpoint: '/auth/register',
        body: {
          email: 'test@example.com',
          password: 'Password123!',
          first_name: 'Test',
          last_name: 'User',
          role: 'renter'
        }
      },
      {
        name: 'User Login',
        method: 'POST',
        endpoint: '/auth/login',
        body: {
          email: 'test@example.com',
          password: 'Password123!'
        }
      },
      {
        name: 'Get User Profile',
        method: 'GET',
        endpoint: '/users/profile',
        requiresAuth: true
      }
    ];

    for (const test of authTests) {
      await this.runTest('authentication', test);
    }
  }

  async testVehicles() {
    console.log('🚗 Testing vehicle/listing endpoints...');
    
    const vehicleTests = [
      {
        name: 'Get All Vehicles',
        method: 'GET',
        endpoint: '/vehicles'
      },
      {
        name: 'Get Vehicle by ID',
        method: 'GET',
        endpoint: '/vehicles/1'
      },
      {
        name: 'Create Vehicle Listing',
        method: 'POST',
        endpoint: '/listings',
        body: {
          title: 'Test Vehicle',
          make: 'Toyota',
          model: 'Corolla',
          year: 2020,
          price_per_day: 450,
          location: { city: 'Cape Town', province: 'Western Cape' },
          features: ['Air conditioning', 'Bluetooth']
        },
        requiresAuth: true
      }
    ];

    for (const test of vehicleTests) {
      await this.runTest('vehicles', test);
    }
  }

  async testBookings() {
    console.log('📅 Testing booking endpoints...');
    
    const bookingTests = [
      {
        name: 'Get All Bookings',
        method: 'GET',
        endpoint: '/bookings'
      },
      {
        name: 'Create Booking',
        method: 'POST',
        endpoint: '/bookings',
        body: {
          vehicle_id: '1',
          start_date: '2024-01-15',
          end_date: '2024-01-17',
          total_days: 2,
          total_price: 900
        },
        requiresAuth: true
      }
    ];

    for (const test of bookingTests) {
      await this.runTest('bookings', test);
    }
  }

  async testPayments() {
    console.log('💳 Testing payment endpoints...');
    
    const paymentTests = [
      {
        name: 'Get Payments',
        method: 'GET',
        endpoint: '/payments'
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
        requiresAuth: true
      }
    ];

    for (const test of paymentTests) {
      await this.runTest('payments', test);
    }
  }

  async testCheckpoints() {
    console.log('📸 Testing checkpoint endpoints...');
    
    const checkpointTests = [
      {
        name: 'Create Pickup Checkpoint',
        method: 'POST',
        endpoint: '/checkpoints',
        body: {
          booking_id: '1',
          type: 'pickup',
          notes: 'Vehicle pickup inspection'
        },
        requiresAuth: true
      },
      {
        name: 'Get Checkpoints for Booking',
        method: 'GET',
        endpoint: '/checkpoints/booking/1',
        requiresAuth: true
      },
      {
        name: 'Upload Checkpoint Image',
        method: 'POST',
        endpoint: '/checkpoints/1/images',
        requiresAuth: true,
        isFileUpload: true
      }
    ];

    for (const test of checkpointTests) {
      await this.runTest('checkpoints', test);
    }
  }

  async testAdmin() {
    console.log('👨‍💼 Testing admin endpoints...');
    
    const adminTests = [
      {
        name: 'Get Admin Stats',
        method: 'GET',
        endpoint: '/admin/stats',
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Users',
        method: 'GET',
        endpoint: '/admin/users',
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Vehicles (Admin)',
        method: 'GET',
        endpoint: '/admin/vehicles',
        requiresAuth: true,
        requiresRole: 'admin'
      },
      {
        name: 'Get All Bookings (Admin)',
        method: 'GET',
        endpoint: '/admin/bookings',
        requiresAuth: true,
        requiresRole: 'admin'
      }
    ];

    for (const test of adminTests) {
      await this.runTest('admin', test);
    }
  }

  async runTest(category, test) {
    this.results.summary.totalTests++;
    
    try {
      const url = `${this.baseURL}${test.endpoint}`;
      const options = {
        method: test.method,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if (test.requiresAuth) {
        // Try to get auth token from previous login
        const token = this.getAuthToken();
        if (token) {
          options.headers['Authorization'] = `Bearer ${token}`;
        }
      }

      if (test.body && !test.isFileUpload) {
        options.body = JSON.stringify(test.body);
      }

      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        this.addResult(category, 'pass', `${test.name} - Success`, data);
        
        // Store auth token if this was a login
        if (test.endpoint === '/auth/login' && data.token) {
          this.setAuthToken(data.token);
        }
      } else {
        this.addResult(category, 'fail', `${test.name} - Failed (${response.status})`, data);
      }

    } catch (error) {
      this.addResult(category, 'fail', `${test.name} - Error`, error.message);
    }
  }

  addResult(category, status, message, details = null) {
    const result = {
      status,
      message,
      details,
      timestamp: new Date().toISOString()
    };

    this.results.categories[category].push(result);
    
    if (status === 'pass') {
      this.results.summary.passed++;
    } else if (status === 'fail') {
      this.results.summary.failed++;
      this.results.issues.push({
        category,
        severity: 'high',
        issue: message,
        details
      });
    } else {
      this.results.summary.warnings++;
    }
  }

  setAuthToken(token) {
    this.authToken = token;
  }

  getAuthToken() {
    return this.authToken;
  }

  generateReport() {
    console.log('\n📊 AUDIT RESULTS SUMMARY');
    console.log('========================');
    console.log(`Total Tests: ${this.results.summary.totalTests}`);
    console.log(`✅ Passed: ${this.results.summary.passed}`);
    console.log(`❌ Failed: ${this.results.summary.failed}`);
    console.log(`⚠️  Warnings: ${this.results.summary.warnings}`);
    
    console.log('\n🔍 DETAILED RESULTS BY CATEGORY');
    console.log('================================');
    
    Object.entries(this.results.categories).forEach(([category, tests]) => {
      if (tests.length > 0) {
        console.log(`\n${category.toUpperCase()}:`);
        tests.forEach(test => {
          const icon = test.status === 'pass' ? '✅' : '❌';
          console.log(`  ${icon} ${test.message}`);
          if (test.details && test.status === 'fail') {
            console.log(`     Details: ${JSON.stringify(test.details).substring(0, 100)}...`);
          }
        });
      }
    });

    if (this.results.issues.length > 0) {
      console.log('\n🚨 CRITICAL ISSUES FOUND');
      console.log('========================');
      this.results.issues.forEach((issue, index) => {
        console.log(`${index + 1}. [${issue.category.toUpperCase()}] ${issue.issue}`);
        console.log(`   Severity: ${issue.severity}`);
        if (issue.details) {
          console.log(`   Details: ${issue.details}`);
        }
      });
    }

    // Generate recommendations
    this.generateRecommendations();
    
    if (this.results.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS');
      console.log('==================');
      this.results.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }

    // Save detailed report to file
    this.saveDetailedReport();
  }

  generateRecommendations() {
    const failedTests = this.results.categories.authentication.filter(t => t.status === 'fail').length +
                       this.results.categories.vehicles.filter(t => t.status === 'fail').length +
                       this.results.categories.bookings.filter(t => t.status === 'fail').length +
                       this.results.categories.payments.filter(t => t.status === 'fail').length +
                       this.results.categories.checkpoints.filter(t => t.status === 'fail').length +
                       this.results.categories.admin.filter(t => t.status === 'fail').length;

    if (failedTests > 0) {
      this.results.recommendations.push('Implement proper error handling and validation for all API endpoints');
    }

    if (this.results.categories.authentication.filter(t => t.status === 'fail').length > 0) {
      this.results.recommendations.push('Fix authentication system - ensure JWT tokens are properly generated and validated');
    }

    if (this.results.categories.checkpoints.filter(t => t.status === 'fail').length > 0) {
      this.results.recommendations.push('Implement checkpoint and image upload functionality for vehicle handover process');
    }

    if (this.results.categories.payments.filter(t => t.status === 'fail').length > 0) {
      this.results.recommendations.push('Integrate with real payment gateway (PayFast) for South African market');
    }

    this.results.recommendations.push('Remove all mock data and ensure all endpoints connect to production database');
    this.results.recommendations.push('Implement comprehensive logging and monitoring for production deployment');
    this.results.recommendations.push('Add automated tests for all critical user flows');
    this.results.recommendations.push('Create migration scripts to populate database with realistic test data');
  }

  saveDetailedReport() {
    const reportPath = path.join(__dirname, 'audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the audit
const auditor = new RentalSiteAuditor();
auditor.runAudit().catch(console.error);
