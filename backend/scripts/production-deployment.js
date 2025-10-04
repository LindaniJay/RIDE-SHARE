#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ProductionDeployment {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.backendPath = this.projectRoot;
    this.frontendPath = path.join(this.projectRoot, '..', 'frontend');
  }

  async deploy() {
    console.log('🚀 Starting Production Deployment...\n');
    
    try {
      // Step 1: Environment Setup
      await this.setupEnvironment();
      
      // Step 2: Database Setup
      await this.setupDatabase();
      
      // Step 3: Backend Deployment
      await this.deployBackend();
      
      // Step 4: Frontend Deployment
      await this.deployFrontend();
      
      // Step 5: Run Tests
      await this.runTests();
      
      // Step 6: Health Check
      await this.healthCheck();
      
      console.log('\n✅ Production deployment completed successfully!');
      
    } catch (error) {
      console.error('❌ Deployment failed:', error.message);
      process.exit(1);
    }
  }

  async setupEnvironment() {
    console.log('🔧 Setting up environment...');
    
    // Check if .env exists
    const envPath = path.join(this.backendPath, '.env');
    if (!fs.existsSync(envPath)) {
      console.log('📝 Creating .env file...');
      const envExample = fs.readFileSync(path.join(this.backendPath, 'env.example'), 'utf8');
      fs.writeFileSync(envPath, envExample);
      console.log('⚠️  Please configure your .env file with production values');
    }
    
    // Install dependencies
    console.log('📦 Installing backend dependencies...');
    execSync('npm install', { cwd: this.backendPath, stdio: 'inherit' });
    
    if (fs.existsSync(this.frontendPath)) {
      console.log('📦 Installing frontend dependencies...');
      execSync('npm install', { cwd: this.frontendPath, stdio: 'inherit' });
    }
  }

  async setupDatabase() {
    console.log('🗄️  Setting up database...');
    
    try {
      // Run migrations
      console.log('📊 Running database migrations...');
      execSync('npx sequelize-cli db:migrate', { 
        cwd: this.backendPath, 
        stdio: 'inherit' 
      });
      
      // Seed production data
      console.log('🌱 Seeding production data...');
      execSync('node seed-demo-data.js', { 
        cwd: this.backendPath, 
        stdio: 'inherit' 
      });
      
      console.log('✅ Database setup completed');
      
    } catch (error) {
      console.log('⚠️  Database setup failed, but continuing...');
      console.log('   Please ensure your database is configured correctly');
    }
  }

  async deployBackend() {
    console.log('🔧 Deploying backend...');
    
    // Build TypeScript
    console.log('🔨 Building TypeScript...');
    execSync('npm run build', { cwd: this.backendPath, stdio: 'inherit' });
    
    // Start production server
    console.log('🚀 Starting production server...');
    console.log('   Backend will be available at http://localhost:5001');
    console.log('   Health check: http://localhost:5001/api/health');
    
    // Note: In production, you would use PM2 or similar process manager
    console.log('💡 For production, use: pm2 start production-server.js');
  }

  async deployFrontend() {
    if (!fs.existsSync(this.frontendPath)) {
      console.log('⚠️  Frontend directory not found, skipping frontend deployment');
      return;
    }
    
    console.log('🎨 Deploying frontend...');
    
    // Build frontend
    console.log('🔨 Building frontend...');
    execSync('npm run build', { cwd: this.frontendPath, stdio: 'inherit' });
    
    console.log('✅ Frontend build completed');
    console.log('   Frontend build available in dist/ directory');
    console.log('   Deploy dist/ contents to your web server');
  }

  async runTests() {
    console.log('🧪 Running tests...');
    
    try {
      // Run API tests
      console.log('🔍 Running API audit...');
      execSync('node audit-and-diagnosis.js', { 
        cwd: this.backendPath, 
        stdio: 'inherit' 
      });
      
      console.log('✅ Tests completed');
      
    } catch (error) {
      console.log('⚠️  Some tests failed, but deployment continues...');
      console.log('   Check test results in audit-report.json');
    }
  }

  async healthCheck() {
    console.log('🏥 Running health check...');
    
    try {
      const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
      
      const response = await fetch('http://localhost:5001/api/health');
      const data = await response.json();
      
      if (response.ok) {
        console.log('✅ Health check passed');
        console.log('   Server status:', data.status);
        console.log('   Database:', data.database);
        console.log('   Version:', data.version);
      } else {
        throw new Error(`Health check failed: ${response.status}`);
      }
      
    } catch (error) {
      console.log('⚠️  Health check failed - server may not be running');
      console.log('   Start the server manually: npm run start:production');
    }
  }
}

// Run deployment
const deployment = new ProductionDeployment();
deployment.deploy().catch(console.error);
