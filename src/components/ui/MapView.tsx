import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// For demonstration, these would be fetched from an API
interface Midwife {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  specialties: string[];
  distance: string;
}

interface MapViewProps {
  className?: string;
  location?: { lat: number; lng: number };
  midwives?: Midwife[];
  onMarkerClick?: (midwife: Midwife) => void;
}

const MapView = ({ 
  className,
  location = { lat: 52.520008, lng: 13.404954 }, // Berlin as default
  midwives = [],
  onMarkerClick
}: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const googleMapRef = useRef<any | null>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Check if the Google Maps script is already loaded
    if (!window.google?.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setMapLoaded(true);
      };
      script.onerror = () => {
        setMapError('Failed to load Google Maps. Please check your internet connection and try again.');
      };
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    } else {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (mapLoaded && mapRef.current && window.google?.maps) {
      try {
        // Initialize map
        googleMapRef.current = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 12,
          styles: [
            {
              "featureType": "administrative",
              "elementType": "all",
              "stylers": [{"saturation": "-100"}]
            },
            {
              "featureType": "administrative.province",
              "elementType": "all",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": "50"}, {"visibility": "simplified"}]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{"saturation": "-100"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{"visibility": "simplified"}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "all",
              "stylers": [{"lightness": "30"}]
            },
            {
              "featureType": "road.local",
              "elementType": "all",
              "stylers": [{"lightness": "40"}]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
            },
            {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [{"lightness": -25}, {"saturation": -100}]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        });

        // Create marker for user location
        if (window.google?.maps) {
          new window.google.maps.Marker({
            position: location,
            map: googleMapRef.current,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 7,
              fillColor: "#4299E1",
              fillOpacity: 1,
              strokeColor: "white",
              strokeWeight: 2,
            },
            title: "Your Location",
          });
        }
      } catch (error) {
        console.error("Error initializing map:", error);
        setMapError('Error initializing the map. Please try again later.');
      }
    }
  }, [mapLoaded, location]);

  useEffect(() => {
    if (mapLoaded && googleMapRef.current && window.google?.maps) {
      try {
        // Clear existing markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        // Add markers for midwives
        midwives.forEach(midwife => {
          if (window.google?.maps) {
            const marker = new window.google.maps.Marker({
              position: { lat: midwife.lat, lng: midwife.lng },
              map: googleMapRef.current,
              title: midwife.name,
            });

            marker.addListener("click", () => {
              if (onMarkerClick) {
                onMarkerClick(midwife);
              }
            });

            markersRef.current.push(marker);
          }
        });

        // Fit bounds if we have midwives
        if (midwives.length > 0 && window.google?.maps) {
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(location);
          midwives.forEach(midwife => {
            bounds.extend({ lat: midwife.lat, lng: midwife.lng });
          });
          googleMapRef.current.fitBounds(bounds);
        }
      } catch (error) {
        console.error("Error adding markers:", error);
        setMapError('Error displaying midwives on the map. Please try again later.');
      }
    }
  }, [mapLoaded, midwives, location, onMarkerClick]);

  return (
    <div className={cn('relative w-full h-[500px] rounded-xl overflow-hidden shadow-md', className)}>
      <div ref={mapRef} className="w-full h-full" />
      {!mapLoaded && !mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
          <div className="animate-pulse text-primary font-medium">Karte wird geladen...</div>
        </div>
      )}
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
          <div className="text-destructive font-medium text-center p-4">{mapError}</div>
        </div>
      )}
    </div>
  );
};

export default MapView;
