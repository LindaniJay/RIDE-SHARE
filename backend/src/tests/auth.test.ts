import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../app';
import { sequelize } from '../config/database';

// Set up environment variables for tests
beforeAll(() => {
  process.env.JWT_SECRET = 'test-jwt-secret-key';
  process.env.JWT_REFRESH_SECRET = 'test-jwt-refresh-secret-key';
});

beforeEach(async () => {
  // Clean database before each test
  await sequelize.sync({ force: true });
});

describe('Auth API', () => {
  it('should register a new user', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
      role: 'renter',
    };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData);

    if (response.status !== 201) {
      console.log('Register error:', response.body);
    }

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('accessToken');
  });

  it('should login with valid credentials', async () => {
    // First create a user
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'Test',
      lastName: 'User',
      role: 'renter',
    };

    await request(app)
      .post('/api/auth/register')
      .send(userData);

    // Now try to login
    const loginData = {
      email: 'test@example.com',
      password: 'password123',
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(loginData);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('accessToken');
  });
});
