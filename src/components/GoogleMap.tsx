'use client';

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export default function GoogleMap({ center, zoom = 15, className = '' }: GoogleMapProps) {
  return (
    <div 
      className={`w-full h-96 rounded-lg shadow-lg bg-gray-200 flex items-center justify-center ${className}`}
      style={{ minHeight: '300px' }}
    >
      <div className="text-center">
        <div className="text-gray-600 mb-2 text-4xl">📍</div>
        <div className="text-lg font-semibold text-gray-700 mb-2">First Med Care EMS</div>
        <div className="text-sm text-gray-600 mb-1">11104 W Airport Blvd, Suite 138</div>
        <div className="text-sm text-gray-600">Stafford, TX 77477</div>
        <div className="text-xs text-gray-500 mt-2">
          Google Maps will load here with your API key
        </div>
      </div>
    </div>
  );
}
