"""
Minimal Flask app for Vercel testing
"""
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "First Med Care EMS - Flask is working!", "status": "success"})

@app.route('/test')
def test():
    return jsonify({"message": "Test endpoint working", "status": "success"})

if __name__ == '__main__':
    app.run(debug=True)
