import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import request from 'supertest';
import { sequelize } from '../config/database';
import { User } from '../models/User';
import { initializeApp } from '../app';

describe('Authentication', () => {
  let app: any;

  beforeEach(async () => {
    app = await initializeApp();
    await sequelize.sync({ force: true });
  });

  afterEach(async () => {
    await sequelize.close();
  });

  describe('POST /api/auth/login', () => {
    it('should return 400 if no Firebase token provided', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Firebase token is required');
    });

    it('should return 401 for invalid Firebase token', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({ firebaseToken: 'invalid_token' });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid Firebase token');
    });
  });

  describe('POST /api/auth/refresh', () => {
    it('should return 400 if no refresh token provided', async () => {
      const response = await request(app)
        .post('/api/auth/refresh')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Refresh token is required');
    });

    it('should return 401 for invalid refresh token', async () => {
      const response = await request(app)
        .post('/api/auth/refresh')
        .send({ refreshToken: 'invalid_token' });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid refresh token');
    });
  });

  describe('GET /api/auth/me', () => {
    it('should return 401 if no token provided', async () => {
      const response = await request(app)
        .get('/api/auth/me');

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('No token provided');
    });

    it('should return 401 for invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer invalid_token');

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Invalid token');
    });
  });

  describe('PUT /api/auth/profile', () => {
    it('should return 401 if no token provided', async () => {
      const response = await request(app)
        .put('/api/auth/profile')
        .send({ display_name: 'Test User' });

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('No token provided');
    });
  });
});