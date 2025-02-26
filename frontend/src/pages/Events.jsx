// src/pages/Events.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '../components/Map';
import SearchBar from '../components/Searchbar.jsx';

const Events = () => {
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);

  const handleSearch = (location) => {
    if (location) {
      setLocation(location);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/events/search');
        setEvents(response.data);
      } catch (error) {
        console.error('Fehler beim Laden der Events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event-Suche</h2>
      <SearchBar onSearch={handleSearch} />
      {events.length > 0 ? (
        <Map events={events} location={location} />
      ) : (
        <p>Keine Events gefunden.</p>
      )}
    </div>
  );
};

export default Events;
