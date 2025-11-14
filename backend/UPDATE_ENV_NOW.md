# ✅ Update .env File Now

## Connection String from Dashboard

I can see your Session pooler connection string:
```
postgresql://postgres.jmntfhcjvxlyxlyipgvk:[YOUR-PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
```

## 📝 Update Your .env File

1. **Open:** `backend/.env`

2. **Add or update this line:**
   ```env
   DATABASE_URL=postgresql://postgres.jmntfhcjvxlyxlyipgvk:0692151207%40Lj@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
   ```

**Important:** 
- Password is encoded: `0692151207%40Lj` (the `@` becomes `%40`)
- Region: `eu-west-1` ✅
- Port: `5432` (Transaction mode pooler) ✅

## 🚀 Then Create All Tables

After saving the `.env` file, run:

```bash
npm run setup:supabase:tables
```

This will create all tables:
- ✅ users
- ✅ listings
- ✅ bookings
- ✅ payments
- ✅ reviews
- ✅ notifications
- ✅ documents
- ✅ enhanced_vehicles
- ✅ approval_requests
- ✅ checkpoints
- ✅ audit_logs
- ✅ And more!

---

**Copy the DATABASE_URL line above, paste it into `backend/.env`, save, then run the setup command!**



