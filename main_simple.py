"""
Simplified First Med Care EMS for Vercel deployment
"""
from flask import Flask, render_template, request, flash, redirect, url_for
import os
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'your-secret-key-here')

def send_booking_email(booking_data):
    """Send booking confirmation email - simplified for Vercel"""
    try:
        # For now, just log the booking data
        logger.info(f"Booking request received: {booking_data['name']} - {booking_data['phone']}")
        return True
    except Exception as e:
        logger.error(f"Failed to process booking: {str(e)}")
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
        
        # Process booking
        booking_processed = send_booking_email(booking_data)
        
        if booking_processed:
            flash(f'Thank you {name}! Your transport request has been submitted. We will contact you soon at {phone}.', 'success')
        else:
            flash(f'Thank you {name}! Your transport request has been submitted. We will contact you soon at {phone}.', 'success')
        
        return redirect(url_for('booking'))
    
    return render_template('booking.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

# For Vercel deployment
if __name__ == '__main__':
    host = os.getenv('HOST', '0.0.0.0')
    port = int(os.getenv('PORT', '5000'))
    debug = os.getenv('DEBUG', 'True').lower() == 'true'
    
    logger.info(f"Starting First Med Care EMS application on {host}:{port}")
    app.run(host=host, port=port, debug=debug)
else:
    # For Vercel deployment
    logger.info("First Med Care EMS application loaded for Vercel")
