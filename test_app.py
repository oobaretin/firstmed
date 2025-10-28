#!/usr/bin/env python3
"""
Test script to verify Flask app can be imported correctly
"""
try:
    from main import app
    print("✅ Flask app imported successfully")
    print(f"✅ App name: {app.name}")
    print(f"✅ Debug mode: {app.debug}")
    print("✅ App is ready for Vercel deployment")
except Exception as e:
    print(f"❌ Error importing Flask app: {e}")
    import traceback
    traceback.print_exc()
