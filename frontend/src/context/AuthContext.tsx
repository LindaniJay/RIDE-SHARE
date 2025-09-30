import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { firebaseAuthService, User } from '../services/firebaseAuth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (email: string, password: string, firstName: string, lastName: string, phone: string, role: 'Renter' | 'Host') => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = firebaseAuthService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string, firstName: string, lastName: string, phone: string, role: 'Renter' | 'Host') => {
    setLoading(true);
    try {
      await firebaseAuthService.signupUser({ email, password, firstName, lastName, phone, role });
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await firebaseAuthService.loginUser({ email, password });
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await firebaseAuthService.logoutUser();
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
