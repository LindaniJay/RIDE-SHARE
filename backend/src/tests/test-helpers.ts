import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export const createTestUser = async (userData: Partial<any> = {}) => {
  const defaultUser = {
    first_name: 'Test',
    last_name: 'User',
    email: 'test@example.com',
    password: 'testpassword123',
    password_hash: 'hashedpassword123',
    role: 'host' as 'renter' | 'host' | 'admin',
    is_email_verified: true,
    is_phone_verified: false,
    approval_status: 'approved' as 'pending' | 'approved' | 'rejected',
    document_status: 'not_uploaded' as 'not_uploaded' | 'pending' | 'approved' | 'rejected',
    is_active: true,
    ...userData
  };

  return await User.create({
    ...defaultUser,
    firebase_uid: `test-${Date.now()}`,
    isVerified: true,
    display_name: `${defaultUser.first_name} ${defaultUser.last_name}`
  });
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
