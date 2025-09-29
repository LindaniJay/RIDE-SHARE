import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'renter' | 'host' | 'admin';
  phone?: string;
  isEmailVerified: boolean;
  createdAt: string;
}

export class FirebaseAuthService {
  // Sign in with email and password
  static async signIn(email: string, password: string): Promise<UserProfile> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Get user profile from Firestore
      const userProfile = await this.getUserProfile(user.uid);
      return userProfile;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Register new user
  static async register(
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    role: 'renter' | 'host' = 'renter',
    phone?: string
  ): Promise<UserProfile> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`
      });

      // Send email verification
      await sendEmailVerification(user);

      // Create user profile in Firestore
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email!,
        firstName,
        lastName,
        role,
        phone: phone || '',
        isEmailVerified: false,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'users', user.uid), userProfile);

      return userProfile;
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Sign out
  static async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error: any) {
      throw new Error('Failed to sign out');
    }
  }

  // Get current user profile
  static async getCurrentUser(): Promise<UserProfile | null> {
    const user = auth.currentUser;
    if (!user) return null;

    try {
      return await this.getUserProfile(user.uid);
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Get user profile from Firestore
  static async getUserProfile(uid: string): Promise<UserProfile> {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (!userDoc.exists()) {
        throw new Error('User profile not found');
      }
      return userDoc.data() as UserProfile;
    } catch (error) {
      throw new Error('Failed to get user profile');
    }
  }

  // Update user profile
  static async updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
    try {
      await setDoc(doc(db, 'users', uid), updates, { merge: true });
    } catch (error) {
      throw new Error('Failed to update user profile');
    }
  }

  // Reset password
  static async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Listen to auth state changes
  static onAuthStateChanged(callback: (user: UserProfile | null) => void): () => void {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userProfile = await this.getUserProfile(user.uid);
          callback(userProfile);
        } catch (error) {
          console.error('Error getting user profile:', error);
          callback(null);
        }
      } else {
        callback(null);
      }
    });
  }

  // Get Firebase ID token
  static async getIdToken(): Promise<string | null> {
    const user = auth.currentUser;
    if (!user) return null;
    
    try {
      return await user.getIdToken();
    } catch (error) {
      console.error('Error getting ID token:', error);
      return null;
    }
  }

  // Error message mapping
  private static getErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'No user found with this email address.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
      'auth/network-request-failed': 'Network error. Please check your connection.',
    };

    return errorMessages[errorCode] || 'An error occurred. Please try again.';
  }
}
