# React + Vite

# Barrierefreie Events & Locations

Ein React-Projekt mit Fokus auf Barrierefreiheit, Mehrsprachigkeit und Kartenintegration zur Darstellung barrierefreier Events und Locations.

---

## Features

- **Zentrale Startseite**
  - **Event-Suche:** Eingabe von Postleitzahl/Ort über die SearchBar.
  - **Automatische Standortbestimmung:** Ermittelt automatisch den aktuellen Standort des Nutzers via Geolocation.
  - **Kartenintegration:** Zeigt Events als Marker (Pins) auf einer Karte mittels Leaflet.
  - **Event-Liste:** Auflistung der gefundenen Events unterhalb der Karte.

- **Benutzerverwaltung**
  - **Registrierung:** Allgemeine Registrierung für Veranstalter und Nutzer.
  - **Login:** Anmeldung mit JWT-Token, Speicherung im `localStorage`.
  - **Passwort-Reset:** Möglichkeit, das Passwort zurückzusetzen (mit E-Mail-Versand via Nodemailer).

- **Barrierefreiheit**
  - **AccessibilityToolbar:** Bietet:
    - **Theme Toggle:** Wechsel zwischen Hell- und Dunkelmodus.
    - **Schriftgrößensteuerung:** Anpassen der Schriftgröße.
    - **Sprachumschaltung:** Mehrsprachigkeit (Englisch, Deutsch, Französisch) mit react-i18next.
    - **Text-to-Speech:** Liest den Seiteninhalt (gesamter Text) vor.
  - Semantische HTML-Struktur, ARIA-Attribute und Tastaturnavigation (noch ausbaufähig).

- **Footer**
  - Enthält Links zu **Impressum**, **Datenschutzerklärung** und **Spenden**.
  - Separate Routen: `/impressum`, `/datenschutz`, `/spenden`.

---

## Ordnerstruktur (Frontend)

frontend/ ├── package.json ├── vite.config.js ├── public/ │ └── index.html └── src/ ├── index.css ├── i18n.js ├── main.jsx ├── App.jsx ├── components/ │ ├── AccessibilityToolbar.jsx │ ├── Navbar.jsx │ ├── Footer.jsx │ ├── Searchbar.jsx │ ├── Map.jsx │ └── EventList.jsx └── pages/ ├── Login.jsx ├── Register.jsx ├── ImpressumPage.jsx ├── DatenschutzPage.jsx └── SpendenPage.jsx


---

## Installation & Start

### Frontend

1. **Abhängigkeiten installieren:**

   ```bash
   npm install
Frontend starten (Vite):

bash
Kopieren
Bearbeiten
npm run dev
Das Projekt läuft dann auf http://localhost:3000.

Backend
Starte dein Backend (Node.js/Express) separat (z. B. via npm run dev im Backend-Ordner).
Typischerweise ist der Backend-Server unter http://localhost:5001 erreichbar.
i18n-Konfiguration
Die Mehrsprachigkeit wird mit react-i18next umgesetzt.

Installiere die Bibliotheken:

bash
Kopieren
Bearbeiten
npm install react-i18next i18next
src/i18n.js enthält die Konfiguration und Übersetzungsobjekte für Englisch, Deutsch und Französisch.

Backend-Hinweise
Wichtige API-Routen:

POST /api/users/register – Registrierung eines neuen Nutzers.
POST /api/users/login – Anmeldung, Rückgabe eines JWT-Tokens.
POST /api/users/forgot-password – Anfordern eines Passwort-Reset-Tokens.
POST /api/users/reset-password – Zurücksetzen des Passworts.
GET /api/events/search – Suche nach Events (optional mit Query-Parameter ?q=).
JWT:

Das Token wird im Frontend gespeichert und bei geschützten API-Aufrufen im Header (Authorization: Bearer <token>) mitgesendet.
Weitere Anmerkungen
Barrierefreiheit:

Neben der AccessibilityToolbar sollten weitere ARIA-Attribute und eine semantische Struktur implementiert werden, um die Seite noch zugänglicher zu machen.
Die Text-to-Speech-Funktion liest aktuell den gesamten Seiteninhalt vor. Für gezieltere Vorlesefunktionen kannst du bestimmte Bereiche mit IDs versehen.
Styling:

Ein Mix aus globalen CSS-Styles (index.css), Bootstrap (für die Navbar) und individuellen Komponenten-Stilen (z. B. in CSS Modules oder inline) sorgt für ein modernes Erscheinungsbild.
Die Footer-Komponente sorgt für ein konsistentes Layout mit Links zu Impressum, Datenschutz und Spenden.

Fazit
Dieses Projekt bietet eine solide Basis für barrierefreie Veranstaltungen, inklusive:

Such- und Kartenintegration,
Benutzerverwaltung,
Mehrsprachigkeit und Barrierefreiheit über eine AccessibilityToolbar,
sowie eine saubere, modulare Codebasis.

Bei Fragen oder Problemen wende dich gern an den Entwickler.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
