import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ events, location }) => {
  // Standardposition, falls kein Standort angegeben
  const defaultPosition = location ? [location.lat, location.lng] : [51.505, -0.09];

  return (
    <MapContainer center={defaultPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events && events.map(event => (
        <Marker key={event.id} position={[event.latitude, event.longitude]}>
          <Popup>
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
