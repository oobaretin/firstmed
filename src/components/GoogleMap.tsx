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
    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        const { Loader } = await import('@googlemaps/js-api-loader');
        
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          version: 'weekly',
          libraries: ['places']
        });

        const { Map } = await loader.importLibrary('maps');
        const { Marker } = await loader.importLibrary('marker');

        const map = new Map(mapRef.current, {
          center,
          zoom,
          mapTypeId: 'roadmap',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

        new Marker({
          position: center,
          map,
          title: 'First Med Care EMS',
          animation: google.maps.Animation.DROP
        });
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [center, zoom]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-96 rounded-lg shadow-lg ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
}
