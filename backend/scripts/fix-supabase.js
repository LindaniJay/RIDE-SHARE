#!/usr/bin/env node

/**
 * Supabase Database Fix Script
 * 
 * This script helps diagnose and fix Supabase connection issues
 * Run with: node scripts/fix-supabase.js
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const https = require('https');
const { Client } = require('pg');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://jmntfhcjvxlyxlyipgvk.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SUPABASE_DB_PASSWORD = process.env.SUPABASE_DB_PASSWORD || '0692151207@Lj';

// Extract project reference
const urlMatch = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/);
const projectRef = urlMatch ? urlMatch[1] : 'jmntfhcjvxlyxlyipgvk';

console.log('🔧 Supabase Database Fix Script\n');
console.log('='.repeat(70));
console.log(`Project Reference: ${projectRef}`);
console.log(`Supabase URL: ${SUPABASE_URL}`);
console.log('='.repeat(70) + '\n');

// Step 1: Check if project is accessible via REST API
async function checkProjectStatus() {
  console.log('📊 Step 1: Checking Project Status');
  console.log('-'.repeat(70));
  
  if (!SUPABASE_ANON_KEY) {
    console.log('❌ SUPABASE_ANON_KEY is not set in .env file');
    return false;
  }
  
  return new Promise((resolve) => {
    const url = new URL(`${SUPABASE_URL}/rest/v1/`);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      timeout: 10000
    };
    
    const req = https.request(options, (res) => {
      console.log(`✅ Project is accessible (HTTP ${res.statusCode})`);
      console.log(`   Status: ${res.statusCode === 200 ? 'Active' : 'Responding'}`);
      resolve(true);
    });
    
    req.on('error', (error) => {
      if (error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT') {
        console.log('❌ Project is not accessible');
        console.log(`   Error: ${error.message}`);
        console.log('\n💡 This usually means:');
        console.log('   1. Project is PAUSED (most common on free tier)');
        console.log('   2. Project was DELETED');
        console.log('   3. Network/firewall issue');
        console.log('\n📝 Action Required:');
        console.log(`   Go to: https://app.supabase.com/project/${projectRef}`);
        console.log('   - If paused: Click "Restore" button');
        console.log('   - If deleted: Create a new project');
      } else {
        console.log(`❌ Connection error: ${error.message}`);
      }
      resolve(false);
    });
    
    req.on('timeout', () => {
      req.destroy();
      console.log('❌ Connection timeout');
      resolve(false);
    });
    
    req.end();
  });
}

// Step 2: Test PostgreSQL connection with different formats
async function testPostgreSQLConnections() {
  console.log('\n🗄️  Step 2: Testing PostgreSQL Connections');
  console.log('-'.repeat(70));
  
  if (!SUPABASE_DB_PASSWORD) {
    console.log('❌ SUPABASE_DB_PASSWORD is not set in .env file');
    return null;
  }
  
  const encodedPassword = encodeURIComponent(SUPABASE_DB_PASSWORD);
  
  // Try different connection string formats
  const connectionStrings = [
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
  
  for (const { label, url } of connectionStrings) {
    console.log(`\nTesting: ${label}`);
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
      console.log(`  ✅ SUCCESS`);
      console.log(`     Database: ${result.rows[0].current_database}`);
      console.log(`     PostgreSQL: ${result.rows[0].version.split(' ')[0]} ${result.rows[0].version.split(' ')[1]}`);
      await client.end();
      return url;
    } catch (error) {
      const errorMsg = error.message.substring(0, 100);
      console.log(`  ❌ FAILED: ${errorMsg}`);
      if (error.code === 'ENOTFOUND') {
        console.log(`     → Project hostname not found (project may be paused/deleted)`);
      } else if (error.code === 'XX000') {
        console.log(`     → Tenant not found (wrong region or project deleted)`);
      }
    }
  }
  
  return null;
}

// Step 3: Create/Update .env file with working configuration
async function updateEnvFile(workingConnectionString) {
  console.log('\n📝 Step 3: Updating .env File');
  console.log('-'.repeat(70));
  
  const fs = require('fs');
  const path = require('path');
  const envPath = path.resolve(__dirname, '../.env');
  
  let envContent = '';
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }
  
  // Update or add Supabase configuration
  const updates = {
    'SUPABASE_URL': SUPABASE_URL,
    'SUPABASE_ANON_KEY': SUPABASE_ANON_KEY || '',
    'SUPABASE_SERVICE_ROLE_KEY': SUPABASE_SERVICE_ROLE_KEY || '',
    'SUPABASE_DB_PASSWORD': SUPABASE_DB_PASSWORD,
  };
  
  if (workingConnectionString) {
    updates['DATABASE_URL'] = workingConnectionString;
  }
  
  // Update env content
  let lines = envContent.split('\n');
  const existingKeys = new Set();
  
  // Update existing lines
  lines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return line;
    
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      
      if (updates.hasOwnProperty(key)) {
        existingKeys.add(key);
        return `${key}=${updates[key]}`;
      }
      return line;
    }
    return line;
  });
  
  // Add missing keys
  for (const [key, value] of Object.entries(updates)) {
    if (!existingKeys.has(key) && value) {
      // Add after DATABASE_URL or at the end
      const dbUrlIndex = lines.findIndex(line => line.includes('DATABASE_URL'));
      if (dbUrlIndex >= 0 && key === 'DATABASE_URL') {
        lines[dbUrlIndex] = `DATABASE_URL=${value}`;
      } else if (!existingKeys.has(key)) {
        // Add new line
        const insertIndex = lines.findIndex(line => 
          line.includes('SUPABASE') || line.includes('DATABASE_URL')
        );
        if (insertIndex >= 0) {
          lines.splice(insertIndex + 1, 0, `${key}=${value}`);
        } else {
          lines.push(`${key}=${value}`);
        }
      }
    }
  }
  
  // Write updated .env
  fs.writeFileSync(envPath, lines.join('\n'), 'utf8');
  console.log('✅ .env file updated');
  
  if (workingConnectionString) {
    console.log(`   DATABASE_URL: ${workingConnectionString.split('@')[1]}`);
  }
}

// Step 4: Provide recommendations
function provideRecommendations(projectAccessible, postgresWorking) {
  console.log('\n' + '='.repeat(70));
  console.log('📋 Recommendations');
  console.log('='.repeat(70));
  
  if (!projectAccessible) {
    console.log('\n❌ Project is not accessible. You need to:');
    console.log('\n1. Check Project Status:');
    console.log(`   → Go to: https://app.supabase.com/project/${projectRef}`);
    console.log('   → Look for "Paused" status');
    console.log('   → Click "Restore" if paused');
    console.log('   → Wait 2-3 minutes for reactivation');
    
    console.log('\n2. If Project is Deleted:');
    console.log('   → Create a new Supabase project');
    console.log('   → Get new credentials from dashboard');
    console.log('   → Update .env file with new credentials');
    
    console.log('\n3. After Project is Active:');
    console.log('   → Run: npm run test:supabase:comprehensive');
    console.log('   → Run: npm run setup:supabase:tables');
  } else if (!postgresWorking) {
    console.log('\n⚠️  REST API works but PostgreSQL connection failed');
    console.log('\n1. Get Connection String from Dashboard:');
    console.log(`   → Go to: https://app.supabase.com/project/${projectRef}/settings/database`);
    console.log('   → Copy the connection string');
    console.log('   → Update DATABASE_URL in .env file');
    console.log('   → Make sure password is URL-encoded (@ becomes %40)');
  } else {
    console.log('\n✅ Everything is working!');
    console.log('\nNext steps:');
    console.log('   → Run: npm run setup:supabase:tables (to create tables)');
    console.log('   → Run: npm run dev (to start server)');
  }
}

// Main function
async function main() {
  const projectAccessible = await checkProjectStatus();
  const postgresConnection = await testPostgreSQLConnections();
  
  if (postgresConnection) {
    await updateEnvFile(postgresConnection);
  }
  
  provideRecommendations(projectAccessible, !!postgresConnection);
  
  console.log('\n' + '='.repeat(70));
  if (projectAccessible && postgresConnection) {
    console.log('✅ Supabase is configured and working!');
    process.exit(0);
  } else {
    console.log('⚠️  Supabase needs attention. See recommendations above.');
    process.exit(1);
  }
}

// Run
main().catch((error) => {
  console.error('\n❌ Fatal error:', error.message);
  process.exit(1);
});



