/*************  ✨ Codeium Command 🌟  *************/
import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Navbar-Komponente
import SearchBar from './components/SearchBar'; // SearchBar-Komponente
import Map from './components/Map'; // Map-Komponente


const App = () => {
  const [location, setLocation] = useState(null);

  const handleSearch = (location) => {
    if (location) {
      setLocation(location);  // Setzt den Standort basierend auf der Suche
    }
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      {location && <Map location={location} />}

    </div>
  );
};

export default App;
/******  0afb0119-f17b-4841-9b3a-83b760e6cde2  *******/
