import express from 'express';
const router = express.Router();
// Route zum Hinzufügen eines neuen Events
router.post('/register', async (req, res) => {
  try {
    const {
      title,
      description,
      date,       // Erwartet ein Datum im Format "YYYY-MM-DD"
      time,       // Erwartet eine Uhrzeit im Format "HH:MM" (optional)
      location,
      lat,
      lon,
      accessibilityOptions,
      publicTransportProximity,
      wcAccessible,
      elevatorAccessible,
      languageOptions
    } = req.body;

    // Eingabedaten validieren
    if (!title || !description || !date || !location) {
      return res.status(400).json({ message: 'Alle erforderlichen Felder müssen ausgefüllt werden' });
    }

    // Datum und Uhrzeit kombinieren (falls time vorhanden ist)
    let eventDate = date;
    if (time) {
      eventDate = new Date(`${date}T${time}:00`);
    }

    const newEvent = new Event({
      title,
      description,
      date: eventDate,  // Speichert das kombinierte Datum und Uhrzeit
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

export default router; 