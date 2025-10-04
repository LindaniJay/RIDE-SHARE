import { Request, Response, NextFunction } from 'express';
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';
import { User } from '../models';
import { AuthRequest } from './auth';

// Generate 2FA secret for user
export const generate2FASecret = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user!;
    
    // Generate secret
    const secret = speakeasy.generateSecret({
      name: `RideShareX (${user.email})`,
      issuer: 'RideShareX'
    });
    
    // Store secret temporarily (in production, store in database)
    await user.update({ 
      twoFactorSecret: secret.base32,
      twoFactorEnabled: false // Not enabled until verified
    });
    
    // Generate QR code
    const qrCodeUrl = await QRCode.toDataURL(secret.otpauth_url!);
    
    res.json({
      success: true,
      secret: secret.base32,
      qrCode: qrCodeUrl,
      manualEntryKey: secret.base32
    });
  } catch (error) {
    console.error('2FA secret generation error:', error);
    res.status(500).json({ error: 'Failed to generate 2FA secret' });
  }
};

// Verify 2FA token
export const verify2FAToken = async (req: AuthRequest, res: Response) => {
  try {
    const { token } = req.body;
    const user = req.user!;
    
    if (!user.twoFactorSecret) {
      return res.status(400).json({ error: '2FA not set up for this user' });
    }
    
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: token,
      window: 2 // Allow 2 time steps (60 seconds) of tolerance
    });
    
    if (verified) {
      // Enable 2FA for the user
      await user.update({ twoFactorEnabled: true });
      res.json({ success: true, message: '2FA enabled successfully' });
    } else {
      res.status(400).json({ error: 'Invalid 2FA token' });
    }
  } catch (error) {
    console.error('2FA verification error:', error);
    res.status(500).json({ error: 'Failed to verify 2FA token' });
  }
};

// Disable 2FA
export const disable2FA = async (req: AuthRequest, res: Response) => {
  try {
    const { password } = req.body;
    const user = req.user!;
    
    // Verify current password
    const bcrypt = require('bcryptjs');
    const isValidPassword = await bcrypt.compare(password, user.password_hash || '');
    
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    
    // Disable 2FA
    await user.update({ 
      twoFactorEnabled: false,
      twoFactorSecret: undefined
    });
    
    res.json({ success: true, message: '2FA disabled successfully' });
  } catch (error) {
    console.error('2FA disable error:', error);
    res.status(500).json({ error: 'Failed to disable 2FA' });
  }
};

// Middleware to require 2FA for admin actions
export const require2FA = (req: AuthRequest, res: Response, next: NextFunction) => {
  const user = req.user!;
  
  // Skip 2FA for non-admin users
  if (user.role !== 'admin') {
    return next();
  }
  
  // Check if 2FA is enabled
  if (!user.twoFactorEnabled) {
    return res.status(403).json({
      error: '2FA required',
      message: 'Two-factor authentication is required for admin actions'
    });
  }
  
  // Verify 2FA token from request
  const { twoFactorToken } = req.body;
  
  if (!twoFactorToken) {
    return res.status(400).json({
      error: '2FA token required',
      message: 'Please provide your 2FA token'
    });
  }
  
  try {
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret!,
      encoding: 'base32',
      token: twoFactorToken,
      window: 2
    });
    
    if (verified) {
      next();
    } else {
      res.status(400).json({ error: 'Invalid 2FA token' });
    }
  } catch (error) {
    console.error('2FA verification error:', error);
    res.status(500).json({ error: 'Failed to verify 2FA token' });
  }
};

// Backup codes for 2FA
export const generateBackupCodes = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user!;
    
    // Generate 10 backup codes
    const backupCodes = Array.from({ length: 10 }, () => 
      Math.random().toString(36).substring(2, 10).toUpperCase()
    );
    
    // Store hashed backup codes
    const bcrypt = require('bcryptjs');
    const hashedCodes = await Promise.all(
      backupCodes.map(code => bcrypt.hash(code, 10))
    );
    
    await user.update({ 
      backupCodes: JSON.stringify(hashedCodes)
    });
    
    res.json({
      success: true,
      backupCodes: backupCodes,
      message: 'Store these backup codes securely. Each can only be used once.'
    });
  } catch (error) {
    console.error('Backup codes generation error:', error);
    res.status(500).json({ error: 'Failed to generate backup codes' });
  }
};

// Verify backup code
export const verifyBackupCode = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { backupCode } = req.body;
    const user = req.user!;
    
    if (!user.backupCodes) {
      return res.status(400).json({ error: 'No backup codes available' });
    }
    
    const storedCodes = JSON.parse(user.backupCodes);
    const bcrypt = require('bcryptjs');
    
    // Check if backup code matches any stored code
    let matchedIndex = -1;
    for (let i = 0; i < storedCodes.length; i++) {
      if (await bcrypt.compare(backupCode, storedCodes[i])) {
        matchedIndex = i;
        break;
      }
    }
    
    if (matchedIndex === -1) {
      return res.status(400).json({ error: 'Invalid backup code' });
    }
    
    // Remove used backup code
    storedCodes.splice(matchedIndex, 1);
    await user.update({ backupCodes: JSON.stringify(storedCodes) });
    
    next();
  } catch (error) {
    console.error('Backup code verification error:', error);
    res.status(500).json({ error: 'Failed to verify backup code' });
  }
};
