import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface User {
  id: number;
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

// Hook moved to separate file to fix React refresh warning

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await axios.get('/api/auth/me');
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const response = await axios.post('/api/auth/login', { email, password });
    setUser(response.data.user);
    localStorage.setItem('accessToken', response.data.accessToken);
  };

  const register = async (userData: RegisterData) => {
    const response = await axios.post('/api/auth/register', userData);
    setUser(response.data.user);
    localStorage.setItem('accessToken', response.data.accessToken);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    axios.post('/api/auth/logout');
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
    logout,
    loading,
    isAdmin,
    isHost,
    isRenter,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
