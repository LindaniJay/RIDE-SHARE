# 🔗 Get Supabase Connection String from Dashboard

Since your project is now active, let's get the correct connection string from the dashboard.

## 📋 Step-by-Step Instructions

### Step 1: Go to Database Settings

1. In your Supabase dashboard (where you see "RideShare.SA" project)
2. Click on **"Settings"** in the left sidebar
3. Click on **"Database"** under Settings

**Direct Link:**
👉 https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/database

### Step 2: Find Connection String

1. Scroll down to the **"Connection string"** section
2. You'll see different connection modes:
   - **URI** tab (this is what we need)
   - **JDBC** tab
   - **Golang** tab
   - etc.

3. Click on the **"URI"** tab

4. You'll see connection options:
   - **Direct connection** (port 5432)
   - **Connection pooling** - Transaction mode (port 5432)
   - **Connection pooling** - Session mode (port 6543)

### Step 3: Copy the Connection String

**Recommended:** Use **"Connection pooling - Session mode"** (port 6543)

It should look like:
```
postgresql://postgres.jmntfhcjvxlyxlyipgvk:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
```

**Important:**
- Replace `[YOUR-PASSWORD]` with your actual password: `0692151207@Lj`
- The `@` in the password needs to be URL-encoded as `%40`
- So if password is `0692151207@Lj`, use `0692151207%40Lj` in the connection string

### Step 4: Update .env File

Once you have the connection string, update your `backend/.env` file:

```env
DATABASE_URL=postgresql://postgres.jmntfhcjvxlyxlyipgvk:0692151207%40Lj@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true
```

Replace `[REGION]` with the actual region shown in your connection string (e.g., `eu-west-1`, `us-east-1`, etc.)

### Step 5: Test Connection

After updating, test the connection:

```bash
npm run verify:restore
```

## 🔍 What to Look For

The connection string should contain:
- Your project reference: `jmntfhcjvxlyxlyipgvk`
- A region: `aws-0-[REGION]` (like `eu-west-1`, `us-east-1`, `sa-east-1`)
- Port: `6543` (for session mode) or `5432` (for transaction mode)
- `pgbouncer=true` parameter

## 💡 Quick Copy

If you see the connection string in the dashboard, copy it and:
1. Replace `[YOUR-PASSWORD]` with `0692151207%40Lj` (password with @ encoded)
2. Paste it into `backend/.env` as `DATABASE_URL=`
3. Save the file
4. Run `npm run verify:restore`

---

**Once you have the connection string, share it or update the .env file and we'll test it!**



