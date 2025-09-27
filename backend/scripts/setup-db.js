const { execSync } = require('child_process');
const path = require('path');

console.log('Setting up database...');

try {
  // Run migrations
  console.log('Running migrations...');
  execSync('npx sequelize-cli db:migrate', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  // Run seeders
  console.log('Running seeders...');
  execSync('npx sequelize-cli db:seed:all', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('Database setup completed successfully!');
} catch (error) {
  console.error('Error setting up database:', error.message);
  process.exit(1);
}
