/**
 * Update Frontend to Production Services
 * This utility helps migrate from mock data to production APIs
 */

// Import statements to replace mock services
export const PRODUCTION_IMPORTS = {
  auth: 'import { authService } from \'../services/productionAuthService\';',
  booking: 'import { bookingService } from \'../services/productionBookingService\';',
  listing: 'import { listingService } from \'../services/productionListingService\';',
  api: 'import { apiClient } from \'../services/apiClient\';',
};

// Service mappings
export const SERVICE_MAPPINGS = {
  // Auth service mappings
  'mockAuthService': 'authService',
  'authService': 'authService',
  
  // Booking service mappings
  'mockBookingService': 'bookingService',
  'bookingService': 'bookingService',
  
  // Listing service mappings
  'mockListingService': 'listingService',
  'listingService': 'listingService',
  
  // API client mappings
  'mockApiClient': 'apiClient',
  'apiClient': 'apiClient',
};

// Method mappings for different services
export const METHOD_MAPPINGS = {
  // Auth methods
  'login': 'login',
  'register': 'register',
  'logout': 'logout',
  'getCurrentUser': 'getCurrentUser',
  'isAuthenticated': 'isAuthenticated',
  'hasRole': 'hasRole',
  
  // Booking methods
  'createBooking': 'createBooking',
  'getRenterBookings': 'getRenterBookings',
  'getHostBookings': 'getHostBookings',
  'updateBookingStatus': 'updateBookingStatus',
  'cancelBooking': 'cancelBooking',
  
  // Listing methods
  'getListings': 'getListings',
  'getListingById': 'getListingById',
  'createListing': 'createListing',
  'updateListing': 'updateListing',
  'deleteListing': 'deleteListing',
  'searchListings': 'searchListings',
};

// Data structure mappings
export const DATA_MAPPINGS = {
  // User data mappings
  'firstName': 'first_name',
  'lastName': 'last_name',
  'phoneNumber': 'phone_number',
  'isEmailVerified': 'is_email_verified',
  'approvalStatus': 'approval_status',
  
  // Booking data mappings
  'renterId': 'renter_id',
  'listingId': 'listing_id',
  'startDate': 'start_date',
  'endDate': 'end_date',
  'totalAmount': 'total_amount',
  'paymentStatus': 'payment_status',
  'specialRequests': 'special_requests',
  
  // Listing data mappings
  'hostId': 'host_id',
  'pricePerDay': 'price_per_day',
  'vehicleType': 'vehicle_type',
  'availabilityCalendar': 'availability_calendar',
};

// Error handling mappings
export const ERROR_MAPPINGS = {
  'NETWORK_ERROR': 'Network error. Please check your connection.',
  'AUTH_ERROR': 'Authentication failed. Please login again.',
  'VALIDATION_ERROR': 'Please check your input and try again.',
  'PERMISSION_ERROR': 'You do not have permission to perform this action.',
  'NOT_FOUND': 'The requested resource was not found.',
  'SERVER_ERROR': 'Server error. Please try again later.',
};

// Component update patterns
export const COMPONENT_UPDATE_PATTERNS = {
  // Dashboard components
  'RenterDashboard': {
    imports: [
      PRODUCTION_IMPORTS.auth,
      PRODUCTION_IMPORTS.booking,
      PRODUCTION_IMPORTS.listing,
    ],
    methods: [
      'getRenterBookings',
      'getCurrentUser',
      'createBooking',
      'cancelBooking',
    ],
  },
  
  'HostDashboard': {
    imports: [
      PRODUCTION_IMPORTS.auth,
      PRODUCTION_IMPORTS.booking,
      PRODUCTION_IMPORTS.listing,
    ],
    methods: [
      'getHostBookings',
      'getHostListings',
      'updateBookingStatus',
      'createListing',
      'updateListing',
    ],
  },
  
  'AdminDashboard': {
    imports: [
      PRODUCTION_IMPORTS.auth,
      PRODUCTION_IMPORTS.api,
    ],
    methods: [
      'getAllBookings',
      'getAllListings',
      'getAdminLogs',
      'overrideBooking',
      'removeListing',
    ],
  },
  
  // Booking components
  'BookingModal': {
    imports: [
      PRODUCTION_IMPORTS.auth,
      PRODUCTION_IMPORTS.booking,
    ],
    methods: [
      'createBooking',
      'getCurrentUser',
    ],
  },
  
  'BookingList': {
    imports: [
      PRODUCTION_IMPORTS.booking,
    ],
    methods: [
      'getRenterBookings',
      'getHostBookings',
      'updateBookingStatus',
      'cancelBooking',
    ],
  },
  
  // Listing components
  'ListingCard': {
    imports: [
      PRODUCTION_IMPORTS.listing,
    ],
    methods: [
      'getListingById',
      'searchListings',
    ],
  },
  
  'ListingForm': {
    imports: [
      PRODUCTION_IMPORTS.listing,
    ],
    methods: [
      'createListing',
      'updateListing',
    ],
  },
  
  // Auth components
  'LoginForm': {
    imports: [
      PRODUCTION_IMPORTS.auth,
    ],
    methods: [
      'login',
      'getCurrentUser',
    ],
  },
  
  'RegisterForm': {
    imports: [
      PRODUCTION_IMPORTS.auth,
    ],
    methods: [
      'register',
      'getCurrentUser',
    ],
  },
};

// API endpoint mappings
export const API_ENDPOINT_MAPPINGS = {
  // Auth endpoints
  '/api/auth/login': '/auth/login',
  '/api/auth/register': '/auth/register',
  '/api/auth/logout': '/auth/logout',
  '/api/auth/profile': '/auth/profile',
  
  // Booking endpoints
  '/api/bookings': '/bookings',
  '/api/bookings/my-bookings': '/bookings/my-bookings',
  '/api/bookings/host-bookings': '/bookings/host-bookings',
  
  // Listing endpoints
  '/api/listings': '/listings',
  '/api/listings/search': '/listings',
  
  // Payment endpoints
  '/api/payments': '/payments',
  '/api/payments/my-payments': '/payments/my-payments',
  
  // Admin endpoints
  '/api/admin/logs': '/admin/logs',
  '/api/admin/override-booking': '/admin/override-booking',
};

// Utility functions for updating components
export const updateComponent = (componentName: string, content: string): string => {
  const patterns = COMPONENT_UPDATE_PATTERNS[componentName as keyof typeof COMPONENT_UPDATE_PATTERNS];
  if (!patterns) return content;
  
  let updatedContent = content;
  
  // Update imports
  patterns.imports.forEach((importStatement: string) => {
    if (!updatedContent.includes(importStatement)) {
      // Find the last import statement and add after it
      const lastImportIndex = updatedContent.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const nextLineIndex = updatedContent.indexOf('\n', lastImportIndex);
        updatedContent = updatedContent.slice(0, nextLineIndex) + 
                        '\n' + importStatement + 
                        updatedContent.slice(nextLineIndex);
      }
    }
  });
  
  // Update service calls
  patterns.methods.forEach((method: string) => {
    // Replace mock service calls with production service calls
    const mockPattern = new RegExp(`mock\\w+\\.${method}`, 'g');
    updatedContent = updatedContent.replace(mockPattern, `${method}`);
  });
  
  return updatedContent;
};

// Update API calls
export const updateApiCalls = (content: string): string => {
  let updatedContent = content;
  
  // Update endpoint mappings
  Object.entries(API_ENDPOINT_MAPPINGS).forEach(([oldEndpoint, newEndpoint]) => {
    const pattern = new RegExp(oldEndpoint.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    updatedContent = updatedContent.replace(pattern, newEndpoint);
  });
  
  return updatedContent;
};

// Update data structure mappings
export const updateDataStructures = (content: string): string => {
  let updatedContent = content;
  
  // Update field name mappings
  Object.entries(DATA_MAPPINGS).forEach(([oldField, newField]) => {
    const pattern = new RegExp(`\\.${oldField}\\b`, 'g');
    updatedContent = updatedContent.replace(pattern, `.${newField}`);
  });
  
  return updatedContent;
};

// Complete component update
export const updateComponentToProduction = (componentName: string, content: string): string => {
  let updatedContent = content;
  
  // Update imports
  updatedContent = updateComponent(componentName, updatedContent);
  
  // Update API calls
  updatedContent = updateApiCalls(updatedContent);
  
  // Update data structures
  updatedContent = updateDataStructures(updatedContent);
  
  return updatedContent;
};

export default {
  PRODUCTION_IMPORTS,
  SERVICE_MAPPINGS,
  METHOD_MAPPINGS,
  DATA_MAPPINGS,
  ERROR_MAPPINGS,
  COMPONENT_UPDATE_PATTERNS,
  API_ENDPOINT_MAPPINGS,
  updateComponent,
  updateApiCalls,
  updateDataStructures,
  updateComponentToProduction,
};
