# Google Maps Integration Setup

## Getting Your Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/google/maps-apis

2. **Create a New Project or Select Existing**
   - Click "Select a project" → "New Project"
   - Name it "First Med Care EMS" or similar

3. **Enable Required APIs**
   - Go to "APIs & Services" → "Library"
   - Search and enable:
     - Maps JavaScript API
     - Places API (optional, for enhanced features)

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

5. **Secure Your API Key (Recommended)**
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain: `https://firstmedcareems.com/*`
   - Add localhost for development: `http://localhost:3000/*`

## Setting Up Environment Variables

1. **Create `.env.local` file in your project root:**
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

2. **For Vercel Deployment:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to "Settings" → "Environment Variables"
   - Add: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` with your API key

## Features Included

- **Interactive Map**: Shows your business location with a marker
- **Responsive Design**: Works on desktop and mobile
- **Custom Styling**: Matches your brand colors
- **Location Details**: Displays address and contact information
- **Service Areas**: Shows coverage areas around Houston/Stafford

## Map Locations

- **Homepage**: Map section before footer
- **Contact Page**: Full map with service area information

## Troubleshooting

If the map doesn't load:
1. Check that your API key is correctly set
2. Verify the API key has the correct restrictions
3. Check browser console for error messages
4. Ensure the Maps JavaScript API is enabled

## Cost Information

- Google Maps API has a free tier with generous limits
- For most small businesses, usage will be within free limits
- Monitor usage in Google Cloud Console if needed
