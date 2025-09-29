import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '../api/client';
import { FirebaseAuthService } from '../services/firebaseAuth';

interface User {
  id?: number;
  uid?: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'renter' | 'host' | 'admin';
  isEmailVerified: boolean;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  adminLogin: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  isAdmin: () => boolean;
  isHost: () => boolean;
  isRenter: () => boolean;
  hasRole: (role: string) => boolean;
  authMethod: 'firebase' | 'express';
  setAuthMethod: (method: 'firebase' | 'express') => void;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role?: 'renter' | 'host';
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authMethod, setAuthMethod] = useState<'firebase' | 'express'>(
    localStorage.getItem('authMethod') as 'firebase' | 'express' || 'firebase'
  );

  useEffect(() => {
    checkAuth();
  }, [authMethod]);

  const checkAuth = async () => {
    setLoading(true);
    try {
      if (authMethod === 'firebase') {
        // Firebase auth state is handled by the listener
        return;
      } else {
        // Express JWT auth
        const token = localStorage.getItem('accessToken');
        if (!token) {
          setUser(null);
          return;
        }
        
        const response = await apiClient.get('/auth/me');
        setUser(response.data.user);
        localStorage.setItem('userRole', response.data.user.role);
      }
    } catch (error) {
      setUser(null);
      if (authMethod === 'express') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userRole');
      }
    } finally {
      setLoading(false);
    }
  };

  // Firebase auth state listener
  useEffect(() => {
    if (authMethod === 'firebase') {
      const unsubscribe = FirebaseAuthService.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            firstName: firebaseUser.firstName,
            lastName: firebaseUser.lastName,
            role: firebaseUser.role,
            phone: firebaseUser.phone,
            isEmailVerified: firebaseUser.isEmailVerified
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, [authMethod]);

  const login = async (email: string, password: string) => {
    if (authMethod === 'firebase') {
      const firebaseUser = await FirebaseAuthService.signIn(email, password);
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        firstName: firebaseUser.firstName,
        lastName: firebaseUser.lastName,
        role: firebaseUser.role,
        phone: firebaseUser.phone,
        isEmailVerified: firebaseUser.isEmailVerified
      };
      setUser(userData);
      localStorage.setItem('userRole', firebaseUser.role);
    } else {
      const response = await apiClient.post('/auth/login', { email, password });
      setUser(response.data.user);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('userRole', response.data.user.role);
    }
  };

  const register = async (userData: RegisterData) => {
    if (authMethod === 'firebase') {
      const firebaseUser = await FirebaseAuthService.register(
        userData.email,
        userData.password,
        userData.firstName,
        userData.lastName,
        userData.role,
        userData.phone
      );
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        firstName: firebaseUser.firstName,
        lastName: firebaseUser.lastName,
        role: firebaseUser.role,
        phone: firebaseUser.phone,
        isEmailVerified: firebaseUser.isEmailVerified
      });
    } else {
      const response = await apiClient.post('/auth/register', userData);
      setUser(response.data.user);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('userRole', response.data.user.role);
    }
  };

  const adminLogin = async (email: string, password: string) => {
    try {
      // Mock admin users for demo purposes
      const adminUsers = [
        {
          id: 'admin-1',
          email: 'Jonase@rideshare.co.za',
          password: 'password123',
          firstName: 'Jonase',
          lastName: 'Admin',
          role: 'admin' as const,
          isEmailVerified: true,
          isAdmin: true
        },
        {
          id: 'admin-2',
          email: 'Toni@rideshare.co.za',
          password: 'password123',
          firstName: 'Toni',
          lastName: 'Admin',
          role: 'admin' as const,
          isEmailVerified: true,
          isAdmin: true
        },
        {
          id: 'admin-3',
          email: 'soso@rideshare.co.za',
          password: 'password123',
          firstName: 'Soso',
          lastName: 'Admin',
          role: 'admin' as const,
          isEmailVerified: true,
          isAdmin: true
        },
        {
          id: 'admin-4',
          email: 'Anitha@rideshare.co.za',
          password: 'password123',
          firstName: 'Anitha',
          lastName: 'Admin',
          role: 'admin' as const,
          isEmailVerified: true,
          isAdmin: true
        }
      ];

      // Find admin user
      const adminUser = adminUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (!adminUser) {
        throw new Error('Admin access denied');
      }
      
      if (password !== adminUser.password) {
        throw new Error('Invalid admin credentials');
      }

      // Create mock token
      const mockToken = 'mock-admin-token-' + Date.now();
      
      // Set user data
      const userData = {
        id: parseInt(adminUser.id.replace('admin-', '')),
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
        isEmailVerified: adminUser.isEmailVerified
      };
      
      setUser(userData);
      localStorage.setItem('accessToken', mockToken);
      localStorage.setItem('userRole', adminUser.role);
    } catch (error) {
      console.error('Admin login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    if (authMethod === 'firebase') {
      await FirebaseAuthService.signOut();
    } else {
      setUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userRole');
      apiClient.post('/auth/logout');
    }
  };

  // Role-based helper functions
  const isAdmin = () => user?.role === 'admin';
  const isHost = () => user?.role === 'host';
  const isRenter = () => user?.role === 'renter';
  const hasRole = (role: string) => user?.role === role;

  const value = {
    user,
    login,
    register,
    adminLogin,
    logout,
    loading,
    isAdmin,
    isHost,
    isRenter,
    hasRole,
    authMethod,
    setAuthMethod: (method: 'firebase' | 'express') => {
      setAuthMethod(method);
      localStorage.setItem('authMethod', method);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
