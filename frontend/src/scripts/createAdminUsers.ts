import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

interface AdminUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'admin';
}

const adminUsers: AdminUser[] = [
  {
    email: 'admin@rentza.co.za',
    password: 'password123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin'
  },
  {
    email: 'superadmin@rentza.co.za',
    password: 'password123',
    firstName: 'Super',
    lastName: 'Admin',
    role: 'admin'
  }
];

export async function createAdminUsers() {
  console.log('🔥 Creating Firebase Admin Users...');
  
  for (const adminUser of adminUsers) {
    try {
      console.log(`Creating admin user: ${adminUser.email}`);
      
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        adminUser.email, 
        adminUser.password
      );
      
      const user = userCredential.user;
      
      // Create user profile in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
        phone: '',
        isEmailVerified: true,
        createdAt: new Date().toISOString()
      });
      
      console.log(`Admin user created: ${adminUser.email}`);
      
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log(`User already exists: ${adminUser.email}`);
        
        // Try to sign in and update profile
        try {
          const signInCredential = await signInWithEmailAndPassword(
            auth, 
            adminUser.email, 
            adminUser.password
          );
          
          const user = signInCredential.user;
          
          // Update user profile in Firestore
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: adminUser.email,
            firstName: adminUser.firstName,
            lastName: adminUser.lastName,
            role: adminUser.role,
            phone: '',
            isEmailVerified: true,
            createdAt: new Date().toISOString()
          }, { merge: true });
          
          console.log(`Admin user profile updated: ${adminUser.email}`);
          
        } catch (signInError) {
          console.error(`Error updating user: ${adminUser.email}`, signInError);
        }
      } else {
        console.error(`Error creating user: ${adminUser.email}`, error);
      }
    }
  }
  
  // Sign out after creating users
  await signOut(auth);
  console.log('🔥 Firebase Admin Users setup complete!');
}

// Run the script if called directly
if (typeof window !== 'undefined') {
  // Only run in browser environment
  createAdminUsers().catch(console.error);
}
