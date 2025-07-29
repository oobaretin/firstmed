
from PIL import Image
from pillow_heif import register_heif_opener
import os

# Register HEIF opener with Pillow
register_heif_opener()

# Convert HEIC to JPG
if os.path.exists('static/IMG_1662.heic'):
    # Open the HEIC file
    image = Image.open('static/IMG_1662.heic')
    
    # Convert and save as JPG
    image.convert('RGB').save('static/hero-background.jpg', 'JPEG', quality=95)
    print("Image converted successfully to static/hero-background.jpg")
else:
    print("HEIC file not found in static folder")
