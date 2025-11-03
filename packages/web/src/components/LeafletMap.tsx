import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip, Marker, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import { Icon, DivIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

type Temple = {
  id: number;
  name: string;
  location: [number, number];
  density: number;
  visitorsNow: number;
  maxCapacity: number;
  description: string;
  imageUrl?: string;
  facts: string[];
  bestTimeToVisit: string;
  averageVisitDuration: string;
  facilities: string[];
};

// Component to fit map bounds to temple locations
function MapBoundsComponent({ temples }: { temples?: Temple[] }) {
  const map = useMap();
  
  React.useEffect(() => {
    if (temples && temples.length > 0) {
      const lats = temples.map(t => t.location[0]);
      const lngs = temples.map(t => t.location[1]);
      const minLat = Math.min(...lats) - 0.5;
      const maxLat = Math.max(...lats) + 0.5;
      const minLng = Math.min(...lngs) - 0.5;
      const maxLng = Math.max(...lngs) + 0.5;
      
      map.fitBounds([
        [minLat, minLng],
        [maxLat, maxLng]
      ]);
    }
  }, [map, temples]);
  
  return null;
}

export default function LeafletMap({ 
  temples, 
  grid 
}: { 
  temples?: Temple[]; 
  grid?: number[][] 
}) {
  const center: [number, number] = [22.3, 71.5]; // Center of Gujarat
  const zoom = 7;
  
  const getColor = (value: number): string => {
    if (value > 0.8) return '#9b2226'; // Very High - keeping original
    if (value > 0.6) return '#ae2012'; // High - keeping original
    if (value > 0.5) return '#FFECB3'; // Medium - light yellow
    if (value > 0.3) return '#74C69D'; // Low - light green
    return '#2D6A4F';                  // Very Low - green
  };
  
  const createTempleIcon = (temple: Temple) => {
    const densityColor = getColor(temple.density);
    
    // Using the same temple emoji for all temples
    const templeEmoji = '🛕'; // Hindu Temple emoji
    
    const iconHtml = renderToStaticMarkup(
      React.createElement('div', {
        style: {
          backgroundColor: '#F0E6D2',
          border: `3px solid ${densityColor}`,
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(139, 62, 0, 0.3)'
        }
      }, React.createElement('span', {
        style: {
          fontSize: '24px',
          lineHeight: '1',
          position: 'relative'
        }
      }, templeEmoji))
    );
    
    return new DivIcon({
      html: iconHtml,
      className: 'temple-marker',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  };

  return (
    <motion.div 
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full z-0"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {temples?.map((temple) => (
          <Marker
            key={temple.id}
            position={temple.location}
            icon={createTempleIcon(temple)}
          >
            <Tooltip permanent direction="top" offset={[0, -25]} className="font-bold">
              {temple.name}
            </Tooltip>
            <Popup className="temple-popup">
              <div className="p-4 max-w-sm devanagari-font">
                {temple.imageUrl && (
                  <img 
                    src={temple.imageUrl} 
                    alt={temple.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-bold text-temple-brown mb-2 devanagari-font">{temple.name}</h3>
                <p className="text-sm text-temple-henna mb-4">{temple.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Current Visitors:</span>
                    <br />
                    {temple.visitorsNow} / {temple.maxCapacity}
                  </div>
                  <div>
                    <span className="font-medium">Best Time:</span>
                    <br />
                    {temple.bestTimeToVisit}
                  </div>
                  <div>
                    <span className="font-medium">Average Visit:</span>
                    <br />
                    {temple.averageVisitDuration}
                  </div>
                  <div>
                    <span className="font-medium">Facilities:</span>
                    <br />
                    {temple.facilities.join(', ')}
                  </div>
                </div>
                {/* Quick facts removed as requested */}
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapBoundsComponent temples={temples} />
      </MapContainer>
    </motion.div>
  );
}