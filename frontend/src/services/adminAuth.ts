import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  doc, 
  getDoc 
} from 'firebase/firestore';
import { auth, db } from '../config/firebase';

export interface AdminUser {
  uid: string;
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'admin';
  isAdmin: true;
  createdAt: Date;
}

export interface AdminLoginData {
  email: string;
  password: string;
}

class AdminAuthService {
  private currentAdmin: AdminUser | null = null;
  private authStateListeners: ((admin: AdminUser | null) => void)[] = [];

  constructor() {
    // Listen to auth state changes
    onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        try {
          const adminData = await this.getAdminData(firebaseUser.uid);
          this.currentAdmin = adminData;
        } catch (error) {
          console.error('Error fetching admin data:', error);
          this.currentAdmin = null;
        }
      } else {
        this.currentAdmin = null;
      }
      
      // Notify all listeners
      this.authStateListeners.forEach(listener => listener(this.currentAdmin));
    });
  }

  /**
   * Get admin data from Firestore
   */
  private async getAdminData(uid: string): Promise<AdminUser> {
    try {
      console.log('Fetching admin data for UID:', uid);
      const userDoc = await getDoc(doc(db, 'users', uid));
      
      if (!userDoc.exists()) {
        console.error('User document not found in Firestore');
        throw new Error('Admin user not found in database');
      }

      const userData = userDoc.data();
      console.log('User data from Firestore:', userData);
      
      // Verify this is an admin user
      if (userData.role !== 'admin') {
        console.error('User role is not admin:', userData.role);
        throw new Error('User is not an admin. Current role: ' + userData.role);
      }

      const adminData: AdminUser = {
        uid: uid,
        id: uid,
        email: userData.email,
        firstName: userData.firstName || 'Admin',
        lastName: userData.lastName || 'User',
        role: 'admin' as const,
        isAdmin: true as const,
        createdAt: userData.createdAt?.toDate() || new Date()
      };
      
      console.log('Admin data constructed:', adminData);
      return adminData;
    } catch (error) {
      console.error('Error in getAdminData:', error);
      throw error;
    }
  }

  /**
   * Sign in an admin user
   */
  async loginAdmin(data: AdminLoginData): Promise<AdminUser> {
    try {
      console.log('Attempting admin login for:', data.email);
      
      // Sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );
      
      const firebaseUser = userCredential.user;
      console.log('Firebase auth successful, UID:', firebaseUser.uid);
      
      // Get admin data from Firestore
      const adminData = await this.getAdminData(firebaseUser.uid);
      console.log('Admin data retrieved:', adminData);
      
      this.currentAdmin = adminData;
      return adminData;
    } catch (error: any) {
      console.error('Admin login error:', error);
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  /**
   * Sign out the current admin
   */
  async logoutAdmin(): Promise<void> {
    try {
      await signOut(auth);
      this.currentAdmin = null;
    } catch (error: any) {
      console.error('Admin logout error:', error);
      throw new Error('Failed to sign out');
    }
  }

  /**
   * Get current admin user
   */
  getCurrentAdmin(): AdminUser | null {
    return this.currentAdmin;
  }

  /**
   * Listen to admin auth state changes
   */
  onAuthStateChange(callback: (admin: AdminUser | null) => void): () => void {
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
   * Convert Firebase error codes to user-friendly messages
   */
  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No admin account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/user-disabled':
        return 'This admin account has been disabled.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.';
      default:
        return 'Admin login failed. Please check your credentials.';
    }
  }
}

// Export singleton instance
export const adminAuthService = new AdminAuthService();
