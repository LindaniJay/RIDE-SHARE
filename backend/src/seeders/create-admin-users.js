const bcrypt = require('bcryptjs');

// Database connection (you may need to adjust this based on your setup)
const { User } = require('../../dist/models');

const adminUsers = [
  {
    firstName: 'Jonase',
    lastName: 'Admin',
    email: 'jonase@rideshare.co.za',
    password: 'Jonase123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4567',
    isEmailVerified: true
  },
  {
    firstName: 'Anitha',
    lastName: 'Admin',
    email: 'anitha@rideshare.co.za',
    password: 'Anitha123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4568',
    isEmailVerified: true
  },
  {
    firstName: 'Toni',
    lastName: 'Admin',
    email: 'toni@rideshare.co.za',
    password: 'Toni123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4569',
    isEmailVerified: true
  },
  {
    firstName: 'Soso',
    lastName: 'Admin',
    email: 'soso@rideshare.co.za',
    password: 'Soso123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4570',
    isEmailVerified: true
  }
];

async function createAdminUsers() {
  try {
    console.log('Creating admin users...');
    
    for (const adminData of adminUsers) {
      // Check if user already exists
      const existingUser = await User.findOne({ where: { email: adminData.email } });
      
      if (existingUser) {
        console.log(`Admin user ${adminData.email} already exists, skipping...`);
        continue;
      }
      
      // Hash the password
      const passwordHash = await bcrypt.hash(adminData.password, 12);
      
      // Create admin user
      const user = await User.create({
        firstName: adminData.firstName,
        lastName: adminData.lastName,
        email: adminData.email,
        passwordHash: passwordHash,
        role: adminData.role,
        phoneNumber: adminData.phoneNumber,
        isEmailVerified: adminData.isEmailVerified
      });
      
      console.log(`✅ Created admin user: ${adminData.firstName} (${adminData.email})`);
    }
    
    console.log('🎉 All admin users created successfully!');
    console.log('\n📋 Admin Login Credentials:');
    console.log('================================');
    adminUsers.forEach(admin => {
      console.log(`👤 ${admin.firstName}: ${admin.email} / ${admin.password}`);
    });
    console.log('================================');
    
  } catch (error) {
    console.error('❌ Error creating admin users:', error);
    process.exit(1);
  }
}

// Run the script
createAdminUsers().then(() => {
  console.log('Script completed successfully!');
  process.exit(0);
}).catch(error => {
  console.error('Script failed:', error);
  process.exit(1);
});
