import React, { useEffect } from 'react';
import L from 'leaflet'; // Leaflet für die Kartenanzeige

const Map = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13); // Beispiel für die Initialposition der Karte

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Eventuelle Pins hinzufügen
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('<b>Event Location</b>')
      .openPopup();
  }, []);

  return (
    <div id="map" style={{ height: '500px' }}></div>
  );
};

export default Map;
