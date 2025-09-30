import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = firebaseAuthService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
      
      if (user) {
        // User is logged in - navigate to dashboard if not on admin routes
        if (!location.pathname.startsWith('/admin') && !location.pathname.includes('admin')) {
          console.log('AuthContext: Navigating regular user to dashboard');
          navigate('/dashboard');
        } else if (location.pathname.startsWith('/admin')) {
          console.log('AuthContext: Admin route detected, not redirecting');
        }
      } else {
        // User is logged out - navigate to home page
        console.log('AuthContext: User logged out, navigating to home');
        navigate('/', { replace: true });
      }
    });

    return unsubscribe;
  }, [navigate, location.pathname]);

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
      // Navigation will be handled by the auth state change listener
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await firebaseAuthService.logoutUser();
      // Navigation will be handled by the auth state change listener
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
