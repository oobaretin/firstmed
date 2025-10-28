#!/usr/bin/env python3
"""
Test script to verify all Flask dependencies can be imported
"""
try:
    print("Testing Flask imports...")
    
    from flask import Flask, render_template, request, flash, redirect, url_for
    print("✅ Flask core imports successful")
    
    from werkzeug.wrappers import Request, Response
    print("✅ Werkzeug imports successful")
    
    from jinja2 import Template
    print("✅ Jinja2 imports successful")
    
    from dotenv import load_dotenv
    print("✅ python-dotenv imports successful")
    
    print("\n🎉 All dependencies imported successfully!")
    print("✅ Ready for Vercel deployment")
    
except ImportError as e:
    print(f"❌ Import error: {e}")
    import sys
    print(f"Python path: {sys.path}")
    print(f"Python version: {sys.version}")
