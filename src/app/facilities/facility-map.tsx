'use client';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { facilities } from '@/lib/data';
import { Card } from '@/components/ui/card';

export function FacilityMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <Card className="flex items-center justify-center h-full bg-muted rounded-lg">
        <div className="text-center p-4">
            <p className="font-semibold">Map Unavailable</p>
            <p className="text-sm text-muted-foreground">
                Google Maps API key is missing. Please add it to your environment variables.
            </p>
        </div>
      </Card>
    );
  }

  const position = { lat: 28.6139, lng: 77.2090 };

  return (
    <APIProvider apiKey={apiKey}>
        <Map
            defaultCenter={position}
            defaultZoom={12}
            mapId="grameencare_map"
            className="w-full h-full rounded-lg"
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        >
            {facilities.map((facility) => (
            <AdvancedMarker key={facility.id} position={{ lat: facility.lat, lng: facility.lng }} title={facility.name} />
            ))}
        </Map>
    </APIProvider>
  );
}
