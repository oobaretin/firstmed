"""
Minimal Flask app for testing Vercel deployment
"""
from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def home():
    return render_template_string('''
    <!DOCTYPE html>
    <html>
    <head>
        <title>First Med Care EMS - Test</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .header { background: #007bff; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🚑 First Med Care EMS</h1>
            <p>Test Deployment - Vercel Working!</p>
        </div>
        <div class="content">
            <h2>Application Status: ✅ Running</h2>
            <p>This is a minimal test to verify Vercel deployment is working.</p>
            <p>If you can see this page, the serverless function is working correctly.</p>
        </div>
    </body>
    </html>
    ''')

@app.route('/test')
def test():
    return {'status': 'success', 'message': 'Vercel deployment working!'}

if __name__ == '__main__':
    app.run(debug=True)
