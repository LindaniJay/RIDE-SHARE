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
  // Firebase user methods
  getIdToken: () => Promise<string>;
  name?: string;
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
          // Only check admin claims if we're on an admin page
          const currentPath = window.location.pathname;
          if (!currentPath.startsWith('/admin')) {
            // Not on admin page, don't check admin claims
            return;
          }

          // Check if user has admin custom claims
          const token = await firebaseUser.getIdToken(true); // Force refresh to get latest claims
          const decodedToken = await this.decodeToken(token);
          
          if (decodedToken.admin || decodedToken.role === 'admin') {
            const adminData = await this.getAdminData(firebaseUser.uid);
            this.currentAdmin = adminData;
          } else {
            console.log('User is not an admin, signing out');
            await this.logoutAdmin();
            this.currentAdmin = null;
          }
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
   * Decode Firebase token to check custom claims
   */
  private async decodeToken(token: string): Promise<any> {
    try {
      // Use Firebase's built-in token verification
      const response = await fetch('http://localhost:5001/api/auth/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        const data = await response.json();
        return data.decodedToken || {};
      } else {
        console.error('Token verification failed:', response.status);
        // Fallback: try admin-specific verification endpoint
        return await this.verifyAdminToken(token);
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      // Fallback: try admin-specific verification endpoint
      return await this.verifyAdminToken(token);
    }
  }

  /**
   * Verify admin token using admin-specific endpoint
   */
  private async verifyAdminToken(token: string): Promise<any> {
    try {
      const response = await fetch('http://localhost:5001/api/admin-auth/verify-admin-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      if (response.ok) {
        const data = await response.json();
        return data.decodedToken || {};
      } else {
        throw new Error('Admin token verification failed');
      }
    } catch (error) {
      console.error('Admin token verification failed:', error);
      throw error;
    }
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

      const firebaseUser = auth.currentUser;
      const adminData: AdminUser = {
        uid: uid,
        id: uid,
        email: userData.email,
        firstName: userData.firstName || 'Admin',
        lastName: userData.lastName || 'User',
        role: 'admin' as const,
        isAdmin: true as const,
        createdAt: userData.createdAt?.toDate() || new Date(),
        getIdToken: () => firebaseUser?.getIdToken() || Promise.reject('No Firebase user'),
        name: `${userData.firstName || 'Admin'} ${userData.lastName || 'User'}`.trim()
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
      
      // Authenticate with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );
      
      const firebaseUser = userCredential.user;
      console.log('Firebase authentication successful');
      
      // Get fresh token to check custom claims
      const token = await firebaseUser.getIdToken(true);
      const decodedToken = await this.decodeToken(token);
      
      console.log('Decoded token claims:', decodedToken);
      
      // Check if user has admin claims
      if (!decodedToken.admin && decodedToken.role !== 'admin') {
        console.error('User does not have admin privileges');
        await this.logoutAdmin();
        throw new Error('Admin privileges required. Please contact system administrator.');
      }
      
      // Get admin data from Firestore
      const adminData = await this.getAdminData(firebaseUser.uid);
      
      this.currentAdmin = adminData;
      console.log('Admin login successful:', adminData);
      return adminData;
    } catch (error: any) {
      console.error('Admin login error:', error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/user-not-found') {
        throw new Error('Admin account not found. Please contact system administrator.');
      } else if (error.code === 'auth/wrong-password') {
        throw new Error('Invalid password. Please try again.');
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many failed attempts. Please try again later.');
      } else if (error.message.includes('Admin privileges required')) {
        throw error;
      } else {
        throw new Error('Admin login failed. Please try again.');
      }
    }
  }

  /**
   * Sign out the current admin
   */
  async logoutAdmin(): Promise<void> {
    try {
      console.log('Logging out admin');
      await signOut(auth);
      this.currentAdmin = null;
      console.log('Admin logout successful');
    } catch (error: any) {
      console.error('Admin logout error:', error);
      throw new Error('Failed to sign out. Please try again.');
    }
  }

  /**
   * Get the current admin
   */
  getCurrentAdmin(): AdminUser | null {
    return this.currentAdmin;
  }

  /**
   * Check if current user is admin
   */
  isAdmin(): boolean {
    return this.currentAdmin !== null && this.currentAdmin.isAdmin;
  }

  /**
   * Add auth state listener
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
   * Get current admin's ID token
   */
  async getCurrentAdminToken(): Promise<string | null> {
    try {
      const user = auth.currentUser;
      if (user && this.currentAdmin) {
        return await user.getIdToken();
      }
      return null;
    } catch (error) {
      console.error('Error getting admin token:', error);
      return null;
    }
  }

  /**
   * Force refresh admin token and claims
   */
  async refreshAdminClaims(): Promise<boolean> {
    try {
      const user = auth.currentUser;
      if (!user) return false;

      // Force refresh token to get latest claims
      const token = await user.getIdToken(true);
      const decodedToken = await this.decodeToken(token);
      
      if (decodedToken.admin || decodedToken.role === 'admin') {
        const adminData = await this.getAdminData(user.uid);
        this.currentAdmin = adminData;
        return true;
      } else {
        await this.logoutAdmin();
        return false;
      }
    } catch (error) {
      console.error('Error refreshing admin claims:', error);
      return false;
    }
  }
}

// Export singleton instance
export const adminAuthService = new AdminAuthService();
export default adminAuthService;
