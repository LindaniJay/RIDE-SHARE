import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../app';
import { sequelize } from '../config/database';
import { User, Listing } from '../models';
import { cacheService } from '../services/cache';
import { createTestUser, generateTestToken } from './test-helpers';

// Mock cache service
vi.mock('../services/cache', () => ({
  cacheService: {
    get: vi.fn().mockResolvedValue(null),
    set: vi.fn().mockResolvedValue(true),
    del: vi.fn().mockResolvedValue(true),
    exists: vi.fn().mockResolvedValue(false),
    flush: vi.fn().mockResolvedValue(true),
  }
}));

describe('Enhanced Listings API', () => {
  let testUser: User;
  let authToken: string;

  beforeEach(async () => {
    // Clean database
    await sequelize.sync({ force: true });
    
    // Create test user
    testUser = await createTestUser();
    authToken = generateTestToken(testUser.id, testUser.role);
    
    // Create test listings
    await Listing.bulkCreate([
      {
        hostId: 1,
        title: 'BMW X5',
        make: 'BMW',
        model: 'X5',
        year: 2020,
        type: 'suv',
        transmission: 'automatic',
        fuelType: 'petrol',
        seats: 5,
        pricePerDay: 800,
        location: 'Cape Town',
        description: 'Luxury SUV in excellent condition',
        features: ['GPS', 'Bluetooth', 'Air Conditioning'],
        images: ['https://example.com/bmw1.jpg'],
        status: 'approved'
      },
      {
        hostId: 1,
        title: 'Toyota Hilux',
        make: 'Toyota',
        model: 'Hilux',
        year: 2019,
        type: 'bakkie',
        transmission: 'manual',
        fuelType: 'diesel',
        seats: 5,
        pricePerDay: 400,
        location: 'Johannesburg',
        description: 'Reliable bakkie for work',
        features: ['4WD', 'Cruise Control'],
        images: ['https://example.com/hilux1.jpg'],
        status: 'approved'
      }
    ]);
  });

  afterEach(async () => {
    await cacheService.flush();
  });

  describe('GET /api/listings', () => {
    it('should return listings with pagination', async () => {
      const response = await request(app)
        .get('/api/listings')
        .expect(200);

      expect(response.body).toHaveProperty('listings');
      expect(response.body).toHaveProperty('pagination');
      expect(response.body.listings).toHaveLength(2);
      expect(response.body.pagination.total).toBe(2);
    });

    it('should filter by location', async () => {
      const response = await request(app)
        .get('/api/listings?location=Cape Town')
        .expect(200);

      expect(response.body.listings).toHaveLength(1);
      expect(response.body.listings[0].location).toBe('Cape Town');
    });

    it('should filter by price range', async () => {
      const response = await request(app)
        .get('/api/listings?minPrice=500&maxPrice=1000')
        .expect(200);

      expect(response.body.listings).toHaveLength(1);
      expect(response.body.listings[0].pricePerDay).toBe(800);
    });

    it('should filter by vehicle type', async () => {
      const response = await request(app)
        .get('/api/listings?type=suv')
        .expect(200);

      expect(response.body.listings).toHaveLength(1);
      expect(response.body.listings[0].type).toBe('suv');
    });

    it('should search by text', async () => {
      const response = await request(app)
        .get('/api/listings?search=BMW')
        .expect(200);

      expect(response.body.listings).toHaveLength(1);
      expect(response.body.listings[0].make).toBe('BMW');
    });

    it('should sort by price', async () => {
      const response = await request(app)
        .get('/api/listings?sortBy=price&sortOrder=ASC')
        .expect(200);

      expect(response.body.listings[0].pricePerDay).toBe(400);
      expect(response.body.listings[1].pricePerDay).toBe(800);
    });

    it('should include host information', async () => {
      const response = await request(app)
        .get('/api/listings')
        .expect(200);

      expect(response.body.listings[0]).toHaveProperty('host');
      expect(response.body.listings[0].host).toHaveProperty('firstName');
    });

    // Distance calculation test removed since model doesn't support coordinates
    // it('should calculate distance when coordinates provided', async () => {
    //   const response = await request(app)
    //     .get('/api/listings?latitude=-33.9249&longitude=18.4241')
    //     .expect(200);

    //   expect(response.body.listings[0]).toHaveProperty('distance');
    //   expect(response.body.listings[0].distance).toBeCloseTo(0, 2); // Should be very close to 0
    // });

    it('should cache results', async () => {
      // First request
      await request(app).get('/api/listings');
      
      // Check if cached
      const cacheKey = 'listings:{"page":"1","limit":"10"}';
      const cached = await cacheService.get(cacheKey);
      expect(cached).toBeTruthy();
    });
  });

  describe('POST /api/listings', () => {
    it('should create a new listing with valid data', async () => {
      const listingData = {
        title: 'Mercedes C-Class',
        make: 'Mercedes',
        model: 'C-Class',
        year: 2021,
        type: 'car',
        transmission: 'automatic',
        fuelType: 'petrol',
        seats: 5,
        pricePerDay: 600,
        location: 'Durban',
        description: 'Luxury sedan'
      };

      const response = await request(app)
        .post('/api/listings')
        .send(listingData)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(201);

      expect(response.body.title).toBe('Mercedes C-Class');
      expect(response.body.status).toBe('pending');
    });

    it('should reject listing with price too low', async () => {
      const listingData = {
        title: 'Cheap Car',
        make: 'Test',
        model: 'Car',
        year: 2020,
        type: 'car',
        transmission: 'manual',
        fuelType: 'petrol',
        seats: 4,
        pricePerDay: 30, // Too low
        location: 'Cape Town',
        description: 'Very cheap car'
      };

      const response = await request(app)
        .post('/api/listings')
        .send(listingData)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400);

      expect(response.body.error).toBe('Price too low');
    });

    it('should reject listing with old vehicle', async () => {
      const listingData = {
        title: 'Old Car',
        make: 'Test',
        model: 'Car',
        year: 1995, // Too old
        type: 'car',
        transmission: 'manual',
        fuelType: 'petrol',
        seats: 4,
        pricePerDay: 200,
        location: 'Cape Town',
        description: 'Old car'
      };

      const response = await request(app)
        .post('/api/listings')
        .send(listingData)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(400);

      expect(response.body.error).toBe('Vehicle too old');
    });
  });

  describe('PUT /api/listings/:id', () => {
    it('should update listing with valid data', async () => {
      const updateData = {
        pricePerDay: 900,
        description: 'Updated description'
      };

      const response = await request(app)
        .put('/api/listings/1')
        .send(updateData)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.pricePerDay).toBe(900);
      expect(response.body.description).toBe('Updated description');
    });

    it('should reject update from non-owner', async () => {
      const updateData = {
        pricePerDay: 900
      };

      const response = await request(app)
        .put('/api/listings/1')
        .send(updateData)
        .set('Authorization', 'Bearer other-user-token')
        .expect(403);

      expect(response.body.error).toBe('Not authorized');
    });
  });
});
