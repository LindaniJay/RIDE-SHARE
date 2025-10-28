const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
  console.log('Test endpoint hit!');
  res.json({ 
    message: 'Backend is working!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: 'development'
  });
});

const port = 5003;
app.listen(port, '0.0.0.0', () => {
  console.log(`Minimal server running on http://localhost:${port}`);
});
