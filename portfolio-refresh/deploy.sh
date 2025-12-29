#!/bin/bash

# Deployment script for GitHub Pages
# This script builds the Next.js app and copies the output to the root directory

set -e  # Exit on error

echo "🔨 Building Next.js application..."
npm run build

echo "📦 Copying build output to root directory..."
# Remove old build files from root (except specific directories to keep)
cd ..
rm -rf _next *.html *.txt *.js *.css *.svg *.ico 2>/dev/null || true

# Copy new build files from out directory to root
cp -r portfolio-refresh/out/* .

echo "✅ Deployment files ready!"
echo ""
echo "Next steps:"
echo "1. Review the changes: git status"
echo "2. Stage the changes: git add ."
echo "3. Commit: git commit -m 'Deploy: Update site content'"
echo "4. Push to GitHub: git push origin main"
echo ""
echo "GitHub Pages will automatically deploy your changes."
