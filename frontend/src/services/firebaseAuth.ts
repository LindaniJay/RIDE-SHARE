import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export interface User {
  uid: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  phoneNumber?: string;
  role: 'Renter' | 'Host' | 'admin' | 'Admin';
  approvalStatus: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  age?: number;
  driversLicense?: boolean;
  idVerified?: boolean;
  addressVerified?: boolean;
  insuranceVerified?: boolean;
  // Firebase user methods
  getIdToken: () => Promise<string>;
  name?: string;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'Renter' | 'Host';
}

export interface LoginData {
  email: string;
  password: string;
}

class FirebaseAuthService {
  private currentUser: User | null = null;
  private authStateListeners: ((user: User | null) => void)[] = [];

  constructor() {
    // Listen to auth state changes
    onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          const userData = await this.getUserRole(firebaseUser.uid);
          this.currentUser = userData;
        } catch (error) {
          console.error('Error fetching user data:', error);
          this.currentUser = null;
        }
      } else {
        this.currentUser = null;
      }
      
      // Notify all listeners
      this.authStateListeners.forEach(listener => listener(this.currentUser));
    });
  }

  /**
   * Sign up a new user with email, password, and role
   */
  async signupUser(data: SignupData): Promise<User> {
    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );
      
      const firebaseUser = userCredential.user;
      
      // Save user data to Firestore
      const userData: User = {
        uid: firebaseUser.uid,
        id: firebaseUser.uid,
        email: firebaseUser.email!,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone || '',
        phoneNumber: data.phone || '',
        role: data.role,
        approvalStatus: 'pending',
        createdAt: new Date(),
        getIdToken: () => firebaseUser.getIdToken(),
        name: `${data.firstName} ${data.lastName}`
      };
      
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        ...userData,
        createdAt: serverTimestamp()
      });
      
      // Register user in backend database
      try {
        const token = await firebaseUser.getIdToken();
        const response = await fetch('http://localhost:5001/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firebaseToken: token,
            role: data.role.toLowerCase()
          })
        });
        
        if (!response.ok) {
          console.warn('Failed to register user in backend:', await response.text());
        }
      } catch (error) {
        console.warn('Error registering user in backend:', error);
      }
      
      this.currentUser = userData;
      return userData;
    } catch (error: any) {
      console.error('Signup error:', error);
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  /**
   * Sign in an existing user
   */
  async loginUser(data: LoginData): Promise<User> {
    try {
      // Authenticate with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );
      
      const firebaseUser = userCredential.user;
      
      // Get user data from Firestore
      const userData = await this.getUserRole(firebaseUser.uid);
      
      // Ensure user is registered in backend database
      try {
        const token = await firebaseUser.getIdToken();
        const response = await fetch('http://localhost:5001/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firebaseToken: token,
            role: userData.role.toLowerCase()
          })
        });
        
        if (!response.ok) {
          console.warn('Failed to login user in backend:', await response.text());
        }
      } catch (error) {
        console.warn('Error logging in user in backend:', error);
      }
      
      this.currentUser = userData;
      return userData;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  /**
   * Sign out the current user
   */
  async logoutUser(): Promise<void> {
    try {
      await signOut(auth);
      this.currentUser = null;
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error('Failed to sign out. Please try again.');
    }
  }

  /**
   * Get the current user
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Get user role from Firestore
   */
  private async getUserRole(uid: string): Promise<User> {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      
      if (!userDoc.exists()) {
        throw new Error('User data not found. Please contact support.');
      }
      
      const userData = userDoc.data();
      const firebaseUser = auth.currentUser;
      
      return {
        uid: userData.uid,
        id: userData.uid,
        email: userData.email,
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        phone: userData.phone || '',
        phoneNumber: userData.phone || '',
        role: userData.role,
        approvalStatus: userData.approvalStatus || 'pending',
        createdAt: userData.createdAt?.toDate() || new Date(),
        getIdToken: () => firebaseUser?.getIdToken() || Promise.reject('No Firebase user'),
        name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim()
      };
    } catch (error: any) {
      console.error('Error fetching user role:', error);
      throw new Error('Failed to fetch user data. Please try again.');
    }
  }

  /**
   * Add auth state listener
   */
  onAuthStateChange(callback: (user: User | null) => void): () => void {
    this.authStateListeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      const index = this.authStateListeners.indexOf(callback);
      if (index > -1) {
        this.authStateListeners.splice(index, 1);
      }
    };
  }

  /**
   * Get current user's ID token
   */
  async getCurrentUserToken(): Promise<string | null> {
    try {
      const user = auth.currentUser;
      if (user) {
        return await user.getIdToken();
      }
      return null;
    } catch (error) {
      console.error('Error getting user token:', error);
      return null;
    }
  }

  /**
   * Get user-friendly error messages
   */
  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/user-not-found':
        return 'No account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      default:
        return 'An error occurred. Please try again.';
    }
  }
}

// Export singleton instance
export const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;
