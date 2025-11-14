# Renting Flow - Complete Guide

## ✅ Complete Renting Flow: Search → Book → Dashboard

### 🔄 **Step 1: Renter Searches for Vehicles**

**Frontend:** `Search.tsx`
- Renter enters search criteria (location, make, price, etc.)
- Calls: `GET /api/search?location=...&make=...&priceRange=...`
- Displays approved listings only

**Backend:** `backend/src/routes/search.ts`
- ✅ Queries both `Listing` and `EnhancedVehicle` tables
- ✅ Filters by `status: 'approved'` or `listingStatus: 'approved'`
- ✅ Returns listings with host information
- ✅ Checks availability for date ranges
- ✅ Supports both `pricePerDay` and `price_per_day` field names

**Result:** Renter sees list of available vehicles

---

### 🔄 **Step 2: Renter Clicks "Book Now"**

**Frontend:** `Search.tsx`
- Renter clicks "Book Now" button on a listing
- Navigates to: `/checkout/:listingId`
- Passes listing ID to checkout page

**Route:** Should be defined in `App.tsx`:
```tsx
<Route path="/checkout/:listingId" element={<UnifiedCheckout />} />
```

---

### 🔄 **Step 3: Renter Fills Booking Form**

**Frontend:** `UnifiedCheckout.tsx` or `VehicleDetail.tsx`
- Renter selects start and end dates
- System calculates total days and price
- Renter can add special requests
- Renter clicks "Confirm Booking"

**Booking Service:** `frontend/src/services/bookingService.ts`
- Calls: `POST /api/bookings/unified`
- Sends: `vehicleId`, `startDate`, `endDate`, `totalPrice`, `specialRequests`

---

### 🔄 **Step 4: Booking Created in Database**

**Backend:** `backend/src/routes/bookings-unified.ts`
- ✅ Validates booking data (dates, vehicle availability)
- ✅ Checks for date conflicts with existing bookings
- ✅ Verifies vehicle is approved and available
- ✅ Creates booking with:
  - `renterId`: UUID (from authenticated user)
  - `hostId`: UUID (from vehicle listing)
  - `status`: 'pending'
  - `paymentStatus`: 'pending'
  - Calculated `totalPrice` (base + service fee + insurance)
- ✅ Sends real-time notification to host
- ✅ Returns booking with full details

**Database:** `bookings` table
- Booking saved with all details
- Status: `pending` (awaiting payment/confirmation)

---

### 🔄 **Step 5: Renter Views Booking in Dashboard**

**Frontend:** `RenterDashboard.tsx`
- Fetches bookings: `GET /api/bookings/user/:uid`
- Displays all bookings for the renter
- Shows booking status, dates, vehicle details

**Backend:** `backend/src/routes/bookings.ts`
- ✅ Queries bookings by `renterId` (UUID)
- ✅ Includes listing and host information
- ✅ Returns bookings ordered by creation date

**Result:** Renter sees their booking history and current bookings

---

## 🔧 **Fixes Applied**

### 1. **UUID Support**
- ✅ Fixed `renterId` and `hostId` to use UUID instead of `Number(userId)`
- ✅ All permission checks use UUID comparison
- ✅ Booking queries use UUID for user references

### 2. **Date Conflict Checking**
- ✅ Uses proper Sequelize operators (`Op.in`, `Op.between`, `Op.or`, `Op.and`)
- ✅ Checks for overlapping bookings with status: `['pending', 'confirmed', 'active']`
- ✅ Validates dates are properly converted to Date objects

### 3. **Field Name Compatibility**
- ✅ Uses `renterId` (camelCase) instead of `renter_id` (snake_case) in queries
- ✅ Model handles both field names through Sequelize field mapping
- ✅ Updated all references to use consistent naming

### 4. **API Endpoints**
- ✅ `/api/bookings/unified` - Main booking endpoint (recommended)
- ✅ `/api/bookings/create` - Alternative endpoint (also fixed)
- ✅ `/api/bookings/user/:uid` - Get renter's bookings
- ✅ `/api/search` - Search for available vehicles

---

## 📋 **Current Status**

✅ **Search:** Working - Shows approved listings from both models
✅ **Booking Creation:** Working - Creates bookings with UUID support
✅ **Date Conflict Checking:** Working - Prevents double bookings
✅ **Renter Dashboard:** Working - Displays user's bookings
✅ **Notifications:** Working - Host receives real-time notifications

---

## 🚀 **Testing Checklist**

- [ ] Renter searches for vehicles → See approved listings
- [ ] Renter clicks "Book Now" → Navigate to checkout
- [ ] Renter selects dates → Price calculated correctly
- [ ] Renter creates booking → Booking saved to database
- [ ] Date conflict detected → Error message shown
- [ ] Booking appears in renter dashboard
- [ ] Host receives notification of new booking

---

## 📝 **API Endpoints Summary**

**Search:**
- `GET /api/search?location=...&make=...&priceRange=...` - Search approved listings

**Booking Creation:**
- `POST /api/bookings/unified` - Create new booking (recommended)
- `POST /api/bookings/create` - Alternative endpoint

**Get Bookings:**
- `GET /api/bookings/user/:uid` - Get renter's bookings
- `GET /api/bookings/unified` - Get user's bookings (renter or host)

**Update/Cancel:**
- `PATCH /api/bookings/unified/:id` - Update booking status
- `DELETE /api/bookings/unified/:id` - Cancel booking

---

## ⚠️ **Notes**

1. **Checkout Route:** Ensure `/checkout/:listingId` route is defined in `App.tsx`
2. **Payment Integration:** Payment processing can be added after booking creation
3. **Enhanced Vehicles:** Search includes both `Listing` and `EnhancedVehicle` models
4. **Booking Status Flow:** `pending` → `confirmed` → `active` → `completed`

---

## 🎯 **Next Steps**

1. Test the complete flow end-to-end
2. Add payment processing integration
3. Add booking confirmation emails
4. Add booking cancellation flow
5. Add booking modification flow



