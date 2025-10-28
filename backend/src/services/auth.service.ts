import { User } from '../models/User';
import { getFirebaseAuth } from '../config/firebase';
import { logger } from '../utils/logger';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface LoginResult {
  user: User;
  tokens: AuthTokens;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export class AuthService {
  // Verify Firebase token and get user
  static async verifyFirebaseToken(firebaseToken: string): Promise<User | null> {
    try {
      const firebaseAuth = getFirebaseAuth();
      if (!firebaseAuth) {
        throw new Error('Firebase not configured');
      }

      const decodedToken = await firebaseAuth.verifyIdToken(firebaseToken);
      const user = await User.findOne({ where: { firebase_uid: decodedToken.uid } });
      
      if (!user) {
        return null;
      }

      // Update login tracking
      user.incrementLoginCount();
      await user.save();

      return user;
    } catch (error) {
      logger.error('Firebase token verification failed:', error);
      return null;
    }
  }

  // Create or update user from Firebase
  static async createOrUpdateUser(firebaseUser: any): Promise<User> {
    try {
      let user = await User.findOne({ where: { firebase_uid: firebaseUser.uid } });
      
      if (user) {
        // Update existing user
        user.email = firebaseUser.email;
        user.display_name = firebaseUser.name || user.display_name;
        user.avatar_url = firebaseUser.picture || user.avatar_url;
        await user.save();
      } else {
        // Create new user
        user = await User.create({
          firebase_uid: firebaseUser.uid,
          email: firebaseUser.email,
          display_name: firebaseUser.name || firebaseUser.email.split('@')[0],
          avatar_url: firebaseUser.picture,
          isVerified: firebaseUser.email_verified || false,
          role: 'renter', // Default role for new users
        });
      }

      return user;
    } catch (error) {
      logger.error('Error creating/updating user:', error);
      throw error;
    }
  }

  // Login with Firebase token
  static async loginWithFirebase(firebaseToken: string): Promise<LoginResult | null> {
    try {
      const user = await this.verifyFirebaseToken(firebaseToken);
      if (!user) {
        return null;
      }

      const tokens = this.generateTokens(user.id.toString());
      return { user, tokens };
    } catch (error) {
      logger.error('Firebase login failed:', error);
      return null;
    }
  }

  // Generate 2FA secret
  static generate2FASecret(): string {
    // This would typically use a library like speakeasy
    // For now, return a placeholder
    return '2fa-secret-placeholder';
  }

  // Verify 2FA token
  static verify2FAToken(token: string, secret: string): boolean {
    // This would typically use a library like speakeasy
    // For now, return true for development
    return true;
  }

  // Lock user account
  static async lockUser(userId: string, durationMinutes: number = 30): Promise<void> {
    const user = await User.findByPk(userId);
    if (user) {
      user.locked_until = new Date(Date.now() + durationMinutes * 60 * 1000);
      await user.save();
    }
  }

  // Unlock user account
  static async unlockUser(userId: string): Promise<void> {
    const user = await User.findByPk(userId);
    if (user) {
      user.resetFailedAttempts();
      await user.save();
    }
  }

  // Generate JWT tokens
  static generateTokens(userId: string): AuthTokens {
    const accessToken = jwt.sign(
      { userId, type: 'access' },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN } as jwt.SignOptions
    );

    const refreshToken = jwt.sign(
      { userId, type: 'refresh' },
      env.JWT_REFRESH_SECRET,
      { expiresIn: env.JWT_REFRESH_EXPIRES_IN } as jwt.SignOptions
    );

    return { accessToken, refreshToken };
  }

  // Refresh token
  static async refreshToken(refreshToken: string): Promise<AuthTokens> {
    try {
      const decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as any;
      if (decoded.type !== 'refresh') {
        throw new Error('Invalid token type');
      }
      
      const user = await User.findByPk(decoded.userId);
      if (!user) {
        throw new Error('User not found');
      }

      return this.generateTokens(user.id.toString());
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }
}