@echo off
echo ========================================
echo   Portfolio Deployment Script
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed
    pause
    exit /b 1
)
echo Dependencies installed successfully

echo.
echo [2/3] Building portfolio...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo Build completed successfully

echo.
echo [3/3] Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo ERROR: Deployment failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo   DEPLOYMENT SUCCESSFUL!
echo ========================================
echo Your portfolio is now live at:
echo https://yuankunhuang.github.io/
echo.
echo Press any key to exit...
pause > nul