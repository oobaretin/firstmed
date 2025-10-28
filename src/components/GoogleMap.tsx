'use client';

import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ center, zoom = 15, className = '' }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      // Create the HTML structure for the Google Maps Store Locator
      mapRef.current.innerHTML = `
        <style>
          gmpx-store-locator {
            width: 100%;
            height: 100%;
            --gmpx-color-surface: #fff;
            --gmpx-color-on-surface: #212121;
            --gmpx-color-on-surface-variant: #757575;
            --gmpx-color-primary: #dc2626;
            --gmpx-color-outline: #e0e0e0;
            --gmpx-fixed-panel-width-row-layout: 28.5em;
            --gmpx-fixed-panel-height-column-layout: 65%;
            --gmpx-font-family-base: "Inter", sans-serif;
            --gmpx-font-family-headings: "Inter", sans-serif;
            --gmpx-font-size-base: 0.875rem;
            --gmpx-hours-color-open: #188038;
            --gmpx-hours-color-closed: #d50000;
            --gmpx-rating-color: #ffb300;
            --gmpx-rating-color-empty: #e0e0e0;
          }
        </style>
        
        <script type="module" src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js"></script>
        
        <script>
          const CONFIGURATION = {
            "locations": [
              {
                "title": "First Med Care EMS",
                "address1": "11104 W Airport Blvd, Suite 138",
                "address2": "Stafford, TX 77477",
                "coords": {"lat": ${center.lat}, "lng": ${center.lng}},
                "placeId": "ChIJN1t_tDeuQIYRr3a15Vbf0lE",
                "actions": [
                  {
                    "label": "Call",
                    "defaultUrl": "tel:281-690-1274"
                  },
                  {
                    "label": "Email",
                    "defaultUrl": "mailto:24hourserviceems@gmail.com"
                  }
                ]
              }
            ],
            "mapOptions": {
              "center": {"lat": ${center.lat}, "lng": ${center.lng}},
              "fullscreenControl": true,
              "mapTypeControl": false,
              "streetViewControl": false,
              "zoom": ${zoom},
              "zoomControl": true,
              "maxZoom": 17,
              "mapId": ""
            },
            "mapsApiKey": "${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}",
            "capabilities": {
              "input": false,
              "autocomplete": false,
              "directions": true,
              "distanceMatrix": false,
              "details": true,
              "actions": true
            }
          };

          document.addEventListener('DOMContentLoaded', async () => {
            await customElements.whenDefined('gmpx-store-locator');
            const locator = document.querySelector('gmpx-store-locator');
            if (locator) {
              locator.configureFromQuickBuilder(CONFIGURATION);
            }
          });
        </script>
        
        <gmpx-api-loader 
          key="${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}" 
          solution-channel="GMP_QB_locatorplus_v11_c">
        </gmpx-api-loader>
        <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
      `;
    };

    // Initialize the map
    initMap();
  }, [center, zoom]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-96 rounded-lg shadow-lg overflow-hidden ${className}`} 
      style={{ minHeight: '300px' }}
    />
  );
}
