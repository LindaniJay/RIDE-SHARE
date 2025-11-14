#!/usr/bin/env node

/**
 * Verify Supabase After Restore
 * 
 * Run this after restoring your paused Supabase project
 * Usage: node scripts/verify-after-restore.js
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { createClient } = require('@supabase/supabase-js');
const { Client } = require('pg');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://jmntfhcjvxlyxlyipgvk.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_DB_PASSWORD = process.env.SUPABASE_DB_PASSWORD || '0692151207@Lj';

const projectRef = 'jmntfhcjvxlyxlyipgvk';
const encodedPassword = encodeURIComponent(SUPABASE_DB_PASSWORD);

console.log('🔄 Verifying Supabase After Restore\n');
console.log('='.repeat(70));
console.log(`Project: ${projectRef}`);
console.log(`URL: ${SUPABASE_URL}`);
console.log('='.repeat(70) + '\n');

let allTestsPassed = true;

// Test 1: REST API Connection
async function testRestAPI() {
  console.log('📡 Test 1: REST API Connection');
  console.log('-'.repeat(70));
  
  if (!SUPABASE_ANON_KEY) {
    console.log('❌ SUPABASE_ANON_KEY not found in .env');
    return false;
  }
  
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Try a simple query
    const { data, error, status } = await supabase
      .from('_prisma_migrations')
      .select('id')
      .limit(1);
    
    if (error) {
      // These errors mean the connection works, but table doesn't exist (which is OK)
      if (error.code === 'PGRST116' || 
          error.message.includes('does not exist') ||
          error.message.includes('Could not find the table') ||
          error.message.includes('schema cache')) {
        console.log('✅ REST API is working! (Table does not exist, which is expected)');
        console.log(`   Status: ${status}`);
        console.log('   → This is normal for a fresh/restored project');
        return true;
      }
      console.log(`❌ REST API failed: ${error.message}`);
      return false;
    }
    
    console.log('✅ REST API is working!');
    console.log(`   Status: ${status}`);
    return true;
  } catch (error) {
    console.log(`❌ REST API failed: ${error.message}`);
    if (error.code === 'ENOTFOUND') {
      console.log('   → Project may still be restoring. Wait 2-3 minutes and try again.');
    }
    return false;
  }
}

// Test 2: PostgreSQL Direct Connection
async function testPostgreSQL() {
  console.log('\n🗄️  Test 2: PostgreSQL Direct Connection');
  console.log('-'.repeat(70));
  
  if (!SUPABASE_DB_PASSWORD) {
    console.log('❌ SUPABASE_DB_PASSWORD not found in .env');
    return false;
  }
  
  // Try different connection formats
  const connections = [
    {
      label: 'Direct connection (port 5432)',
      url: `postgresql://postgres:${encodedPassword}@db.${projectRef}.supabase.co:5432/postgres`
    },
    {
      label: 'Pooler - Session mode (port 6543) - eu-west-1',
      url: `postgresql://postgres.${projectRef}:${encodedPassword}@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true`
    },
    {
      label: 'Pooler - Transaction mode (port 5432) - eu-west-1',
      url: `postgresql://postgres.${projectRef}:${encodedPassword}@aws-0-eu-west-1.pooler.supabase.com:5432/postgres?pgbouncer=true`
    },
  ];
  
  for (const { label, url } of connections) {
    console.log(`\nTrying: ${label}`);
    const client = new Client({
      connectionString: url,
      ssl: {
        rejectUnauthorized: false
      },
      connectionTimeoutMillis: 10000
    });
    
    try {
      await client.connect();
      const result = await client.query('SELECT NOW(), current_database(), version()');
      console.log(`  ✅ SUCCESS!`);
      console.log(`     Database: ${result.rows[0].current_database}`);
      console.log(`     PostgreSQL: ${result.rows[0].version.split(' ')[0]} ${result.rows[0].version.split(' ')[1]}`);
      console.log(`\n  💡 Use this connection string in your .env:`);
      console.log(`     DATABASE_URL=${url}\n`);
      await client.end();
      return { success: true, url };
    } catch (error) {
      const errorMsg = error.message.substring(0, 80);
      console.log(`  ❌ Failed: ${errorMsg}`);
      if (error.code === 'ENOTFOUND') {
        console.log(`     → Project may still be restoring. Wait a few minutes.`);
      }
    }
  }
  
  return { success: false, url: null };
}

// Test 3: Check Tables
async function checkTables() {
  console.log('\n📊 Test 3: Checking Database Tables');
  console.log('-'.repeat(70));
  
  if (!SUPABASE_DB_PASSWORD) {
    console.log('⚠️  Cannot check tables without database password');
    return;
  }
  
  const url = `postgresql://postgres.${projectRef}:${encodedPassword}@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true`;
  const client = new Client({
    connectionString: url,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000
  });
  
  try {
    await client.connect();
    
    // Check if tables exist
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);
    
    if (result.rows.length === 0) {
      console.log('⚠️  No tables found in database');
      console.log('   → Run: npm run setup:supabase:tables');
    } else {
      console.log(`✅ Found ${result.rows.length} table(s):`);
      result.rows.forEach(row => {
        console.log(`   - ${row.table_name}`);
      });
    }
    
    await client.end();
  } catch (error) {
    console.log(`⚠️  Could not check tables: ${error.message}`);
  }
}

// Main function
async function main() {
  console.log('⏳ Testing connections...\n');
  
  const restApiWorks = await testRestAPI();
  const pgResult = await testPostgreSQL();
  
  if (pgResult.success) {
    await checkTables();
  }
  
  // Summary
  console.log('\n' + '='.repeat(70));
  console.log('📋 Verification Summary');
  console.log('='.repeat(70));
  console.log(`REST API:        ${restApiWorks ? '✅ Working' : '❌ Failed'}`);
  console.log(`PostgreSQL:      ${pgResult.success ? '✅ Working' : '❌ Failed'}`);
  console.log('='.repeat(70));
  
  if (restApiWorks && pgResult.success) {
    console.log('\n🎉 Your Supabase project is restored and working!');
    console.log('\n✅ Next steps:');
    console.log('   1. If tables are missing, run: npm run setup:supabase:tables');
    console.log('   2. Start your server: npm run dev');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some tests failed. This might mean:');
    console.log('   - Project is still restoring (wait 2-3 more minutes)');
    console.log('   - Connection string needs updating');
    console.log('   - Network/firewall issue');
    console.log('\n💡 Try running again in a few minutes:');
    console.log('   npm run fix:supabase');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('\n❌ Fatal error:', error.message);
  process.exit(1);
});

