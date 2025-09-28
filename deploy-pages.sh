#!/bin/bash

# Build the frontend
echo "Building frontend..."
cd frontend
npm install
npm run build

# Copy build files to root for GitHub Pages
echo "Copying build files to root..."
cp -r dist/* ../

# Create a simple index.html redirect
echo "Creating index.html redirect..."
cat > ../index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RideShare SA</title>
    <script>
        // Redirect to the frontend build
        window.location.href = './index.html';
    </script>
</head>
<body>
    <p>Redirecting to RideShare SA...</p>
</body>
</html>
EOF

echo "Deployment files ready!"
