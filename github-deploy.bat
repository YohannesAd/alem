@echo off
echo.
echo ========================================
echo   Alem Asefa Counseling Website
echo   GitHub Deployment Helper
echo ========================================
echo.

echo Step 1: Build the website...
call npm run build

echo.
echo Step 2: Files ready for deployment!
echo.
echo The following files in the 'dist' folder need to be uploaded to GitHub:
echo.
dir dist /b
echo.

echo ========================================
echo   NEXT STEPS:
echo ========================================
echo.
echo 1. Go to https://github.com/
echo 2. Create new repository named: amracounseling
echo 3. Make it PUBLIC
echo 4. Upload ALL files from the 'dist' folder
echo 5. Go to Settings ^> Pages
echo 6. Enable GitHub Pages from main branch
echo 7. Your website will be live at:
echo    https://[your-username].github.io/amracounseling
echo.
echo ========================================

pause
