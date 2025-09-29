const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

// Database path
const dbPath = path.join(__dirname, 'database.sqlite');

const adminUsers = [
  {
    firstName: 'Jonase',
    lastName: 'Admin',
    email: 'jonase@rideshare.co.za',
    password: 'Jonase123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4567',
    isEmailVerified: 1
  },
  {
    firstName: 'Anitha',
    lastName: 'Admin',
    email: 'anitha@rideshare.co.za',
    password: 'Anitha123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4568',
    isEmailVerified: 1
  },
  {
    firstName: 'Toni',
    lastName: 'Admin',
    email: 'toni@rideshare.co.za',
    password: 'Toni123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4569',
    isEmailVerified: 1
  },
  {
    firstName: 'Soso',
    lastName: 'Admin',
    email: 'soso@rideshare.co.za',
    password: 'Soso123!',
    role: 'admin',
    phoneNumber: '+27 21 123 4570',
    isEmailVerified: 1
  }
];

async function createAdminUsers() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('❌ Error opening database:', err.message);
        reject(err);
        return;
      }
      console.log('✅ Connected to SQLite database');
    });

    // Create users table if it doesn't exist
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'renter',
        phone_number TEXT,
        is_email_verified INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `;

    db.run(createTableSQL, (err) => {
      if (err) {
        console.error('❌ Error creating table:', err.message);
        reject(err);
        return;
      }
      console.log('✅ Users table ready');
    });

    // Process each admin user
    let processed = 0;
    const total = adminUsers.length;

    adminUsers.forEach(async (adminData) => {
      try {
        // Check if user already exists
        const checkSQL = 'SELECT id FROM users WHERE email = ?';
        db.get(checkSQL, [adminData.email], async (err, row) => {
          if (err) {
            console.error(`❌ Error checking user ${adminData.email}:`, err.message);
            return;
          }

          if (row) {
            console.log(`⚠️  Admin user ${adminData.email} already exists, skipping...`);
            processed++;
            if (processed === total) {
              db.close();
              resolve();
            }
            return;
          }

          // Hash the password
          const passwordHash = await bcrypt.hash(adminData.password, 12);
          
          // Insert admin user
          const insertSQL = `
            INSERT INTO users (name, email, passwordHash, role, phoneNumber, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `;
          
          const now = new Date().toISOString();
          db.run(insertSQL, [
            `${adminData.firstName} ${adminData.lastName}`,
            adminData.email,
            passwordHash,
            adminData.role,
            adminData.phoneNumber,
            now,
            now
          ], function(err) {
            if (err) {
              console.error(`❌ Error creating user ${adminData.email}:`, err.message);
            } else {
              console.log(`✅ Created admin user: ${adminData.firstName} (${adminData.email})`);
            }
            
            processed++;
            if (processed === total) {
              console.log('\n🎉 All admin users processed!');
              console.log('\n📋 Admin Login Credentials:');
              console.log('================================');
              adminUsers.forEach(admin => {
                console.log(`👤 ${admin.firstName}: ${admin.email} / ${admin.password}`);
              });
              console.log('================================');
              db.close();
              resolve();
            }
          });
        });
      } catch (error) {
        console.error(`❌ Error processing ${adminData.email}:`, error);
        processed++;
        if (processed === total) {
          db.close();
          resolve();
        }
      }
    });
  });
}

// Run the script
createAdminUsers().then(() => {
  console.log('✅ Script completed successfully!');
  process.exit(0);
}).catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});
