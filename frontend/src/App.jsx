import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar.jsx';
import Map from './components/Map';
import EventList from './components/EventList';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);

  // Automatische Standortsuche: Wird ausgeführt, wenn noch kein Standort gesetzt ist.
  useEffect(() => {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Fehler bei der Standortbestimmung:', error);
        }
      );
    }
  }, [location]);

  // Suchanfrage aus der SearchBar wird in den State gesetzt
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Events vom Backend laden, basierend auf dem Suchbegriff
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let url = 'http://localhost:5001/api/events/search';
        if (searchQuery) {
          url += `?q=${encodeURIComponent(searchQuery)}`;
        }
        const response = await axios.get(url);
        setEvents(response.data);
      } catch (error) {
        console.error('Fehler beim Laden der Events:', error);
      }
    };
    fetchEvents();
  }, [searchQuery]);

  return (
    <Router>
      <AccessibilityToolbar />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <Map events={events} location={location} />
              <EventList events={events} />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
