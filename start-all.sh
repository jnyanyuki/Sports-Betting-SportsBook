#!/usr/bin/env bash
echo "========================================================"
echo "🚀 Starting Sports Betting Monorepo Services & Build..."
echo "========================================================"

echo "[0/4] Checking and installing workspace dependencies..."
npm run install:all

echo "[1/4] Starting Backend API Server..."
npm run dev:backend &

echo "[2/4] Starting Client Frontend Application..."
npm run dev:frontend &

echo "[3/4] Starting Admin Dashboard..."
npm run dev:admin &

echo "[4/4] Building all workspace applications..."
npm run build

echo "========================================================"
echo "✅ All services launched and build executed!"
echo "========================================================"
