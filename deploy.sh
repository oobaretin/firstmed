#!/bin/bash

# First Med Care EMS - Vercel Deployment Script
echo "🚑 First Med Care EMS - Vercel Deployment Helper"
echo "================================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: First Med Care EMS application"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if files exist
echo "🔍 Checking required files..."

files=("vercel.json" "wsgi.py" "requirements.txt" "main.py")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
        exit 1
    fi
done

# Check if directories exist
dirs=("templates" "static")
for dir in "${dirs[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ $dir/ directory exists"
    else
        echo "❌ $dir/ directory is missing"
        exit 1
    fi
done

echo ""
echo "🎯 Next Steps:"
echo "1. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/firstmed.git"
echo "   git push -u origin main"
echo ""
echo "2. Deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your GitHub repository"
echo "   - Set environment variables"
echo "   - Deploy!"
echo ""
echo "3. Connect your Namecheap domain:"
echo "   - Add domain in Vercel dashboard"
echo "   - Update DNS records in Namecheap"
echo ""
echo "📚 See DEPLOYMENT.md for detailed instructions"
echo ""
echo "🚀 Ready for deployment!"
