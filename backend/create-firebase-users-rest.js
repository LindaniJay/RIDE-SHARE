// Create Firebase admin users using REST API
// This script will help you create the admin users in Firebase

const adminUsers = [
  {
    email: 'jonase@rideshare.co.za',
    password: 'Jonase123!',
    displayName: 'Jonase Admin'
  },
  {
    email: 'toni@rideshare.co.za',
    password: 'Toni123!',
    displayName: 'Toni Admin'
  },
  {
    email: 'soso@rideshare.co.za',
    password: 'Soso123!',
    displayName: 'Soso Admin'
  },
  {
    email: 'anitha@rideshare.co.za',
    password: 'Anitha123!',
    displayName: 'Anitha Admin'
  }
];

console.log('🔥 Firebase Admin Users Creation Guide');
console.log('=====================================');
console.log('');
console.log('Since Firebase requires authentication to create users, you have two options:');
console.log('');

console.log('📋 OPTION 1: Manual Creation (Recommended)');
console.log('==========================================');
console.log('1. Go to Firebase Console: https://console.firebase.google.com/');
console.log('2. Select your project');
console.log('3. Go to Authentication → Users');
console.log('4. Click "Add user" for each admin:');
console.log('');

adminUsers.forEach((admin, index) => {
  console.log(`${index + 1}. Email: ${admin.email}`);
  console.log(`   Password: ${admin.password}`);
  console.log(`   Display Name: ${admin.displayName}`);
  console.log('');
});

console.log('5. After creating each user:');
console.log('   - Click on the user');
console.log('   - Go to "Custom claims"');
console.log('   - Add: {"role": "admin", "isAdmin": true}');
console.log('');

console.log('📋 OPTION 2: Using Firebase CLI');
console.log('================================');
console.log('1. Install Firebase CLI: npm install -g firebase-tools');
console.log('2. Login: firebase login');
console.log('3. Run this script: node create-firebase-users-cli.js');
console.log('');

console.log('📋 OPTION 3: Using Firebase REST API (Advanced)');
console.log('===============================================');
console.log('1. Get your Firebase Web API Key from Firebase Console');
console.log('2. Update the script with your API key');
console.log('3. Run: node create-firebase-users-rest.js');
console.log('');

console.log('🔧 Firebase Configuration Check');
console.log('===============================');
console.log('Make sure your Firebase project has:');
console.log('✅ Authentication enabled');
console.log('✅ Email/Password sign-in method enabled');
console.log('✅ Firebase config properly set in frontend');
console.log('');

console.log('📱 Test Admin Login');
console.log('===================');
console.log('After creating users, test at: http://localhost:3001/admin-login');
console.log('');

console.log('🔑 Admin Credentials to Create:');
console.log('================================');
adminUsers.forEach(admin => {
  console.log(`👤 ${admin.displayName}: ${admin.email} / ${admin.password}`);
});
console.log('================================');
console.log('');
console.log('✅ Follow the manual creation steps above to create these users in Firebase!');

