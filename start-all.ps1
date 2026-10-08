Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "🚀 Starting Sports Betting Monorepo Services & Build..." -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

Write-Host "`n[0/4] Checking and installing workspace dependencies..." -ForegroundColor Yellow
npm run install:all

Write-Host "`n[1/4] Starting Backend API Server (Port 2020)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev:backend"

Write-Host "`n[2/4] Starting Client Frontend Application..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev:frontend"

Write-Host "`n[3/4] Starting Admin Dashboard..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev:admin"

Write-Host "`n[4/4] Building all workspace applications..." -ForegroundColor Yellow
npm run build

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host "✅ All services launched and build executed!" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Green
