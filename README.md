# 🚗 RideShare - Peer-to-Peer Vehicle Rental Platform

> **Transform the way people access vehicles** - A modern, secure platform that connects vehicle owners with renters, making transportation more accessible and profitable for everyone.

## 💡 The Idea Behind RideShare

RideShare revolutionizes vehicle rental by creating a **peer-to-peer marketplace** where:
- **Vehicle owners** can monetize their idle vehicles by renting them out
- **Renters** get access to a diverse fleet of vehicles at competitive prices
- **Communities** benefit from reduced vehicle ownership costs and environmental impact

### 🌟 Why RideShare?

**For Vehicle Owners:**
- Turn your idle car into a source of income
- Set your own rental rates and availability
- Built-in insurance and payment protection
- Easy vehicle management dashboard

**For Renters:**
- Access to unique vehicles not available at traditional rental companies
- Competitive pricing from local owners
- Convenient pickup/dropoff locations
- Transparent pricing with no hidden fees

**For the Community:**
- Reduces the need for multiple car ownership
- Promotes sustainable transportation
- Supports local economy
- Reduces traffic congestion

##  Features

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

##  Project Structure

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
- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **Docker & Docker Compose** (Download from [docker.com](https://docker.com/))
- **Git** (Download from [git-scm.com](https://git-scm.com/))

### 🛠️ Development Setup

#### Option 1: Docker (Recommended)
```bash
# 1. Clone the repository
git clone <repository-url>
cd ridesharex

# 2. Start all services with Docker
docker-compose up -d

# 3. Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

#### Option 2: Local Development
```bash
# 1. Clone and setup
git clone <repository-url>
cd ridesharex

# 2. Setup Backend
cd backend
npm install
npm run build
npm run seed  # Seed sample data
npm run dev   # Start backend server

# 3. Setup Frontend (new terminal)
cd ../frontend
npm install
npm run dev   # Start frontend server
```

### 🎯 First Steps After Setup

1. **Visit the application**: http://localhost:3000
2. **Create an account** as either a renter or host
3. **Explore the platform**:
   - Browse available vehicles
   - Create a vehicle listing (if you're a host)
   - Make a test booking
4. **Check the admin panel** for platform statistics

### 📱 What You'll See

- **Beautiful landing page** with South African vehicle categories
- **Advanced search** with filters for location, price, vehicle type
- **Interactive dashboards** for hosts and renters
- **Real-time messaging** between users
- **Secure payment processing** with Stripe integration

### 🌍 South African Focus

RideShare is specifically designed for the **South African market** with:
- **Local payment methods** (EFT, Payfast integration)
- **South African vehicle categories** (Bakkies, SUVs, Economy cars)
- **Local currency** (South African Rand)
- **Regional locations** (Cape Town, Johannesburg, Durban, etc.)
- **Local regulations compliance**

### ⚙️ Environment Variables

Create `.env` files in both frontend and backend directories:

**Backend (.env)**
```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/ridesharex

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here

# Payment Processing
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Optional: Redis for caching
REDIS_URL=redis://localhost:6379
```

**Frontend (.env)**
```env
# API Configuration
VITE_API_URL=http://localhost:5000

# Payment Processing
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

## 💼 Business Model & Use Cases

### 🎯 Target Users

**Vehicle Owners (Hosts):**
- Car owners with vehicles sitting idle
- Fleet owners looking to maximize utilization
- Small business owners with commercial vehicles
- Individuals with multiple vehicles

**Renters:**
- Tourists visiting South Africa
- Business travelers needing temporary transportation
- Locals needing vehicles for specific occasions
- Students and young professionals without cars

### 💰 Revenue Streams

- **Transaction fees** (5-10% per booking)
- **Premium listings** for featured placement
- **Insurance partnerships** for additional coverage
- **Concierge services** for premium users

### 🏢 Enterprise Features

- **Fleet management** for companies
- **Corporate accounts** with bulk discounts
- **API access** for third-party integrations
- **White-label solutions** for other businesses

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

##  Deployment

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

##  API Documentation

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

## 👥 Contributing

We welcome contributions! Here's how to get involved:

### 🚀 Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Run tests**: `npm test` (both frontend and backend)
5. **Commit with conventional commits**: `git commit -m "feat: add amazing feature"`
6. **Push and create PR**: `git push origin feature/amazing-feature`

### 🎯 Areas for Contribution

- **Frontend**: React components, UI/UX improvements
- **Backend**: API endpoints, business logic
- **Database**: Optimizations, new features
- **DevOps**: CI/CD, deployment improvements
- **Documentation**: Guides, API docs
- **Testing**: Unit tests, E2E tests

### 📋 Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Follow the existing code style
- Test on both development and production builds

## 🌟 Impact & Future

### 🎯 Current Impact
- **Reduces vehicle ownership costs** for individuals
- **Increases vehicle utilization** from 5% to 40%+
- **Supports local economy** by keeping money in communities
- **Reduces environmental impact** through shared mobility

### 🚀 Roadmap
- **Mobile app** (React Native)
- **AI-powered matching** for better user experience
- **Blockchain integration** for secure transactions
- **International expansion** to other African markets
- **Autonomous vehicle support** for future mobility

### 📊 Success Metrics
- User acquisition and retention rates
- Vehicle utilization improvements
- Revenue growth and profitability
- Environmental impact measurements
- Community engagement metrics

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Email**: support@ridesharex.com
- **GitHub Issues**: [Create an issue](https://github.com/your-username/ridesharex/issues)
- **Documentation**: [Full documentation](https://docs.ridesharex.com)
- **Community**: [Join our Discord](https://discord.gg/ridesharex)

---

<div align="center">

**Built with ❤️ for South Africa**

[🌐 Live Demo](https://ridesharex.com) • [📖 Documentation](https://docs.ridesharex.com) • [🐛 Report Bug](https://github.com/your-username/ridesharex/issues) • [💡 Request Feature](https://github.com/your-username/ridesharex/issues)

</div>
