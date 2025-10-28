"""
Vercel serverless function entry point for First Med Care EMS
"""
import sys
import os
from werkzeug.middleware.dispatcher import DispatcherMiddleware

# Add the parent directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from main import app

# Create WSGI application for Vercel
application = app

# This is the entry point for Vercel
def handler(request):
    return application(request.environ, start_response)

def start_response(status, headers):
    pass
