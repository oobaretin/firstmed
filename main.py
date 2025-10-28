
from flask import Flask, render_template, request, flash, redirect, url_for
import smtplib
import os
import logging
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'your-secret-key-here')

def send_booking_email(booking_data):
    """Send booking confirmation email"""
    try:
        # Email configuration
        smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', '587'))
        sender_email = os.getenv('SENDER_EMAIL', '24hourserviceems@gmail.com')
        sender_password = os.getenv('EMAIL_PASSWORD')
        
        if not sender_password:
            logger.warning("EMAIL_PASSWORD not found in environment variables")
            return False
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New Transport Request - {booking_data['name']}"
        msg['From'] = sender_email
        msg['To'] = sender_email
        
        # Create HTML email content
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .header {{ background-color: #007bff; color: white; padding: 20px; text-align: center; }}
                .content {{ padding: 20px; }}
                .section {{ margin-bottom: 20px; padding: 15px; border-left: 4px solid #007bff; background-color: #f8f9fa; }}
                .label {{ font-weight: bold; color: #007bff; }}
                .emergency {{ background-color: #dc3545; color: white; padding: 10px; border-radius: 5px; margin: 10px 0; }}
                .footer {{ background-color: #6c757d; color: white; padding: 15px; text-align: center; margin-top: 20px; }}
                a {{ color: #007bff; text-decoration: none; }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🚑 First Med Care EMS</h1>
                <h2>New Transport Request</h2>
            </div>
            
            <div class="content">
                <div class="emergency">
                    <strong>⚠️ URGENT:</strong> New transport request received - Please respond within 2 hours
                </div>
                
                <div class="section">
                    <h3>👤 Patient Information</h3>
                    <p><span class="label">Name:</span> {booking_data['name']}</p>
                    <p><span class="label">Phone:</span> <a href="tel:{booking_data['phone']}">{booking_data['phone']}</a></p>
                    <p><span class="label">Email:</span> <a href="mailto:{booking_data['email']}">{booking_data['email']}</a></p>
                </div>
                
                <div class="section">
                    <h3>🚗 Transport Details</h3>
                    <p><span class="label">Service Type:</span> {booking_data['service_type']}</p>
                    <p><span class="label">Preferred Date:</span> {booking_data['date']}</p>
                    <p><span class="label">Preferred Time:</span> {booking_data['time']}</p>
                </div>
                
                <div class="section">
                    <h3>📍 Locations</h3>
                    <p><span class="label">Pickup Location:</span> {booking_data['pickup_location']}</p>
                    <p><span class="label">Destination:</span> {booking_data['destination']}</p>
                </div>
                
                <div class="section">
                    <h3>📝 Special Requirements</h3>
                    <p>{booking_data['notes'] if booking_data['notes'] else 'No special requirements specified'}</p>
                </div>
                
                <div class="section">
                    <h3>⏰ Request Information</h3>
                    <p><span class="label">Submitted:</span> {datetime.now().strftime('%B %d, %Y at %I:%M %p')}</p>
                    <p><span class="label">Request ID:</span> #{datetime.now().strftime('%Y%m%d%H%M%S')}</p>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Next Steps:</strong></p>
                <p>1. Contact patient within 2 hours at <a href="tel:{booking_data['phone']}" style="color: #fff;">{booking_data['phone']}</a></p>
                <p>2. Confirm availability and arrange transport details</p>
                <p>3. Verify insurance and required documentation</p>
            </div>
        </body>
        </html>
        """
        
        # Create text version for email clients that don't support HTML
        text_content = f"""
        NEW TRANSPORT REQUEST - FIRST MED CARE EMS
        
        PATIENT INFORMATION:
        Name: {booking_data['name']}
        Phone: {booking_data['phone']}
        Email: {booking_data['email']}
        
        TRANSPORT DETAILS:
        Service Type: {booking_data['service_type']}
        Date: {booking_data['date']}
        Time: {booking_data['time']}
        
        LOCATIONS:
        Pickup: {booking_data['pickup_location']}
        Destination: {booking_data['destination']}
        
        SPECIAL REQUIREMENTS:
        {booking_data['notes'] if booking_data['notes'] else 'None specified'}
        
        SUBMITTED: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
        REQUEST ID: #{datetime.now().strftime('%Y%m%d%H%M%S')}
        
        NEXT STEPS:
        - Contact patient within 2 hours
        - Confirm availability and arrange details
        - Verify insurance and documentation
        """
        
        # Attach parts
        html_part = MIMEText(html_content, 'html')
        text_part = MIMEText(text_content, 'plain')
        
        msg.attach(text_part)
        msg.attach(html_part)
        
        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            server.send_message(msg)
        
        logger.info(f"Booking email sent successfully for {booking_data['name']}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/booking', methods=['GET', 'POST'])
def booking():
    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        pickup_location = request.form['pickup_location']
        destination = request.form['destination']
        service_type = request.form['service_type']
        date = request.form['date']
        time = request.form['time']
        notes = request.form.get('notes', '')
        
        # Prepare booking data
        booking_data = {
            'name': name,
            'phone': phone,
            'email': email,
            'pickup_location': pickup_location,
            'destination': destination,
            'service_type': service_type,
            'date': date,
            'time': time,
            'notes': notes
        }
        
        # Send email notification
        email_sent = send_booking_email(booking_data)
        
        if email_sent:
            flash(f'Thank you {name}! Your transport request has been submitted and sent to our team. We will contact you soon at {phone}.', 'success')
        else:
            flash(f'Thank you {name}! Your transport request has been submitted. We will contact you soon at {phone}. (Email notification pending)', 'success')
        
        return redirect(url_for('booking'))
    
    return render_template('booking.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    host = os.getenv('HOST', '0.0.0.0')
    port = int(os.getenv('PORT', '5000'))
    debug = os.getenv('DEBUG', 'True').lower() == 'true'
    
    logger.info(f"Starting First Med Care EMS application on {host}:{port}")
    app.run(host=host, port=port, debug=debug)
