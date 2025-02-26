import express from 'express';
import Event from '../models/Event.js';

const router = express.Router();

// Route zum Abrufen aller Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);  // Fehler in der Konsole loggen
    res.status(500).json({ message: 'Fehler beim Abrufen der Events', error: error.message });
  }
});

// Route zum Hinzufügen eines neuen Events
router.post('/register', async (req, res) => {
  try {
    const {
      title, description, date, location, lat, lon, accessibilityOptions,
      publicTransportProximity, wcAccessible, elevatorAccessible, languageOptions
    } = req.body;

    // Eingabedaten validieren
    if (!title || !description || !date || !location) {
      return res.status(400).json({ message: 'Alle erforderlichen Felder müssen ausgefüllt werden' });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      lat,
      lon,
      accessibilityOptions,
      publicTransportProximity,
      wcAccessible,
      elevatorAccessible,
      languageOptions
    });

    await newEvent.save();
    res.status(201).json({ message: 'Event erfolgreich registriert', event: newEvent });
  } catch (error) {
    console.error(error);  // Fehler in der Konsole loggen
    res.status(500).json({ message: 'Fehler beim Speichern des Events', error: error.message });
  }
});

// Route zum Hinzufügen einer Bewertung zu einem Event
router.post('/:eventId/rate', async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId, rating, comment } = req.body;

    if (!userId || !rating) {
      return res.status(400).json({ message: 'Benutzer und Bewertung sind erforderlich' });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event nicht gefunden' });
    }

    event.ratings.push({ userId, rating, comment });
    await event.save();

    res.status(200).json({ message: 'Bewertung erfolgreich hinzugefügt', event });
  } catch (error) {
    console.error(error);  // Fehler in der Konsole loggen
    res.status(500).json({ message: 'Fehler beim Hinzufügen der Bewertung', error: error.message });
  }
});

export default router;
