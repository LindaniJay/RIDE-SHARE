# RideShareX Backend - Development Guide

## 🏗️ Architecture Overview

This is a production-ready Node.js backend built with TypeScript, Express.js, Sequelize ORM, and Firebase authentication. It supports both PostgreSQL (production) and SQLite (development) databases.

### Technology Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL (production), SQLite (development)
- **ORM**: Sequelize
- **Authentication**: Firebase Admin SDK + JWT
- **Real-time**: Socket.io
- **Security**: Helmet, CORS, Rate limiting, Input sanitization
- **Testing**: Vitest
- **Containerization**: Docker

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts          # Database configuration
│   │   ├── firebase.ts          # Firebase Admin SDK setup
│   │   └── env.ts               # Environment validation
│   ├── middleware/
│   │   ├── auth.ts              # Authentication middleware
│   │   ├── rateLimiter.ts       # Rate limiting
│   │   └── errorHandler.ts      # Error handling
│   ├── models/
│   │   ├── User.ts              # User model
│   │   ├── Listing.ts           # Vehicle listing model
│   │   ├── Booking.ts          # Booking model
│   │   ├── Payment.ts          # Payment model
│   │   ├── Review.ts           # Review model
│   │   ├── Notification.ts     # Notification model
│   │   ├── Document.ts        # Document model
│   │   └── index.ts           # Model associations
│   ├── routes/
│   │   ├── auth.routes.ts      # Authentication routes
│   │   ├── listings.routes.ts  # Vehicle listing routes
│   │   ├── bookings.routes.ts  # Booking routes
│   │   └── payments.routes.ts  # Payment routes
│   ├── services/
│   │   ├── auth.service.ts     # Authentication service
│   │   ├── notification.service.ts # Notification service
│   │   └── payment.service.ts  # Payment service
│   ├── utils/
│   │   ├── logger.ts           # Winston logger
│   │   └── sanitizer.ts        # Input sanitization
│   ├── socket.ts               # Socket.io setup
│   ├── app.ts                  # Express app configuration
│   └── server.ts               # Server startup
├── tests/                      # Test files
├── Dockerfile                  # Production Docker image
├── Dockerfile.dev              # Development Docker image
├── docker-compose.yml          # Production Docker Compose
├── docker-compose.dev.yml      # Development Docker Compose
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (for production)
- Docker (optional)

### Environment Setup

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Configure environment variables:**
   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/ridesharex
   
   # Firebase
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxx@your-project.iam.gserviceaccount.com
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key-32-chars-minimum
   JWT_REFRESH_SECRET=your-super-secret-refresh-key-32-chars-minimum
   
   # CORS
   FRONTEND_URL=http://localhost:5173
   
   # Payments
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   PAYFAST_MERCHANT_ID=your-merchant-id
   PAYFAST_MERCHANT_KEY=your-merchant-key
   PAYFAST_PASSPHRASE=your-passphrase
   PAYFAST_SANDBOX=true
   
   # Email
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@ridesharex.com
   ```

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Run database migrations:**
   ```bash
   npm run db:migrate
   ```

4. **Seed the database:**
   ```bash
   npm run db:seed
   ```

### Development

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Run tests:**
   ```bash
   npm test
   ```

3. **Run tests with coverage:**
   ```bash
   npm run test:coverage
   ```

4. **Lint code:**
   ```bash
   npm run lint
   ```

5. **Format code:**
   ```bash
   npm run format
   ```

## 🐳 Docker Development

### Using Docker Compose

1. **Start development environment:**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

2. **View logs:**
   ```bash
   docker-compose -f docker-compose.dev.yml logs -f backend
   ```

3. **Stop environment:**
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

### Using Docker directly

1. **Build development image:**
   ```bash
   docker build -f Dockerfile.dev -t ridesharex-backend-dev .
   ```

2. **Run container:**
   ```bash
   docker run -p 5000:5000 --env-file .env ridesharex-backend-dev
   ```

## 🗄️ Database Management

### Migrations

1. **Create migration:**
   ```bash
   npx sequelize-cli migration:generate --name migration-name
   ```

2. **Run migrations:**
   ```bash
   npm run db:migrate
   ```

3. **Rollback migration:**
   ```bash
   npx sequelize-cli db:migrate:undo
   ```

### Seeders

1. **Create seeder:**
   ```bash
   npx sequelize-cli seed:generate --name seeder-name
   ```

2. **Run seeders:**
   ```bash
   npm run db:seed
   ```

3. **Undo seeder:**
   ```bash
   npx sequelize-cli db:seed:undo
   ```

## 🔐 Authentication

The backend uses Firebase Admin SDK for authentication with JWT tokens for session management.

### Authentication Flow

1. **Client authenticates with Firebase**
2. **Client sends Firebase ID token to backend**
3. **Backend verifies Firebase token**
4. **Backend issues JWT access and refresh tokens**
5. **Client uses JWT tokens for subsequent requests**

### Protected Routes

All protected routes require a valid JWT token in the Authorization header:

```bash
Authorization: Bearer <jwt_token>
```

### Role-Based Access Control

- **RENTER**: Can book vehicles, make payments, leave reviews
- **HOST**: Can create listings, manage bookings, receive payments
- **ADMIN**: Full access to all features and admin functions

## 💳 Payment Integration

### Stripe Integration

For international payments:

```typescript
// Create payment intent
POST /api/payments/stripe/create-intent
{
  "booking_id": "uuid",
  "amount": 100.00,
  "currency": "USD"
}

// Confirm payment
POST /api/payments/stripe/confirm
{
  "payment_intent_id": "pi_xxx"
}
```

### PayFast Integration

For South African payments:

```typescript
// Create PayFast payment
POST /api/payments/payfast/create
{
  "booking_id": "uuid",
  "amount": 100.00,
  "currency": "ZAR",
  "return_url": "https://app.com/success",
  "cancel_url": "https://app.com/cancel",
  "notify_url": "https://api.com/payments/payfast/notify"
}
```

## 📡 Real-time Features

### Socket.io Events

**Client to Server:**
- `join_chat` - Join booking chat room
- `leave_chat` - Leave booking chat room
- `send_message` - Send chat message
- `typing_start` - Start typing indicator
- `typing_stop` - Stop typing indicator

**Server to Client:**
- `notification` - New notification
- `new_message` - New chat message
- `user_typing` - User typing indicator
- `booking_update` - Booking status update
- `system_announcement` - System-wide announcement

### Usage Example

```typescript
// Client-side
const socket = io('http://localhost:5000', {
  auth: { token: 'jwt_token' }
});

socket.emit('join_chat', 'booking_id');
socket.on('new_message', (message) => {
  console.log('New message:', message);
});
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test auth.test.ts
```

### Test Structure

```
tests/
├── auth.test.ts           # Authentication tests
├── listings.test.ts       # Listing tests
├── bookings.test.ts      # Booking tests
├── payments.test.ts      # Payment tests
└── utils/
    ├── test-helpers.ts   # Test utilities
    └── fixtures.ts       # Test data fixtures
```

## 📊 Monitoring & Logging

### Logging

The application uses Winston for structured logging:

- **Error logs**: `logs/error.log`
- **Combined logs**: `logs/combined.log`
- **Console output**: Development mode

### Health Check

```bash
GET /api/health
```

Response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production",
  "version": "1.0.0"
}
```

## 🚀 Production Deployment

### Docker Production

1. **Build production image:**
   ```bash
   docker build -t ridesharex-backend .
   ```

2. **Run with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

### Environment Variables

Ensure all production environment variables are set:

- Database connection string
- Firebase service account credentials
- JWT secrets (32+ characters)
- Payment provider credentials
- SMTP configuration
- Redis URL (if using)

### Security Checklist

- [ ] All secrets are in environment variables
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] Input validation is in place
- [ ] SQL injection protection (Sequelize ORM)
- [ ] XSS protection (input sanitization)
- [ ] HTTPS is enabled
- [ ] Security headers are set

## 🔧 Troubleshooting

### Common Issues

1. **Database connection failed**
   - Check DATABASE_URL format
   - Ensure database server is running
   - Verify credentials

2. **Firebase authentication failed**
   - Check Firebase service account credentials
   - Verify project ID and private key
   - Ensure Firebase Admin SDK is properly initialized

3. **Payment integration issues**
   - Verify API keys are correct
   - Check webhook URLs are accessible
   - Ensure proper error handling

4. **Socket.io connection issues**
   - Check CORS configuration
   - Verify authentication middleware
   - Ensure proper token format

### Debug Mode

Enable debug logging:

```bash
DEBUG=ridesharex:* npm run dev
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/login` - Login with Firebase token
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/2fa/enable` - Enable 2FA
- `POST /api/auth/2fa/disable` - Disable 2FA

### Listing Endpoints

- `GET /api/listings` - Get all listings
- `GET /api/listings/:id` - Get single listing
- `POST /api/listings` - Create listing
- `PUT /api/listings/:id` - Update listing
- `DELETE /api/listings/:id` - Delete listing

### Booking Endpoints

- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create booking
- `PATCH /api/bookings/:id/approve` - Approve booking
- `PATCH /api/bookings/:id/reject` - Reject booking
- `PATCH /api/bookings/:id/cancel` - Cancel booking

### Payment Endpoints

- `POST /api/payments/stripe/create-intent` - Create Stripe payment
- `POST /api/payments/stripe/confirm` - Confirm Stripe payment
- `POST /api/payments/payfast/create` - Create PayFast payment
- `GET /api/payments` - Get user payments
- `POST /api/payments/:id/refund` - Refund payment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

