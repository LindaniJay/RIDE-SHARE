import { sequelize } from '../config/database';
import { QueryTypes } from 'sequelize';

// Database optimization script
export const optimizeDatabase = async () => {
  try {
    console.log('Starting database optimization...');
    
    // Add indexes for frequently queried fields
    const indexes = [
      // User table indexes
      'CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);',
      'CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);',
      'CREATE INDEX IF NOT EXISTS idx_users_approval_status ON users(approval_status);',
      'CREATE INDEX IF NOT EXISTS idx_users_is_active ON users(is_active);',
      'CREATE INDEX IF NOT EXISTS idx_users_failed_login_attempts ON users(failed_login_attempts);',
      'CREATE INDEX IF NOT EXISTS idx_users_last_login_at ON users(last_login_at);',
      'CREATE INDEX IF NOT EXISTS idx_users_two_factor_enabled ON users(twoFactorEnabled);',
      
      // Listing table indexes
      'CREATE INDEX IF NOT EXISTS idx_listings_status ON listings(status);',
      'CREATE INDEX IF NOT EXISTS idx_listings_host_id ON listings(host_id);',
      'CREATE INDEX IF NOT EXISTS idx_listings_location ON listings(location);',
      'CREATE INDEX IF NOT EXISTS idx_listings_price_per_day ON listings(price_per_day);',
      'CREATE INDEX IF NOT EXISTS idx_listings_type ON listings(type);',
      'CREATE INDEX IF NOT EXISTS idx_listings_created_at ON listings(created_at);',
      'CREATE INDEX IF NOT EXISTS idx_listings_approval_status ON listings(approval_status);',
      
      // Booking table indexes
      'CREATE INDEX IF NOT EXISTS idx_bookings_renter_id ON bookings(renter_id);',
      'CREATE INDEX IF NOT EXISTS idx_bookings_listing_id ON bookings(listing_id);',
      'CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);',
      'CREATE INDEX IF NOT EXISTS idx_bookings_start_date ON bookings(start_date);',
      'CREATE INDEX IF NOT EXISTS idx_bookings_end_date ON bookings(end_date);',
      'CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);',
      
      // Payment table indexes
      'CREATE INDEX IF NOT EXISTS idx_payments_booking_id ON payments(booking_id);',
      'CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);',
      'CREATE INDEX IF NOT EXISTS idx_payments_payment_method ON payments(payment_method);',
      'CREATE INDEX IF NOT EXISTS idx_payments_created_at ON payments(created_at);',
      
      // Review table indexes
      'CREATE INDEX IF NOT EXISTS idx_reviews_booking_id ON reviews(booking_id);',
      'CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);',
      'CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at);',
      
      // Document table indexes
      'CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);',
      'CREATE INDEX IF NOT EXISTS idx_documents_status ON documents(status);',
      'CREATE INDEX IF NOT EXISTS idx_documents_document_type ON documents(document_type);',
      'CREATE INDEX IF NOT EXISTS idx_documents_uploaded_at ON documents(uploaded_at);',
      
      // Admin log table indexes
      'CREATE INDEX IF NOT EXISTS idx_admin_logs_admin_id ON admin_logs(admin_id);',
      'CREATE INDEX IF NOT EXISTS idx_admin_logs_action ON admin_logs(action);',
      'CREATE INDEX IF NOT EXISTS idx_admin_logs_created_at ON admin_logs(created_at);',
      
      // Notification table indexes
      'CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);',
      'CREATE INDEX IF NOT EXISTS idx_notifications_type ON notifications(type);',
      'CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);',
      'CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at);'
    ];
    
    // Execute index creation
    for (const indexQuery of indexes) {
      try {
        await sequelize.query(indexQuery, { type: QueryTypes.RAW });
        console.log(`✓ Created index: ${indexQuery.split('idx_')[1]?.split(' ')[0]}`);
      } catch (error) {
        console.warn(`⚠ Failed to create index: ${error}`);
      }
    }
    
    // Analyze tables for query optimization
    console.log('Analyzing tables for query optimization...');
    const analyzeQueries = [
      'ANALYZE users;',
      'ANALYZE listings;',
      'ANALYZE bookings;',
      'ANALYZE payments;',
      'ANALYZE reviews;',
      'ANALYZE documents;',
      'ANALYZE admin_logs;',
      'ANALYZE notifications;'
    ];
    
    for (const analyzeQuery of analyzeQueries) {
      try {
        await sequelize.query(analyzeQuery, { type: QueryTypes.RAW });
        console.log(`✓ Analyzed: ${analyzeQuery.split(' ')[1]}`);
      } catch (error) {
        console.warn(`⚠ Failed to analyze: ${error}`);
      }
    }
    
    // Vacuum tables to reclaim space
    console.log('Vacuuming tables...');
    const vacuumQueries = [
      'VACUUM users;',
      'VACUUM listings;',
      'VACUUM bookings;',
      'VACUUM payments;',
      'VACUUM reviews;',
      'VACUUM documents;',
      'VACUUM admin_logs;',
      'VACUUM notifications;'
    ];
    
    for (const vacuumQuery of vacuumQueries) {
      try {
        await sequelize.query(vacuumQuery, { type: QueryTypes.RAW });
        console.log(`✓ Vacuumed: ${vacuumQuery.split(' ')[1]}`);
      } catch (error) {
        console.warn(`⚠ Failed to vacuum: ${error}`);
      }
    }
    
    console.log('✅ Database optimization completed successfully!');
    
  } catch (error) {
    console.error('❌ Database optimization failed:', error);
    throw error;
  }
};

// Run optimization if called directly
if (require.main === module) {
  optimizeDatabase()
    .then(() => {
      console.log('Database optimization completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Database optimization failed:', error);
      process.exit(1);
    });
}
