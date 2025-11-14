# 🔗 Get Session Pooler Connection String

## ✅ Pooler Settings Look Good

Your pooler configuration is fine with default settings:
- Pool Size: 15 ✅
- Max Client Connections: 200 ✅

## 📋 Next Steps to Get Connection String

### Step 1: Go Back to Connection String Tab

1. **Click "Cancel" or navigate back** to the "Connection String" tab
2. You should see the connection string options again

### Step 2: Select Session Pooler

1. **Make sure "Method" is set to:** "Connection pooling"
2. **Select:** "Session mode" (port 6543)
3. **Copy the connection string** that appears

It should look like:
```
postgresql://postgres.jmntfhcjvxlyxlyipgvk:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
```

### Step 3: Update .env File

1. **Open:** `backend/.env`
2. **Add or update:**
   ```env
   DATABASE_URL=postgresql://postgres.jmntfhcjvxlyxlyipgvk:0692151207%40Lj@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
   ```

**Important:**
- Replace `[REGION]` with the actual region from your connection string
- Password is already encoded: `0692151207%40Lj` (the `@` becomes `%40`)

### Step 4: Create All Tables

After updating `.env`, run:

```bash
npm run setup:supabase:tables
```

This will create all 15+ tables for your platform!

## 🎯 What You'll Get

All these tables will be created:
- users
- listings  
- bookings
- payments
- reviews
- notifications
- documents
- enhanced_vehicles
- approval_requests
- checkpoints
- checkpoint_items
- checkpoint_images
- audit_logs
- admin_logs
- images

---

**Once you have the Session mode connection string, update `.env` and we'll create all tables!**



