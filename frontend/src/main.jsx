// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n"; // i18next Konfiguration
import "./index.css"; // Globale CSS

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
