# 🔑 Your Supabase Credentials

Based on your provided credentials, here's your configuration:

## ✅ What You Have

- **Project Reference**: `jmntfhcjvxlyxlyipgvk`
- **Supabase URL**: `https://jmntfhcjvxlyxlyipgvk.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbnRmaGNqdnhseXhseWlwZ3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNjcxMzUsImV4cCI6MjA3Nzc0MzEzNX0.v0Qi0rGEqyx3JpAq5UYXPoDELLk-kSQyCLSEO1NKWwM`
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbnRmaGNqdnhseXhseWlwZ3ZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjE2NzEzNSwiZXhwIjoyMDc3NzQzMTM1fQ.4Yb9QYYqMcZwsJZ80abpm_suVAjIVNvosjeItWDRaU0` ✅
- **Database Password**: `0692151207@Lj` ✅

## ✅ Complete Configuration

All credentials are now configured!

### Connection String

Your connection string with URL-encoded password (`@` becomes `%40`):
```
postgresql://postgres:0692151207%40Lj@db.jmntfhcjvxlyxlyipgvk.supabase.co:5432/postgres
```

## 📝 Your `.env` File Configuration

Add these to your `backend/.env` file:

```env
# Supabase Configuration
SUPABASE_URL=https://jmntfhcjvxlyxlyipgvk.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbnRmaGNqdnhseXhseWlwZ3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNjcxMzUsImV4cCI6MjA3Nzc0MzEzNX0.v0Qi0rGEqyx3JpAq5UYXPoDELLk-kSQyCLSEO1NKWwM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbnRmaGNqdnhseXhseWlwZ3ZrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjE2NzEzNSwiZXhwIjoyMDc3NzQzMTM1fQ.4Yb9QYYqMcZwsJZ80abpm_suVAjIVNvosjeItWDRaU0
SUPABASE_DB_PASSWORD=0692151207@Lj

# Database Connection (Supabase PostgreSQL)
# Note: @ in password is URL-encoded as %40
DATABASE_URL=postgresql://postgres:0692151207%40Lj@db.jmntfhcjvxlyxlyipgvk.supabase.co:5432/postgres
```

## 🚀 Quick Steps to Complete Setup

1. **Get Service Role Key:**
   - Go to: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/api
   - Find "service_role" key (secret)
   - Copy it to `SUPABASE_SERVICE_ROLE_KEY`

2. **Get Database Password:**
   - Go to: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/database
   - Copy or reset your database password
   - Add to `SUPABASE_DB_PASSWORD`

3. **Construct Connection String:**
   - Replace `[YOUR_DATABASE_PASSWORD]` in `DATABASE_URL`
   - URL-encode special characters if needed
   - Example: If password is `MyP@ssw0rd!`, use `MyP%40ssw0rd%21`

4. **Test Connection:**
   ```bash
   cd backend
   npm run dev
   ```
   You should see: `✅ Database connection has been established successfully.`

## 🔗 Direct Links to Your Supabase Dashboard

- **API Settings**: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/api
- **Database Settings**: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk/settings/database
- **Project Dashboard**: https://app.supabase.com/project/jmntfhcjvxlyxlyipgvk

## ⚠️ Security Notes

- **Anon Key**: Safe to use in frontend (respects RLS)
- **Service Role Key**: ⚠️ **NEVER expose to frontend!** Only use in backend
- **Database Password**: Keep secure and never commit to Git
- Add `.env` to `.gitignore` if not already there

