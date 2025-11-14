# 🔗 Update Supabase Connection String

## ⚠️ Important: Use Session Pooler

Your dashboard shows "Not IPv4 compatible" for Direct connection. On Windows, you need to use **Session Pooler**.

## 📋 Steps to Get Correct Connection String

### Step 1: Switch to Session Pooler

In your Supabase dashboard:

1. **Change "Method" dropdown:**
   - Currently: "Direct connection"
   - Change to: **"Connection pooling"**

2. **Then select:**
   - **"Session mode"** (port 6543)

### Step 2: Copy Connection String

You should see a connection string like:
```
postgresql://postgres.jmntfhcjvxlyxlyipgvk:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
```

### Step 3: Update .env File

1. **Open:** `backend/.env`
2. **Find or add:** `DATABASE_URL=`
3. **Paste the connection string**
4. **Replace `[YOUR-PASSWORD]`** with: `0692151207%40Lj` (password with @ encoded as %40)

**Example:**
```env
DATABASE_URL=postgresql://postgres.jmntfhcjvxlyxlyipgvk:0692151207%40Lj@aws-0-eu-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Important:** 
- Replace `[REGION]` with the actual region shown (e.g., `eu-west-1`, `us-east-1`, `sa-east-1`)
- Keep the `%40` encoding for the `@` in your password

### Step 4: Save and Test

After updating, test the connection:
```bash
npm run verify:restore
```

Then create tables:
```bash
npm run setup:supabase:tables
```

## 🎯 Quick Reference

- **Direct connection:** ❌ Not IPv4 compatible (won't work on Windows)
- **Session Pooler:** ✅ Works on Windows (use this!)
- **Port:** 6543 for Session mode
- **Password encoding:** `@` becomes `%40`



