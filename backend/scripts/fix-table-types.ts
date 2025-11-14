#!/usr/bin/env ts-node
/**
 * Fix table type mismatches
 * Drops and recreates tables with correct UUID types for user references
 */

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

import { sequelize } from '../src/config/database';
import { logger } from '../src/utils/logger';

async function fixTableTypes() {
  try {
    logger.info('🔧 Fixing table type mismatches...');
    
    await sequelize.authenticate();
    logger.info('✅ Database connection established');
    
    // Drop tables that have type mismatches (in correct order due to foreign keys)
    const tablesToDrop = [
      'enhanced_vehicles',
      'approval_requests',
      'checkpoint_images',
      'checkpoint_items',
      'checkpoints',
      'documents',
      'payments',
      'reviews',
      'images',
      'bookings',
      'listings',
    ];
    
    logger.info('🗑️  Dropping tables with type mismatches...');
    for (const table of tablesToDrop) {
      try {
        await sequelize.query(`DROP TABLE IF EXISTS "${table}" CASCADE;`);
        logger.info(`  ✓ Dropped ${table}`);
      } catch (error: any) {
        logger.warn(`  ⚠️  Could not drop ${table}: ${error.message}`);
      }
    }
    
    logger.info('✅ Tables dropped. Now run: npm run setup:supabase:tables');
    
  } catch (error: any) {
    logger.error('❌ Error fixing table types:', error);
    throw error;
  } finally {
    await sequelize.close();
  }
}

fixTableTypes();



