# Database Setup Guide

This guide explains how to set up the database with migrations and seed data for the South African peer-to-peer rental marketplace.

## Prerequisites

- Node.js and npm installed
- PostgreSQL database running
- Environment variables configured in `.env`

## Database Configuration

Make sure your `.env` file contains the database connection details:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ridesharex
DB_USER=your_username
DB_PASSWORD=your_password
```

## Running Migrations

1. **Run all migrations:**
   ```bash
   npm run db:migrate
   ```

2. **Run specific migration:**
   ```bash
   npx sequelize-cli db:migrate --to 20241201000001-create-users.js
   ```

3. **Rollback migrations:**
   ```bash
   npx sequelize-cli db:migrate:undo
   ```

## Running Seeders

1. **Run all seeders:**
   ```bash
   npm run db:seed
   ```

2. **Run specific seeder:**
   ```bash
   npx sequelize-cli db:seed --seed 20241201000001-demo-users.js
   ```

3. **Undo seeders:**
   ```bash
   npx sequelize-cli db:seed:undo:all
   ```

**Note:** The `.sequelizerc` file has been configured to use the `src/` directory structure for migrations and seeders.

## Complete Setup

To set up the entire database with migrations and seed data:

```bash
npm run db:setup
```

This will:
1. Run all migrations to create tables
2. Run all seeders to populate test data

## Database Schema

### Tables Created

1. **users** - User accounts with roles (renter, host, admin)
2. **listings** - Vehicle listings with approval workflow
3. **bookings** - Rental bookings between renters and hosts
4. **reviews** - Reviews and ratings for listings

### Seed Data

The seeders create:

- **1 Admin user** (admin@rentza.co.za)
- **2 Host users** (host1@rentza.co.za, host2@rentza.co.za)
- **3 Renter users** (renter1@rentza.co.za, renter2@rentza.co.za, renter3@rentza.co.za)
- **3 Listings** with different statuses (approved, pending, declined)
- **2 Bookings** with different statuses
- **2 Reviews** for completed bookings

## API Endpoints

### Listings
- `GET /api/listings` - Get all approved listings (public)
- `GET /api/listings/:id` - Get specific listing
- `POST /api/listings` - Create listing (host only)
- `PUT /api/listings/:id` - Update listing (host only)
- `PUT /api/listings/:id/approve` - Approve/decline listing (admin only)
- `GET /api/listings/host/my-listings` - Get host's listings
- `GET /api/listings/admin/pending` - Get pending listings (admin only)

### Bookings
- `GET /api/bookings` - Get user's bookings
- `GET /api/bookings/:id` - Get specific booking
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/:id` - Update booking
- `POST /api/bookings/:id/cancel` - Cancel booking

### Reviews
- `GET /api/reviews/listing/:listingId` - Get reviews for listing
- `GET /api/reviews/my-reviews` - Get user's reviews
- `POST /api/reviews` - Create review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## Workflow

1. **Host** creates a listing (status: pending)
2. **Admin** reviews and approves/declines the listing
3. **Renter** can book approved listings
4. **Renter** can leave reviews after completed bookings

## Testing the Setup

1. Start the backend server:
   ```bash
   npm run dev
   ```

2. Login as different users to test the workflow:
   - Admin: admin@rentza.co.za / password123
   - Host: host1@rentza.co.za / password123
   - Renter: renter1@rentza.co.za / password123

3. Check the dashboards to see the seeded data in action.

## Troubleshooting

- If migrations fail, check your database connection
- If seeders fail, ensure migrations ran successfully first
- Check the console for detailed error messages
- Verify your database user has proper permissions
