import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '../services/apiClient';
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
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  profileCompleted?: boolean;
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

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    setLoading(true);
    try {
      // Firebase auth state is handled by the listener
      return;
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Firebase auth state listener
  useEffect(() => {
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
  }, []);

  const login = async (email: string, password: string) => {
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
  };

  const register = async (userData: RegisterData) => {
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
  };

  const adminLogin = async (email: string, password: string) => {
    try {
      // Use Firebase authentication for admin login
      const response = await apiClient.post('/auth/admin-login', {
        email,
        password
      });

      if (response.success) {
        const data = response.data as any;
        setUser(data.user);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userRole', data.user.role);
      } else {
        throw new Error('Admin login failed');
      }
    } catch (error) {
      console.error('Admin login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    await FirebaseAuthService.signOut();
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
