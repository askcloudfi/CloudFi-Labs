@echo off
setlocal enabledelayedexpansion

echo 🚀 CloudFi Labs Development Setup
echo =================================

REM Check Node.js version
for /f \"tokens=*\" %%i in ('node --version') do set node_version=%%i
echo ✅ Node.js version: %node_version%

REM Check if Node.js version is 18+
set version_number=%node_version:v=%
for /f \"tokens=1 delims=.\" %%a in (\"%version_number%\") do set major_version=%%a

if %major_version% LSS 18 (
    echo ❌ Error: Node.js 18+ is required. Please upgrade your Node.js version.
    pause
    exit /b 1
)

REM Check npm version
for /f \"tokens=*\" %%i in ('npm --version') do set npm_version=%%i
echo ✅ npm version: %npm_version%

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if !errorlevel! neq 0 (
    echo ❌ Error: Failed to install dependencies
    pause
    exit /b 1
)

REM Setup environment files
echo ⚙️  Setting up environment files...

if not exist \"apps\\backend\\.env\" (
    copy \"apps\\backend\\.env.example\" \"apps\\backend\\.env\"
    echo ✅ Created backend .env file
) else (
    echo ⚠️  Backend .env file already exists
)

REM Build shared package
echo 🔨 Building shared package...
npm run build --workspace=@cloudfi/shared

if !errorlevel! neq 0 (
    echo ❌ Error: Failed to build shared package
    pause
    exit /b 1
)

REM Type check all projects
echo 🔍 Type checking projects...
npm run type-check

if !errorlevel! neq 0 (
    echo ⚠️  Warning: Type check failed, but setup will continue
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo To start development:
echo   npm run dev           # Start both frontend and backend
echo   npm run dev:frontend  # Start frontend only (localhost:3000)
echo   npm run dev:backend   # Start backend only (localhost:8000)
echo.
echo Useful commands:
echo   npm run build         # Build all projects
echo   npm run lint          # Lint all projects
echo   npm run type-check    # Type check all projects
echo   npm run clean         # Clean build artifacts
echo.
echo Happy coding! 🚀
echo.
pause