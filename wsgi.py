"""
WSGI entry point for Vercel deployment
"""
from main import app

# This is the WSGI application that Vercel will use
application = app

if __name__ == "__main__":
    app.run()
