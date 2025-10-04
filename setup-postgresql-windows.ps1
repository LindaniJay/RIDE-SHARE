# PostgreSQL Setup Script for Windows
# This script will help you install and configure PostgreSQL

Write-Host "🐘 Setting up PostgreSQL for RideShareX..." -ForegroundColor Green

# Check if PostgreSQL is already installed
$pgPath = Get-Command psql -ErrorAction SilentlyContinue
if ($pgPath) {
    Write-Host "✅ PostgreSQL is already installed at: $($pgPath.Source)" -ForegroundColor Green
    psql --version
} else {
    Write-Host "❌ PostgreSQL is not installed. Please install it first." -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Installation Options:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://www.postgresql.org/download/windows/"
    Write-Host "2. Use Chocolatey: choco install postgresql"
    Write-Host "3. Use Scoop: scoop install postgresql"
    Write-Host ""
    Write-Host "After installation, run this script again."
    exit 1
}

# Set up environment variables
Write-Host "🔧 Setting up environment variables..." -ForegroundColor Yellow

# Create .env file for production
$envContent = @"
# Production Environment Configuration
NODE_ENV=production
PORT=5001

# Database Configuration
DATABASE_URL=postgresql://ridesharex_user:ridesharex_password@localhost:5432/ridesharex_production
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ridesharex_production
DB_USER=ridesharex_user
DB_PASSWORD=ridesharex_password

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key_here_change_this_in_production
JWT_EXPIRES_IN=7d

# Firebase Admin (for admin authentication)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token

# Payment Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
PAYFAST_MERCHANT_ID=your_payfast_merchant_id
PAYFAST_MERCHANT_KEY=your_payfast_merchant_key
PAYFAST_PASSPHRASE=your_payfast_passphrase

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads

# CORS
CORS_ORIGIN=http://localhost:3000,https://yourdomain.com
"@

$envContent | Out-File -FilePath ".env" -Encoding UTF8
Write-Host "✅ Created .env file with production configuration" -ForegroundColor Green

# Database setup commands
Write-Host "🗄️ Setting up database..." -ForegroundColor Yellow

$dbSetupScript = @"
-- Create database and user
CREATE DATABASE ridesharex_production;
CREATE USER ridesharex_user WITH PASSWORD 'ridesharex_password';
GRANT ALL PRIVILEGES ON DATABASE ridesharex_production TO ridesharex_user;
ALTER USER ridesharex_user CREATEDB;
"@

$dbSetupScript | Out-File -FilePath "setup-database.sql" -Encoding UTF8

Write-Host "📝 Database setup script created: setup-database.sql" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Cyan
Write-Host "1. Run: psql -U postgres -f setup-database.sql"
Write-Host "2. Or manually run the SQL commands in your PostgreSQL client"
Write-Host "3. Then run: npm run build && npm run db:migrate"
Write-Host "4. Create admin user: npm run db:create-admin"
Write-Host "5. Start the server: npm start"
Write-Host ""
Write-Host "🎉 PostgreSQL setup complete!" -ForegroundColor Green
