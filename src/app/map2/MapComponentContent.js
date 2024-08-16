
'use client'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';


const customIcon = new L.Icon({
  iconUrl: '/icon.png', 
  iconSize: [38, 50], 
  iconAnchor: [19, 50], 
  popupAnchor: [0, -50], 
});

const CenterMap = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true });
    }
  }, [center, map]);

  return null;
};

const MapComponentContent = () => {
  const markers = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];

  const [center, setCenter] = useState(null);

  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker 
          key={index} 
          position={marker.position}
          icon={customIcon} 
          eventHandlers={{
            click: () => setCenter(marker.position),
          }}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
      <CenterMap center={center} />
    </MapContainer>
  );
};

export default MapComponentContent;


