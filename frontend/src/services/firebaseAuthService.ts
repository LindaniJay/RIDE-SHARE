import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { apiClient } from './apiClient';
// import { useToastHelpers } from '../components/Toast';

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'host' | 'renter';
  isEmailVerified: boolean;
  isFirebase?: boolean;
  isAdmin?: boolean;
}

class FirebaseAuthService {
  private currentUser: AuthUser | null = null;
  private listeners: ((user: AuthUser | null) => void)[] = [];

  constructor() {
    // Listen to Firebase auth state changes
    onAuthStateChanged(auth, async (firebaseUser: User | null) => {
      if (firebaseUser) {
        try {
          // Get Firebase ID token
          const idToken = await firebaseUser.getIdToken();
          
          // Verify token with backend
          const response = await apiClient.post('/auth/verify-firebase-token', {
            idToken
          });

          if (response.success) {
            this.currentUser = (response.data as any).user;
            this.notifyListeners();
          } else {
            console.error('Failed to verify Firebase token:', response.message);
            await this.signOut();
          }
        } catch (error) {
          console.error('Firebase auth error:', error);
          await this.signOut();
        }
      } else {
        this.currentUser = null;
        this.notifyListeners();
      }
    });
  }

  // Admin login using Firebase authentication
  async adminLogin(email: string, password: string): Promise<AuthUser> {
    try {
      // Use Firebase authentication for admin login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      
      // Verify with backend that this user has admin role
      const response = await apiClient.post('/auth/verify-firebase-token', {
        idToken,
        email: userCredential.user.email
      });

      if (response.success) {
        const user = (response.data as any).user;
        
        // Check if user has admin role
        if (user.role !== 'admin' && !user.isAdmin) {
          await this.signOut();
          throw new Error('Access denied. Admin privileges required.');
        }
        
        this.currentUser = user;
        localStorage.setItem('authToken', (response.data as any).accessToken);
        this.notifyListeners();
        return this.currentUser!;
      } else {
        throw new Error(response.message || 'Admin authentication failed');
      }
    } catch (error) {
      console.error('Admin login error:', error);
      throw error;
    }
  }

  // Firebase email/password sign in
  async signIn(email: string, password: string): Promise<AuthUser> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      
      const response = await apiClient.post('/auth/verify-firebase-token', {
        idToken
      });

      if (response.success) {
        this.currentUser = (response.data as any).user;
        localStorage.setItem('authToken', (response.data as any).accessToken);
        this.notifyListeners();
        return this.currentUser!;
      } else {
        throw new Error(response.message || 'Authentication failed');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  }

  // Firebase email/password sign up
  async signUp(
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string,
    _role: 'host' | 'renter' = 'renter'
  ): Promise<AuthUser> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update Firebase profile
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`
      });

      const idToken = await userCredential.user.getIdToken();
      
      const response = await apiClient.post('/auth/verify-firebase-token', {
        idToken
      });

      if (response.success) {
        this.currentUser = (response.data as any).user;
        localStorage.setItem('authToken', (response.data as any).accessToken);
        this.notifyListeners();
        return this.currentUser!;
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  }

  // Sign out
  async signOut(): Promise<void> {
    try {
      await signOut(auth);
      this.currentUser = null;
      localStorage.removeItem('authToken');
      this.notifyListeners();
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  }

  // Get current user
  getCurrentUser(): AuthUser | null {
    return this.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  // Check if user is admin
  isAdmin(): boolean {
    return this.currentUser?.role === 'admin' || this.currentUser?.isAdmin === true;
  }

  // Check if user is host
  isHost(): boolean {
    return this.currentUser?.role === 'host';
  }

  // Check if user is renter
  isRenter(): boolean {
    return this.currentUser?.role === 'renter';
  }

  // Add auth state listener
  onAuthStateChange(callback: (user: AuthUser | null) => void): () => void {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  // Notify all listeners
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.currentUser));
  }

  // Get Firebase ID token
  async getIdToken(): Promise<string | null> {
    if (auth.currentUser) {
      return await auth.currentUser.getIdToken();
    }
    return null;
  }

  // Refresh Firebase ID token
  async refreshIdToken(): Promise<string | null> {
    if (auth.currentUser) {
      return await auth.currentUser.getIdToken(true);
    }
    return null;
  }
}

export const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;
