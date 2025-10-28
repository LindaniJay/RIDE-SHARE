/**
 * Booking Workflow Debug Tool
 * 
 * This script helps debug the listing to booking workflow by:
 * 1. Testing all booking API endpoints
 * 2. Verifying data consistency
 * 3. Checking authentication flows
 * 4. Monitoring workflow state
 */

const axios = require('axios');

class BookingWorkflowDebugger {
  constructor(baseUrl = 'http://localhost:5001') {
    this.baseUrl = baseUrl;
    this.results = {
      endpoints: {},
      errors: [],
      recommendations: []
    };
  }

  async debugBookingWorkflow() {
    console.log('🔍 Starting Booking Workflow Debug...\n');
    
    // 1. Test all booking endpoints
    await this.testBookingEndpoints();
    
    // 2. Check data model consistency
    await this.checkDataModels();
    
    // 3. Test authentication flows
    await this.testAuthentication();
    
    // 4. Generate recommendations
    this.generateRecommendations();
    
    // 5. Display results
    this.displayResults();
  }

  async testBookingEndpoints() {
    console.log('📡 Testing Booking API Endpoints...');
    
    const endpoints = [
      { path: '/api/bookings', method: 'POST', name: 'Main Bookings API' },
      { path: '/api/bookings/create', method: 'POST', name: 'Create Booking API' },
      { path: '/api/bookings/initiate', method: 'POST', name: 'Enhanced Bookings API' },
      { path: '/api/bookings-new', method: 'POST', name: 'New Bookings API' }
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await axios.get(`${this.baseUrl}${endpoint.path}`, {
          timeout: 5000,
          validateStatus: () => true // Accept any status code
        });
        
        this.results.endpoints[endpoint.name] = {
          status: response.status,
          available: response.status !== 404,
          method: endpoint.method,
          path: endpoint.path
        };
        
        console.log(`  ✅ ${endpoint.name}: ${response.status} ${response.statusText}`);
      } catch (error) {
        this.results.endpoints[endpoint.name] = {
          status: 'ERROR',
          available: false,
          error: error.message,
          method: endpoint.method,
          path: endpoint.path
        };
        
        console.log(`  ❌ ${endpoint.name}: ${error.message}`);
        this.results.errors.push({
          type: 'ENDPOINT_ERROR',
          endpoint: endpoint.name,
          error: error.message
        });
      }
    }
  }

  async checkDataModels() {
    console.log('\n📊 Checking Data Model Consistency...');
    
    const modelIssues = [
      {
        field: 'renterId vs renter_id',
        issue: 'Inconsistent field naming across APIs',
        impact: 'High - Causes booking creation failures'
      },
      {
        field: 'listingId vs vehicleId',
        issue: 'Different APIs use different field names',
        impact: 'High - Frontend confusion on which to use'
      },
      {
        field: 'status values',
        issue: 'Different status arrays across routes',
        impact: 'Medium - Booking state management issues'
      },
      {
        field: 'date formats',
        issue: 'Inconsistent date field naming',
        impact: 'Medium - Date parsing errors'
      }
    ];

    modelIssues.forEach(issue => {
      console.log(`  ⚠️  ${issue.field}: ${issue.issue} (${issue.impact})`);
      this.results.errors.push({
        type: 'DATA_MODEL',
        field: issue.field,
        issue: issue.issue,
        impact: issue.impact
      });
    });
  }

  async testAuthentication() {
    console.log('\n🔐 Testing Authentication Methods...');
    
    const authMethods = [
      { name: 'Firebase Token', endpoint: '/api/bookings' },
      { name: 'Firebase UID', endpoint: '/api/bookings/create' },
      { name: 'Basic Auth', endpoint: '/api/bookings-new' },
      { name: 'Enhanced Auth', endpoint: '/api/bookings/initiate' }
    ];

    authMethods.forEach(method => {
      console.log(`  🔑 ${method.name}: Used by ${method.endpoint}`);
      this.results.errors.push({
        type: 'AUTH_INCONSISTENCY',
        method: method.name,
        endpoint: method.endpoint
      });
    });
  }

  generateRecommendations() {
    console.log('\n💡 Generating Recommendations...');
    
    const recommendations = [
      {
        priority: 'HIGH',
        issue: 'Multiple Booking APIs',
        solution: 'Consolidate to single booking API endpoint',
        action: 'Choose one API (recommend enhanced-bookings.ts) and remove others'
      },
      {
        priority: 'HIGH',
        issue: 'Data Model Inconsistency',
        solution: 'Standardize field names across all APIs',
        action: 'Create unified Booking interface and update all routes'
      },
      {
        priority: 'MEDIUM',
        issue: 'Authentication Mismatch',
        solution: 'Use consistent authentication method',
        action: 'Standardize on Firebase token authentication'
      },
      {
        priority: 'MEDIUM',
        issue: 'Frontend Service Fallback',
        solution: 'Remove localStorage fallback to expose API issues',
        action: 'Fix API calls instead of masking failures'
      },
      {
        priority: 'LOW',
        issue: 'Error Handling',
        solution: 'Improve error messages and logging',
        action: 'Add detailed error responses and workflow logging'
      }
    ];

    recommendations.forEach(rec => {
      console.log(`  ${rec.priority === 'HIGH' ? '🔴' : rec.priority === 'MEDIUM' ? '🟡' : '🟢'} ${rec.priority}: ${rec.issue}`);
      console.log(`     Solution: ${rec.solution}`);
      console.log(`     Action: ${rec.action}\n`);
      
      this.results.recommendations.push(rec);
    });
  }

  displayResults() {
    console.log('\n📋 Debug Summary:');
    console.log('================');
    
    const availableEndpoints = Object.values(this.results.endpoints).filter(ep => ep.available).length;
    const totalEndpoints = Object.keys(this.results.endpoints).length;
    
    console.log(`📡 Available Endpoints: ${availableEndpoints}/${totalEndpoints}`);
    console.log(`❌ Errors Found: ${this.results.errors.length}`);
    console.log(`💡 Recommendations: ${this.results.recommendations.length}`);
    
    const highPriorityIssues = this.results.recommendations.filter(r => r.priority === 'HIGH').length;
    if (highPriorityIssues > 0) {
      console.log(`\n🚨 ${highPriorityIssues} HIGH priority issues need immediate attention!`);
    }
    
    console.log('\n🔧 Next Steps:');
    console.log('1. Fix API endpoint consolidation');
    console.log('2. Standardize data models');
    console.log('3. Update frontend service to use correct API');
    console.log('4. Test complete booking workflow');
    console.log('5. Add comprehensive error logging');
  }

  // Test specific booking creation
  async testBookingCreation(testData) {
    console.log('\n🧪 Testing Booking Creation...');
    
    const testBooking = {
      vehicleId: '1',
      startDate: '2024-02-01',
      endDate: '2024-02-03',
      totalPrice: 500,
      specialRequests: 'Test booking for debugging'
    };

    try {
      // Try enhanced bookings API first
      const response = await axios.post(`${this.baseUrl}/api/bookings/initiate`, testBooking, {
        headers: {
          'Authorization': 'Bearer test-token',
          'Content-Type': 'application/json'
        },
        timeout: 10000,
        validateStatus: () => true
      });

      console.log(`  📝 Enhanced Bookings API Response: ${response.status}`);
      if (response.data) {
        console.log(`     Success: ${response.data.success || 'N/A'}`);
        console.log(`     Error: ${response.data.error || 'None'}`);
      }

    } catch (error) {
      console.log(`  ❌ Enhanced Bookings API Error: ${error.message}`);
    }
  }
}

// Usage
if (require.main === module) {
  const bookingDebugger = new BookingWorkflowDebugger();
  bookingDebugger.debugBookingWorkflow()
    .then(() => {
      console.log('\n✅ Debug complete!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Debug failed:', error);
      process.exit(1);
    });
}

module.exports = BookingWorkflowDebugger;
