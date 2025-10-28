# First Med Care EMS - Medical Transport Booking System

A professional Flask-based web application for medical transport booking and emergency medical services (EMS) management. This system provides a comprehensive platform for patients to request medical transportation services and for EMS providers to manage bookings efficiently.

## 🚑 Features

### Core Functionality
- **Medical Transport Booking**: Complete booking system with patient information, transport details, and special requirements
- **Email Notifications**: Automated email alerts for new booking requests with professional HTML formatting
- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Emergency Contact Integration**: Direct phone integration for emergency situations

### Service Types
- Emergency Medical Transport (24/7)
- Non-Emergency Medical Transport
- Dialysis Transport
- Medical Appointment Transport
- Hospital Discharge Transport
- Inter-Facility Transfer
- Critical Care Transport
- Wheelchair Accessible Transport

### Service Areas
- Stafford, TX (Primary)
- Houston, TX
- Sugar Land, TX
- Missouri City, TX
- Pearland, TX
- Katy, TX
- Richmond, TX
- Bellaire, TX

## 🛠 Technology Stack

- **Backend**: Python 3.9+ with Flask 3.0
- **Frontend**: HTML5, CSS3, Bootstrap 5.1.3
- **Icons**: Font Awesome 6.0.0
- **Email**: SMTP with HTML/Text support
- **Image Processing**: Pillow with HEIF support
- **Server**: Gunicorn for production deployment

## 📋 Prerequisites

- Python 3.9 or higher
- pip (Python package installer)
- Git (for version control)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/oobaretin/firstmed.git
cd firstmed
```

### 2. Create Virtual Environment
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Environment Configuration
Create a `.env` file in the root directory:
```env
# Application Configuration
FLASK_APP=main.py
FLASK_ENV=development
SECRET_KEY=your-secret-key-change-in-production
DEBUG=True
HOST=0.0.0.0
PORT=5000

# Email Configuration
EMAIL_PASSWORD=your-gmail-app-password-here
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SENDER_EMAIL=24hourserviceems@gmail.com
```

### 5. Run the Application
```bash
python main.py
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
firstmed/
├── static/
│   ├── css/
│   │   └── style.css          # Custom styles
│   ├── firstmed-logo.png      # Company logo
│   └── hero-background.jpg    # Hero section background
├── templates/
│   ├── base.html              # Base template
│   ├── home.html              # Homepage
│   ├── about.html             # About page
│   ├── services.html          # Services page
│   ├── booking.html           # Booking form
│   └── contact.html           # Contact page
├── attached_assets/           # Image assets
├── main.py                    # Flask application
├── convert_image.py           # Image conversion utility
├── requirements.txt           # Python dependencies
├── pyproject.toml            # Poetry configuration
└── README.md                 # This file
```

## 🔧 Configuration

### Email Setup
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Add the app password to your `.env` file

### Production Deployment
For production deployment, use Gunicorn:
```bash
gunicorn --bind 0.0.0.0:5000 main:app
```

## 📱 Usage

### For Patients
1. Visit the homepage to learn about services
2. Click "Book Transport" to access the booking form
3. Fill in patient information and transport details
4. Submit the form to request transport
5. Receive confirmation and expect contact within 2 hours

### For EMS Staff
1. Monitor email notifications for new bookings
2. Contact patients to confirm transport details
3. Coordinate with medical facilities as needed

## 🔒 Security Features

- Environment variable configuration for sensitive data
- Input validation and sanitization
- CSRF protection via Flask-WTF (recommended for production)
- Secure email handling with proper error logging

## 🚀 Deployment Options

### Heroku
1. Create a `Procfile`:
   ```
   web: gunicorn --bind 0.0.0.0:$PORT main:app
   ```
2. Set environment variables in Heroku dashboard
3. Deploy using Git

### Docker
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "main:app"]
```

### Cloud Platforms
- **Google Cloud Run**: Containerized deployment
- **AWS Elastic Beanstalk**: Platform-as-a-Service
- **DigitalOcean App Platform**: Simple deployment

## 🧪 Testing

### Manual Testing
1. Test all form submissions
2. Verify email notifications
3. Check responsive design on mobile devices
4. Test emergency contact links

### Automated Testing (Recommended)
Add pytest for comprehensive testing:
```bash
pip install pytest
pytest tests/
```

## 📊 Monitoring & Logging

The application includes structured logging for:
- Email send attempts and results
- Application startup and configuration
- Error tracking and debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software for First Med Care EMS. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: 24hourserviceems@gmail.com
- **Phone**: 281-690-1274
- **Address**: 11104 W Airport Blvd ste 138, Stafford, TX 77477

## 🔄 Version History

- **v0.1.0**: Initial release with core booking functionality
- **v0.1.1**: Added environment configuration and logging
- **v0.1.2**: Enhanced error handling and documentation

---

**First Med Care EMS** - Professional Medical Transport Services in Stafford, TX and surrounding areas.
