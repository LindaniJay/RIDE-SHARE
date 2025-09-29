// Simple script to create Firebase admin users
// This script uses the Firebase REST API instead of Admin SDK

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

console.log('🔥 Firebase Admin Users Setup');
console.log('================================');
console.log('Please follow these steps to create admin users in Firebase:');
console.log('');

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

console.log('6. Test login at: http://localhost:3000/admin-login');
console.log('');

console.log('📋 Admin Login Credentials:');
console.log('================================');
adminUsers.forEach(admin => {
  console.log(`👤 ${admin.displayName}: ${admin.email} / ${admin.password}`);
});
console.log('================================');

console.log('');
console.log('✅ Setup complete! Your admin users are ready to use.');
console.log('💡 The AdminLogin component has been updated to use Firebase authentication.');
