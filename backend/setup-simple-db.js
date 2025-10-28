const { Sequelize } = require('sequelize');
const path = require('path');

// Create a simple SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'),
  logging: false
});

async function setupDatabase() {
  try {
    console.log('Setting up database...');
    
    // Create users table
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firebase_uid VARCHAR(255) UNIQUE,
        email VARCHAR(255),
        firstName VARCHAR(255),
        lastName VARCHAR(255),
        display_name VARCHAR(255),
        role VARCHAR(50) DEFAULT 'renter',
        isVerified BOOLEAN DEFAULT 0,
        is_verified BOOLEAN DEFAULT 0,
        profile_image_url VARCHAR(255),
        phone_number VARCHAR(255),
        two_factor_enabled BOOLEAN DEFAULT 0,
        two_factor_secret VARCHAR(255),
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create notifications table
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        title VARCHAR(255),
        message TEXT,
        type VARCHAR(50),
        isRead BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `);

    // Create enhanced_vehicles table
    await sequelize.query(`
      CREATE TABLE IF NOT EXISTS enhanced_vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        host_id INTEGER,
        make VARCHAR(255),
        model VARCHAR(255),
        year INTEGER,
        type TEXT,
        color VARCHAR(255),
        mileage INTEGER,
        transmission TEXT,
        fuel_type TEXT,
        seats INTEGER,
        doors INTEGER,
        engine_size VARCHAR(255),
        vin VARCHAR(255) UNIQUE,
        price_per_day DECIMAL(10,2),
        price_per_week DECIMAL(10,2),
        price_per_month DECIMAL(10,2),
        minimum_rental_days INTEGER DEFAULT 1,
        maximum_rental_days INTEGER,
        is_available BOOLEAN DEFAULT 1,
        features TEXT DEFAULT '[]',
        amenities TEXT DEFAULT '[]',
        safety_features TEXT DEFAULT '[]',
        entertainment_features TEXT DEFAULT '[]',
        insurance_included BOOLEAN DEFAULT 0,
        insurance_provider VARCHAR(255),
        insurance_policy_number VARCHAR(255),
        gps_installed BOOLEAN DEFAULT 0,
        tracking_enabled BOOLEAN DEFAULT 0,
        cover_image VARCHAR(255),
        interior_images TEXT DEFAULT '[]',
        exterior_images TEXT DEFAULT '[]',
        dashboard_images TEXT DEFAULT '[]',
        engine_images TEXT DEFAULT '[]',
        wheel_images TEXT DEFAULT '[]',
        license_images TEXT DEFAULT '[]',
        registration_images TEXT DEFAULT '[]',
        video_tour_url VARCHAR(255),
        video_tour_file VARCHAR(255),
        location TEXT DEFAULT '{}',
        listing_status TEXT DEFAULT 'draft',
        verified BOOLEAN DEFAULT 0,
        verification_date DATETIME,
        verification_notes TEXT,
        ai_verified BOOLEAN DEFAULT 0,
        ai_confidence DECIMAL(3,2) DEFAULT 0,
        extracted_metadata TEXT DEFAULT '{}',
        image_quality_score DECIMAL(3,2) DEFAULT 0,
        listing_completeness_score DECIMAL(3,2) DEFAULT 0,
        host_verification_score DECIMAL(3,2) DEFAULT 0,
        rejection_reason TEXT,
        admin_notes TEXT,
        improvement_suggestions TEXT,
        view_count INTEGER DEFAULT 0,
        inquiry_count INTEGER DEFAULT 0,
        booking_count INTEGER DEFAULT 0,
        rating DECIMAL(3,2) DEFAULT 0,
        rating_count INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        published_at DATETIME,
        last_viewed_at DATETIME,
        FOREIGN KEY (host_id) REFERENCES users(id)
      )
    `);

    console.log('Database setup completed successfully!');
    await sequelize.close();
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();
