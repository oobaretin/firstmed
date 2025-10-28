"""
First Med Care EMS - Flask Application
Professional medical transport services
"""

import os
import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Configuration
app.secret_key = os.getenv('SECRET_KEY', 'your-secret-key-here')

# Email configuration
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
SENDER_EMAIL = os.getenv('SENDER_EMAIL', 'your-email@gmail.com')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD', '')

@app.route('/')
def home():
    """Home page"""
    return render_template('index.html')

@app.route('/about')
def about():
    """About page"""
    return render_template('about.html')

@app.route('/services')
def services():
    """Services page"""
    return render_template('services.html')

@app.route('/booking')
def booking():
    """Booking page"""
    return render_template('booking.html')

@app.route('/contact')
def contact():
    """Contact page"""
    return render_template('contact.html')

@app.route('/submit_booking', methods=['POST'])
def submit_booking():
    """Handle booking form submission"""
    try:
        # Get form data
        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        service_type = request.form.get('service_type')
        pickup_location = request.form.get('pickup_location')
        destination = request.form.get('destination')
        date = request.form.get('date')
        time = request.form.get('time')
        message = request.form.get('message')
        
        # Validate required fields
        if not all([name, email, phone, service_type, pickup_location, destination, date, time]):
            return jsonify({'success': False, 'message': 'Please fill in all required fields.'})
        
        # Send email notification
        if EMAIL_PASSWORD:
            send_booking_email(name, email, phone, service_type, pickup_location, destination, date, time, message)
        
        logger.info(f"Booking received from {name} ({email}) for {service_type}")
        
        return jsonify({'success': True, 'message': 'Thank you! Your booking request has been submitted. We will contact you shortly.'})
        
    except Exception as e:
        logger.error(f"Error processing booking: {str(e)}")
        return jsonify({'success': False, 'message': 'An error occurred. Please try again or call us directly.'})

def send_booking_email(name, email, phone, service_type, pickup_location, destination, date, time, message):
    """Send booking confirmation email"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = email
        msg['Subject'] = "Booking Confirmation - First Med Care EMS"
        
        # Email body
        body = f"""
Dear {name},

Thank you for choosing First Med Care EMS for your medical transport needs.

Booking Details:
- Service Type: {service_type}
- Pickup Location: {pickup_location}
- Destination: {destination}
- Date: {date}
- Time: {time}
- Phone: {phone}
- Message: {message or 'None'}

We will contact you shortly to confirm your booking and provide further details.

For immediate assistance, please call us at (555) 123-4567.

Best regards,
First Med Care EMS Team
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(SENDER_EMAIL, email, text)
        server.quit()
        
        logger.info(f"Booking email sent to {email}")
        
    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    # Local development
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
else:
    # Vercel deployment
    logger.info("Starting First Med Care EMS application on Vercel")