import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import request from 'supertest';
import { sequelize } from '../config/database';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import { initializeApp } from '../app';

describe('Listings', () => {
  let app: any;
  let testUser: User;
  let authToken: string;

  beforeEach(async () => {
    app = await initializeApp();
    await sequelize.sync({ force: true });

    // Create test user
    testUser = await User.create({
      firebase_uid: 'test_firebase_uid',
      email: 'test@example.com',
      display_name: 'Test User',
      role: 'HOST'
    });

    // Mock JWT token (in real tests, you'd generate a proper token)
    authToken = 'mock_jwt_token';
  });

  afterEach(async () => {
    await sequelize.close();
  });

  describe('GET /api/listings', () => {
    it('should return empty list when no listings exist', async () => {
      const response = await request(app)
        .get('/api/listings');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.listings).toEqual([]);
      expect(response.body.pagination.total).toBe(0);
    });

    it('should return listings with pagination', async () => {
      // Create test listings
      await Listing.create({
        host_id: testUser.id,
        title: 'Test Car 1',
        price_per_day: 100,
        location: 'Cape Town',
        vehicle_type: 'sedan',
        fuel_type: 'petrol',
        transmission: 'manual',
        year: 2020,
        mileage: 50000,
        approved: true,
        is_available: true
      });

      await Listing.create({
        host_id: testUser.id,
        title: 'Test Car 2',
        price_per_day: 150,
        location: 'Johannesburg',
        vehicle_type: 'suv',
        fuel_type: 'diesel',
        transmission: 'automatic',
        year: 2021,
        mileage: 30000,
        approved: true,
        is_available: true
      });

      const response = await request(app)
        .get('/api/listings?page=1&limit=10');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.listings).toHaveLength(2);
      expect(response.body.pagination.total).toBe(2);
    });

    it('should filter listings by vehicle type', async () => {
      await Listing.create({
        host_id: testUser.id,
        title: 'Test Sedan',
        price_per_day: 100,
        location: 'Cape Town',
        vehicle_type: 'sedan',
        fuel_type: 'petrol',
        transmission: 'manual',
        year: 2020,
        mileage: 50000,
        approved: true,
        is_available: true
      });

      await Listing.create({
        host_id: testUser.id,
        title: 'Test SUV',
        price_per_day: 150,
        location: 'Johannesburg',
        vehicle_type: 'suv',
        fuel_type: 'diesel',
        transmission: 'automatic',
        year: 2021,
        mileage: 30000,
        approved: true,
        is_available: true
      });

      const response = await request(app)
        .get('/api/listings?vehicle_type=sedan');

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.listings).toHaveLength(1);
      expect(response.body.listings[0].vehicle_type).toBe('sedan');
    });
  });

  describe('GET /api/listings/:id', () => {
    it('should return 404 for non-existent listing', async () => {
      const response = await request(app)
        .get('/api/listings/non-existent-id');

      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Listing not found');
    });

    it('should return listing details', async () => {
      const listing = await Listing.create({
        host_id: testUser.id,
        title: 'Test Car',
        price_per_day: 100,
        location: 'Cape Town',
        vehicle_type: 'sedan',
        fuel_type: 'petrol',
        transmission: 'manual',
        year: 2020,
        mileage: 50000,
        approved: true,
        is_available: true
      });

      const response = await request(app)
        .get(`/api/listings/${listing.id}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.listing.id).toBe(listing.id);
      expect(response.body.listing.title).toBe('Test Car');
    });
  });

  describe('POST /api/listings', () => {
    it('should return 401 if no token provided', async () => {
      const response = await request(app)
        .post('/api/listings')
        .send({
          title: 'Test Car',
          price_per_day: 100,
          location: 'Cape Town',
          vehicle_type: 'sedan',
          fuel_type: 'petrol',
          transmission: 'manual',
          year: 2020,
          mileage: 50000
        });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('No token provided');
    });

    it('should return 400 for invalid listing data', async () => {
      const response = await request(app)
        .post('/api/listings')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          title: '', // Invalid: empty title
          price_per_day: -100, // Invalid: negative price
          location: 'Cape Town',
          vehicle_type: 'invalid_type', // Invalid: not in enum
          fuel_type: 'petrol',
          transmission: 'manual',
          year: 1800, // Invalid: too old
          mileage: -1000 // Invalid: negative mileage
        });

      expect(response.status).toBe(400);
    });
  });
});

