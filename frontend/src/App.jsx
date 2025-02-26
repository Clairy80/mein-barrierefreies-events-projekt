import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar.jsx';
import Map from './components/Map';
import Login from './pages/Login.jsx'; 
import Register from './pages/Register.jsx'; 

const App = () => {
  const [location, setLocation] = useState(null);

  const handleSearch = (location) => {
    if (location) {
      setLocation(location);
    }
  };

  return (
    <Router>
      <h1>Hallo</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar onSearch={handleSearch} />
            {location && <Map location={location} />}
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
