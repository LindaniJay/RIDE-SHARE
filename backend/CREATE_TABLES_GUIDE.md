# 📊 Create All Database Tables - Complete Guide

## 🎯 Goal

Create all database tables for RideShare.SA platform including:
- ✅ Users
- ✅ Listings/Vehicles
- ✅ Bookings
- ✅ Payments
- ✅ Reviews
- ✅ Notifications
- ✅ Documents
- ✅ Checkpoints
- ✅ Approval Requests
- ✅ Audit Logs
- ✅ And more...

## ⚠️ Current Issue

The PostgreSQL connection string needs to be updated. The REST API is working, but direct PostgreSQL connection is failing.

## 🔧 Step 1: Get Correct Connection String

### From Supabase Dashboard:

1. **Go to Database Settings:**
   - https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/database

2. **Find Connection String:**
   - Scroll to **"Connection string"** section
   - Click **"URI"** tab
   - Select **"Connection pooling - Session mode"** (port 6543)
   - Click **"Copy"** button

3. **It should look like:**
   ```
   postgresql://postgres.jmntfhcjvxlyxlyipgvk:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
   ```

4. **Important:** 
   - Replace `[YOUR-PASSWORD]` with: `0692151207%40Lj` (password with @ encoded as %40)
   - The `[REGION]` will be something like: `eu-west-1`, `us-east-1`, `sa-east-1`, etc.

### Example:
```
postgresql://postgres.jmntfhcjvxlyxlyipgvk:0692151207%40Lj@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

## 📝 Step 2: Update .env File

1. **Open:** `backend/.env`
2. **Find:** `DATABASE_URL=`
3. **Replace** with the connection string from Step 1
4. **Save** the file

## ✅ Step 3: Create All Tables

Once the connection string is correct, run:

```bash
npm run setup:supabase:tables
```

This will create all tables:
- users
- listings
- bookings
- notifications
- images
- payments
- reviews
- documents
- admin_logs
- checkpoints
- checkpoint_items
- checkpoint_images
- enhanced_vehicles
- approval_requests
- audit_logs

## 📋 What Will Be Created

### Core Tables:
- **users** - User accounts (renters, hosts, admins)
- **listings** - Vehicle listings
- **bookings** - Rental bookings
- **notifications** - User notifications
- **payments** - Payment records
- **reviews** - User reviews

### Enhanced Features:
- **enhanced_vehicles** - Detailed vehicle information
- **documents** - User documents (licenses, IDs)
- **approval_requests** - Vehicle approval workflow
- **checkpoints** - Pre/post trip inspections
- **checkpoint_items** - Inspection items
- **checkpoint_images** - Inspection photos
- **audit_logs** - System audit trail
- **admin_logs** - Admin activity logs

## 🎉 After Tables Are Created

You'll see output like:
```
✅ Database schema synchronized successfully

📋 Created/Updated Tables:
  ✓ approval_requests
  ✓ audit_logs
  ✓ bookings
  ✓ checkpoint_images
  ✓ checkpoint_items
  ✓ checkpoints
  ✓ documents
  ✓ enhanced_vehicles
  ✓ images
  ✓ listings
  ✓ notifications
  ✓ payments
  ✓ reviews
  ✓ users

🎉 Supabase database setup completed successfully!
```

## 🔍 Verify in Dashboard

After creating tables, verify in Supabase:
- Go to: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/editor
- You should see all tables listed in the left sidebar

## 🚀 Next Steps After Tables Are Created

1. **Set up Row Level Security (RLS)** if needed
2. **Create indexes** for better performance
3. **Seed initial data** (optional)
4. **Start your server:** `npm run dev`

---

**Once you have the correct connection string, update `.env` and run:**
```bash
npm run setup:supabase:tables
```



