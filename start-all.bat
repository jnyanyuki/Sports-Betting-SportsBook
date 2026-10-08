@echo off
TITLE Sports Betting Monorepo Launcher
echo ========================================================
echo 🚀 Starting Sports Betting Monorepo Services & Build...
echo ========================================================

echo.
echo [0/4] Checking and installing workspace dependencies...
call npm run install:all

echo.
echo [1/4] Starting Backend API Server (Port 2020)...
start "Backend API Server" cmd /k "npm run dev:backend"

echo.
echo [2/4] Starting Client Frontend Application...
start "Client Frontend App" cmd /k "npm run dev:frontend"

echo.
echo [3/4] Starting Admin Dashboard...
start "Admin Dashboard" cmd /k "npm run dev:admin"

echo.
echo [4/4] Building all workspace applications...
call npm run build

echo.
echo ========================================================
echo ✅ All services launched and build executed!
echo ========================================================
