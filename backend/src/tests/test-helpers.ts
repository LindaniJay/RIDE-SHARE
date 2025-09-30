import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const createTestUser = async (userData: Partial<any> = {}) => {
  const defaultUser = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    password: 'testpassword123',
    passwordHash: 'hashedpassword123',
    role: 'host' as 'renter' | 'host' | 'admin',
    ...userData
  };

  return await User.create(defaultUser);
};

export const generateTestToken = (userId: number, role: string = 'host') => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET || 'test-jwt-secret',
    { expiresIn: '1h' }
  );
};

export const createAuthenticatedRequest = (app: any, token: string) => {
  return (method: string, url: string) => {
    return app[method](url).set('Authorization', `Bearer ${token}`);
  };
};
