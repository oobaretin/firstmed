"""
Vercel serverless function entry point for First Med Care EMS
"""
import sys
import os

# Add the parent directory to the Python path
parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if parent_dir not in sys.path:
    sys.path.insert(0, parent_dir)

# Import Flask app
from main import app

# This is the entry point for Vercel
def handler(request):
    return app(request.environ, start_response)

def start_response(status, headers):
    pass