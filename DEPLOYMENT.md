# 🚀 Vercel Deployment Guide for First Med Care EMS

## Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub account
- Namecheap domain

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: First Med Care EMS application"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/firstmed.git
git push -u origin main
```

### 1.2 Verify Files
Ensure these files are in your repository:
- ✅ `vercel.json` - Vercel configuration
- ✅ `wsgi.py` - WSGI entry point
- ✅ `requirements.txt` - Python dependencies
- ✅ `main.py` - Flask application
- ✅ `templates/` - HTML templates
- ✅ `static/` - CSS and assets

## Step 2: Deploy to Vercel

### 2.1 Connect Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Select the repository: `YOUR_USERNAME/firstmed`

### 2.2 Configure Build Settings
Vercel should auto-detect Python settings:
- **Framework Preset**: Other
- **Build Command**: (leave empty)
- **Output Directory**: (leave empty)
- **Install Command**: `pip install -r requirements.txt`

### 2.3 Set Environment Variables
In Vercel dashboard, go to **Settings > Environment Variables**:

```env
SECRET_KEY=your-production-secret-key-here
EMAIL_PASSWORD=your-gmail-app-password
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SENDER_EMAIL=24hourserviceems@gmail.com
FLASK_ENV=production
DEBUG=False
```

### 2.4 Deploy
Click **"Deploy"** and wait for deployment to complete.

## Step 3: Connect Your Namecheap Domain

### 3.1 Get Domain from Vercel
1. Go to your project dashboard
2. Click **"Domains"** tab
3. Add your domain: `yourdomain.com`
4. Vercel will provide DNS records

### 3.2 Configure DNS in Namecheap
1. Log into your Namecheap account
2. Go to **Domain List > Manage**
3. Click **"Advanced DNS"**
4. Add these records:

```
Type: A Record
Host: @
Value: 76.76.19.61
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

### 3.3 Verify Domain
- Wait 5-10 minutes for DNS propagation
- Visit `https://yourdomain.com`
- Check SSL certificate is active

## Step 4: Test Your Application

### 4.1 Basic Functionality
- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Booking form is accessible
- ✅ Contact page displays properly

### 4.2 Email Testing
1. Go to `/booking` page
2. Fill out the form with test data
3. Submit the form
4. Check if email notification is sent

### 4.3 Mobile Testing
- Test on mobile devices
- Verify responsive design
- Check form functionality

## Step 5: Production Optimization

### 5.1 Security
- ✅ Environment variables are set
- ✅ Secret key is secure
- ✅ Email credentials are protected
- ✅ Debug mode is disabled

### 5.2 Performance
- ✅ Static assets are served efficiently
- ✅ Images are optimized
- ✅ CSS/JS are minified (Vercel handles this)

### 5.3 Monitoring
- Monitor Vercel dashboard for errors
- Check function logs
- Monitor email delivery

## Troubleshooting

### Common Issues

#### 1. Build Fails
- Check `requirements.txt` has all dependencies
- Verify Python version compatibility
- Check for syntax errors in code

#### 2. Domain Not Working
- Wait for DNS propagation (up to 24 hours)
- Check DNS records are correct
- Verify domain is added in Vercel

#### 3. Email Not Sending
- Verify Gmail app password is correct
- Check environment variables are set
- Test with a simple email first

#### 4. Static Files Not Loading
- Ensure `static/` folder is in repository
- Check file paths in templates
- Verify Vercel is serving static files

### Getting Help
- Check Vercel logs in dashboard
- Review function logs
- Test locally first
- Check Vercel documentation

## Post-Deployment Checklist

- [ ] Domain is live and accessible
- [ ] SSL certificate is active
- [ ] All pages load correctly
- [ ] Booking form works
- [ ] Email notifications work
- [ ] Mobile responsive design
- [ ] Contact information is correct
- [ ] Performance is acceptable
- [ ] Error monitoring is set up

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for security updates
- Test email functionality regularly
- Backup important data

### Scaling
- Vercel automatically handles scaling
- Monitor usage in dashboard
- Upgrade plan if needed

---

**Your First Med Care EMS application is now live on Vercel! 🚑✨**
