"""
Vercel serverless function entry point for First Med Care EMS
"""
import os
import sys

# Add current directory to Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Import the Flask app
from main import app

# This is the entry point for Vercel
def handler(request):
    return app(request.environ, start_response)

def start_response(status, headers):
    pass