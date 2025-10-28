import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, LoginForm, SignupForm } from '../types/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (formData: SignupForm) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch user data from Firestore
          const userDoc = await firestore()
            .collection('users')
            .doc(firebaseUser.uid)
            .get();

          if (userDoc.exists) {
            const userData = userDoc.data() as User;
            setUser(userData);
            await AsyncStorage.setItem('user', JSON.stringify(userData));
          } else {
            // User document doesn't exist, sign out
            await auth().signOut();
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
        await AsyncStorage.removeItem('user');
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      throw new Error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (formData: SignupForm): Promise<void> => {
    try {
      setLoading(true);
      
      // Create Firebase Auth user
      const userCredential = await auth().createUserWithEmailAndPassword(
        formData.email,
        formData.password
      );

      const firebaseUser = userCredential.user;
      
      if (!firebaseUser) {
        throw new Error('Failed to create user');
      }

      // Create user document in Firestore
      const userData: User = {
        id: firebaseUser.uid,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        role: formData.role,
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await firestore()
        .collection('users')
        .doc(firebaseUser.uid)
        .set(userData);

      // Update display name
      await firebaseUser.updateProfile({
        displayName: `${formData.firstName} ${formData.lastName}`,
      });

      setUser(userData);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } catch (error: any) {
      throw new Error(error.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth().signOut();
      setUser(null);
      await AsyncStorage.removeItem('user');
    } catch (error: any) {
      throw new Error(error.message || 'Logout failed');
    }
  };

  const updateProfile = async (data: Partial<User>): Promise<void> => {
    try {
      if (!user) throw new Error('No user logged in');

      const updatedUser = { ...user, ...data, updatedAt: new Date().toISOString() };
      
      await firestore()
        .collection('users')
        .doc(user.id)
        .update(data);

      setUser(updatedUser);
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error: any) {
      throw new Error(error.message || 'Profile update failed');
    }
  };

  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error: any) {
      throw new Error(error.message || 'Password reset failed');
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    updateProfile,
    sendPasswordResetEmail,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
