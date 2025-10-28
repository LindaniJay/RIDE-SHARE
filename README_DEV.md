# RideShare SA — DEV README

## Setup (backend)
1. cd backend
2. cp .env.example .env and fill values
3. npm install
4. npx sequelize-cli db:migrate
5. npx sequelize-cli db:seed:all
6. npm run dev

## Setup (frontend)
1. cd frontend
2. npm install
3. npm run dev

## Running tests
cd backend
npm test

## Applying patch
1. git checkout -b fix/approval-booking
2. git apply rideshare_patch.diff
3. run migrations and seed

## Environment Variables

### Backend (.env)
```
DATABASE_URL=sqlite:./dev.db
JWT_SECRET=change_this_dev_secret
PORT=4000
FRONTEND_URL=http://localhost:5173
UPLOADS_PATH=./uploads
FIREBASE_CREDENTIALS= # optional for firebase
```

## Key Features Added

### Backend Changes
- **Migrations**: New database schema with Users, Vehicles, Images, and Bookings tables
- **Models**: Updated Vehicle, User, and Booking models with proper defaults and relations
- **Routes**: New vehicle creation, admin approval/rejection, and booking endpoints
- **Auth Middleware**: Improved role checking and user validation
- **Static File Serving**: Uploads served via `/uploads` endpoint
- **Socket.io**: Real-time notifications for vehicle approval/rejection

### Frontend Changes
- **Search Page**: Now fetches only approved vehicles and shows "No cars listed" message
- **Admin Dashboard**: Simple approve/reject actions for pending vehicles
- **Auth Hook**: Token-based authentication with API integration

### Database Schema
- **Users**: UUID primary key, role-based access (RENTER/HOST/ADMIN)
- **Vehicles**: Auto-increment ID, owner relationship, status (PENDING/APPROVED/REJECTED)
- **Images**: Vehicle image storage with foreign key relationship
- **Bookings**: Transaction-based booking with conflict prevention

## Testing
The patch includes example test files for:
- Vehicle creation with default PENDING status
- Admin approval/rejection workflows
- Booking conflict prevention
- Authentication and authorization

## Notes
- All new vehicles default to PENDING status
- Only APPROVED vehicles appear in search results
- Admin can approve/reject vehicles with feedback
- Booking system prevents double-booking with database transactions
- Real-time notifications via Socket.io for status changes