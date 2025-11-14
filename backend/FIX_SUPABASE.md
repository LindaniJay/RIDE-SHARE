# 🔧 Fix Supabase Database - Complete Guide

This guide will help you fix your Supabase database connection issues.

## 🚀 Quick Fix

Run the automated fix script:

```bash
npm run fix:supabase
```

This script will:
1. ✅ Check if your Supabase project is accessible
2. ✅ Test different PostgreSQL connection formats
3. ✅ Update your .env file with working configuration
4. ✅ Provide specific recommendations

## 📋 Current Status

Based on the diagnostic results, your Supabase project `jmntfhcjvxlyxlyipgvk` appears to be **UNAVAILABLE**.

### Possible Issues:

1. **Project is Paused** (Most Common)
   - Free tier projects pause after 7 days of inactivity
   - Solution: Restore from Supabase dashboard

2. **Project was Deleted**
   - Solution: Create a new project

3. **Network/Firewall Issue**
   - Solution: Check your network settings

## 🔍 Step-by-Step Fix

### Step 1: Check Project Status

1. **Go to Supabase Dashboard:**
   - https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk

2. **What to Look For:**
   - **"Paused"** status → Click **"Restore"** button
   - **"Active"** status → Check connection string
   - **Not Found** → Project was deleted, create new one

### Step 2: If Project is Paused

1. Click the **"Restore"** button in the dashboard
2. Wait **2-3 minutes** for reactivation
3. Run verification:
   ```bash
   npm run fix:supabase
   ```

### Step 3: If Project is Active but Connection Fails

1. **Get the Correct Connection String:**
   - Go to: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/database
   - Scroll to **"Connection string"** section
   - Select **"URI"** tab
   - Choose **"Direct connection"** or **"Session mode"**
   - Copy the connection string

2. **Update .env File:**
   ```env
   DATABASE_URL=postgresql://postgres.[PROJECT_REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
   ```
   
   **Important:** URL-encode special characters in password:
   - `@` becomes `%40`
   - Example: If password is `0692151207@Lj`, use `0692151207%40Lj`

3. **Test Connection:**
   ```bash
   npm run test:supabase:comprehensive
   ```

### Step 4: If Project Doesn't Exist

You'll need to create a new Supabase project:

1. **Create New Project:**
   - Go to: https://app.supabase.com
   - Click **"New Project"**
   - Enter project details:
     - Name: `ridesharex` (or your preferred name)
     - Database Password: Choose a strong password (save it!)
     - Region: Choose closest to your users
   - Click **"Create new project"**
   - Wait 2-3 minutes for setup

2. **Get Credentials:**
   - **API Settings:** https://app.supabase.com/project/[NEW_PROJECT_REF]/settings/api
     - Copy `SUPABASE_URL`
     - Copy `anon` key → `SUPABASE_ANON_KEY`
     - Copy `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
   
   - **Database Settings:** https://app.supabase.com/project/[NEW_PROJECT_REF]/settings/database
     - Copy connection string → `DATABASE_URL`
     - Note your database password → `SUPABASE_DB_PASSWORD`

3. **Update .env File:**
   ```bash
   npm run setup:supabase:env
   ```
   
   Or manually update `backend/.env`:
   ```env
   SUPABASE_URL=https://[NEW_PROJECT_REF].supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_DB_PASSWORD=your-new-password
   DATABASE_URL=postgresql://postgres.[NEW_PROJECT_REF]:[ENCODED_PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
   ```

4. **Test Connection:**
   ```bash
   npm run fix:supabase
   ```

## 📝 Create Database Tables

Once your connection is working, create all required tables:

```bash
npm run setup:supabase:tables
```

This will:
- Connect to your Supabase database
- Create all tables based on Sequelize models
- Set up indexes and relationships

## 🔍 Diagnostic Commands

```bash
# Comprehensive connection test
npm run test:supabase:comprehensive

# Automated fix script
npm run fix:supabase

# Verify project status
npm run verify:supabase

# Test database connection
npm run db:test
```

## ✅ Verification Checklist

After fixing, verify everything works:

- [ ] Project is active in Supabase dashboard
- [ ] `npm run fix:supabase` shows all tests passing
- [ ] `.env` file has all Supabase variables set
- [ ] `DATABASE_URL` uses correct format with URL-encoded password
- [ ] `npm run db:test` connects successfully
- [ ] Tables are created: `npm run setup:supabase:tables`

## 🔗 Useful Links

- **Your Project Dashboard:** https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk
- **API Settings:** https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/api
- **Database Settings:** https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/database
- **Create New Project:** https://app.supabase.com/new

## 💡 Common Issues & Solutions

### Issue: "ENOTFOUND db.jmntfhcjvxlyxlyipgvk.supabase.co"
**Solution:** Project is paused or deleted. Restore from dashboard or create new project.

### Issue: "Tenant or user not found"
**Solution:** Wrong region in connection string. Get correct connection string from dashboard.

### Issue: "Connection timeout"
**Solution:** Check firewall/network settings. Try different connection mode (direct vs pooler).

### Issue: "Authentication failed"
**Solution:** Password not URL-encoded. Encode `@` as `%40` in connection string.

## 📞 Need Help?

If you're still having issues:

1. Check Supabase status page: https://status.supabase.com
2. Review Supabase docs: https://supabase.com/docs
3. Check your project logs in Supabase dashboard

---

**Last Updated:** Based on current diagnostic results
**Project Reference:** `jmntfhcjvxlyxlyipgvk`



