@echo off
title Kobir Bheshoji - Dev Server
color 0A

echo ============================================
echo   KOBIR BHESHOJI - Build ^& Start
echo ============================================
echo.

echo [1/3] Killing existing Node processes...
taskkill /F /IM node.exe >nul 2>&1
if %errorlevel%==0 (
    echo       Node processes killed.
) else (
    echo       No Node processes found.
)
echo.

echo [2/3] Building project...
cd /d "C:\Users\pakak\Desktop\Bheshoj Hakim\kobir-bheshoji"
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo       BUILD FAILED! Check errors above.
    pause
    exit /b 1
)
echo.

echo [3/3] Starting dev server...
echo.
echo ============================================
echo   Server: http://localhost:3000
echo   Press Ctrl+C to stop
echo ============================================
echo.
call npm run dev
