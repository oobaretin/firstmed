
from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

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
        
        # Here you would typically save to database or send email
        flash(f'Thank you {name}! Your transport request has been submitted. We will contact you soon at {phone}.', 'success')
        return redirect(url_for('booking'))
    
    return render_template('booking.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
