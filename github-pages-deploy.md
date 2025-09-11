# 🚀 GitHub Pages Deployment Guide

## Quick Commands to Deploy

### Option 1: Run the Batch Script
1. Double-click `deploy-to-github.bat`
2. Enter your GitHub username and password when prompted
3. Done!

### Option 2: Manual Commands

Open Command Prompt in this folder and run these commands one by one:

```bash
# Configure Git (first time only)
git config --global user.name "YohannesAd"
git config --global user.email "your-email@example.com"

# Initialize and connect to GitHub
git init
git remote add origin https://github.com/YohannesAd/alem.git

# Add and commit all files
git add .
git commit -m "Deploy Alem Asefa counseling website"

# Push to GitHub
git branch -M main
git push -u origin main --force
```

### Option 3: Deploy Only the Built Website

If you want to deploy only the website files (not source code):

```bash
# Go to the dist folder
cd dist

# Initialize Git
git init

# Add GitHub repository
git remote add origin https://github.com/YohannesAd/alem.git

# Add all files
git add .

# Commit
git commit -m "Deploy website"

# Push
git branch -M main
git push -u origin main --force
```

## Enable GitHub Pages

After pushing:

1. Go to: https://github.com/YohannesAd/alem
2. Click **Settings**
3. Scroll to **Pages**
4. Source: **Deploy from a branch**
5. Branch: **main**
6. Folder: **/ (root)**
7. Click **Save**

## Your Live Website

After enabling GitHub Pages, your website will be live at:
**https://yohannesad.github.io/alem/**

## Troubleshooting

### If you get authentication errors:
1. Go to GitHub.com
2. Go to Settings > Developer settings > Personal access tokens
3. Generate a new token with "repo" permissions
4. Use your username and the token as password

### If files are too large:
- The deployment script will handle this automatically
- Large files will be compressed

### If you need to update the website:
1. Make changes to your files
2. Run: `git add .`
3. Run: `git commit -m "Update website"`
4. Run: `git push`

## Files Being Deployed

✅ Source Code (for development):
- All React/TypeScript files
- Package.json and dependencies info
- Build configuration

✅ Built Website (for hosting):
- index.html
- CSS and JavaScript bundles
- Images and assets
- Favicon

The website will work perfectly on GitHub Pages!
