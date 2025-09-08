#!/bin/bash

# CloudFi Labs Development Setup Script

echo \"🚀 CloudFi Labs Development Setup\"
echo \"=================================\"

# Check Node.js version
node_version=$(node --version)
echo \"✅ Node.js version: $node_version\"

if [[ ! \"$node_version\" =~ ^v1[8-9]\\.|^v[2-9][0-9]\\. ]]; then
    echo \"❌ Error: Node.js 18+ is required. Please upgrade your Node.js version.\"
    exit 1
fi

# Check npm version
npm_version=$(npm --version)
echo \"✅ npm version: $npm_version\"

# Install dependencies
echo \"📦 Installing dependencies...\"
npm install

if [ $? -ne 0 ]; then
    echo \"❌ Error: Failed to install dependencies\"
    exit 1
fi

# Setup environment files
echo \"⚙️  Setting up environment files...\"

if [ ! -f \"apps/backend/.env\" ]; then
    cp apps/backend/.env.example apps/backend/.env
    echo \"✅ Created backend .env file\"
else
    echo \"⚠️  Backend .env file already exists\"
fi

# Build shared package
echo \"🔨 Building shared package...\"
npm run build --workspace=@cloudfi/shared

if [ $? -ne 0 ]; then
    echo \"❌ Error: Failed to build shared package\"
    exit 1
fi

# Type check all projects
echo \"🔍 Type checking projects...\"
npm run type-check

if [ $? -ne 0 ]; then
    echo \"⚠️  Warning: Type check failed, but setup will continue\"
fi

echo \"\"
echo \"🎉 Setup completed successfully!\"
echo \"\"
echo \"To start development:\"
echo \"  npm run dev           # Start both frontend and backend\"
echo \"  npm run dev:frontend  # Start frontend only (localhost:3000)\"
echo \"  npm run dev:backend   # Start backend only (localhost:8000)\"
echo \"\"
echo \"Useful commands:\"
echo \"  npm run build         # Build all projects\"
echo \"  npm run lint          # Lint all projects\"
echo \"  npm run type-check    # Type check all projects\"
echo \"  npm run clean         # Clean build artifacts\"
echo \"\"
echo \"Happy coding! 🚀\"