# RideShare - Peer-to-Peer Vehicle Rental Platform

A full-stack production-ready platform for peer-to-peer vehicle rentals including cars, trailers, trucks, and other vehicles.

## 🚀 Features

### Core Functionality
- **User Management**: Signup, login, role-based access (renter, host, admin)
- **Vehicle Listings**: Create, edit, delete vehicles with image uploads
- **Booking System**: Request/approve bookings with calendar management
- **Payments**: Stripe integration with secure checkout and refunds
- **Real-time Messaging**: Socket.IO chat between hosts and renters
- **Dashboards**: Separate interfaces for renters, hosts, and admins

### Technical Features
- **Authentication**: JWT with access/refresh tokens and rotation
- **Database**: PostgreSQL with Sequelize ORM
- **Frontend**: React + TypeScript + Vite + TailwindCSS + shadcn/ui
- **Backend**: Node.js + Express + TypeScript
- **Testing**: Comprehensive test suite with Vitest, React Testing Library, and Playwright
- **Deployment**: Docker containers with CI/CD pipeline

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite for build tooling
- TailwindCSS + shadcn/ui for styling
- Framer Motion for animations
- React Router for navigation
- Axios for API calls
- React Context for state management

### Backend
- Node.js + Express + TypeScript
- Sequelize ORM + PostgreSQL
- JWT authentication
- Stripe for payments
- Socket.IO for real-time features
- Zod for validation

### DevOps
- Docker + Docker Compose
- GitHub Actions CI/CD
- Render (backend hosting)
- Vercel (frontend hosting)

## 📁 Project Structure

```
ridesharex/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── layouts/        # Layout components
│   │   ├── context/        # React Context providers
│   │   ├── hooks/          # Custom React hooks
│   │   └── __tests__/      # Frontend tests
│   ├── package.json
│   └── Dockerfile
├── backend/                 # Express backend application
│   ├── src/
│   │   ├── models/         # Sequelize models
│   │   ├── migrations/     # Database migrations
│   │   ├── seeders/        # Database seeders
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route controllers
│   │   ├── services/       # Business logic
│   │   ├── middlewares/    # Express middlewares
│   │   ├── utils/          # Utility functions
│   │   └── tests/          # Backend tests
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml       # Development environment
├── docker-compose.prod.yml  # Production environment
├── .github/workflows/       # CI/CD pipelines
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose
- PostgreSQL (or use Docker)
- Git

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ridesharex
   ```

2. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Or run locally**
   ```bash
   # Backend
   cd backend
   npm install
   npm run dev
   
   # Frontend (new terminal)
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Database: localhost:5432

### Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env)**
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/ridesharex
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### E2E Tests
```bash
cd frontend
npm run test:e2e
```

## 🚀 Deployment

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy automatically via GitHub Actions

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically via GitHub Actions

### Manual Deployment
```bash
# Build and deploy
docker-compose -f docker-compose.prod.yml up -d
```

## 📚 API Documentation

The API documentation is available at `/api/docs` when running the backend server.

### Key Endpoints

**Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

**Vehicles**
- `GET /api/vehicles` - List vehicles with filters
- `POST /api/vehicles` - Create vehicle (host only)
- `GET /api/vehicles/:id` - Get vehicle details
- `PUT /api/vehicles/:id` - Update vehicle (host only)
- `DELETE /api/vehicles/:id` - Delete vehicle (host only)

**Bookings**
- `GET /api/bookings` - List user bookings
- `POST /api/bookings` - Create booking
- `PUT /api/bookings/:id` - Update booking status
- `DELETE /api/bookings/:id` - Cancel booking

**Payments**
- `POST /api/payments/create-checkout` - Create Stripe checkout session
- `POST /api/payments/webhook` - Stripe webhook handler

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@ridesharex.com or create an issue in the GitHub repository.
