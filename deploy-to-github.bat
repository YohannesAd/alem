@echo off
echo ========================================
echo   Deploying Alem Asefa Website to GitHub
echo ========================================
echo.

echo Step 1: Configuring Git...
git config --global user.name "YohannesAd"
git config --global user.email "your-email@example.com"

echo.
echo Step 2: Initializing Git repository...
git init

echo.
echo Step 3: Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/YohannesAd/alem.git

echo.
echo Step 4: Creating .gitignore for deployment...
echo node_modules/ > .gitignore.deploy
echo .env >> .gitignore.deploy
echo *.log >> .gitignore.deploy

echo.
echo Step 5: Adding all files...
git add .

echo.
echo Step 6: Committing files...
git commit -m "Deploy Alem Asefa counseling website"

echo.
echo Step 7: Setting up main branch...
git branch -M main

echo.
echo Step 8: Pushing to GitHub...
echo You will need to enter your GitHub credentials...
git push -u origin main --force

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your website will be available at:
echo https://yohannesad.github.io/alem/
echo.
echo Next steps:
echo 1. Go to https://github.com/YohannesAd/alem
echo 2. Go to Settings ^> Pages
echo 3. Enable GitHub Pages from main branch
echo.
pause
