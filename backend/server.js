import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import Event from './models/Event.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // ✅ CORS korrekt eingebunden

const port = process.env.PORT || 5001;

// MongoDB-Verbindung herstellen
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Datenbankverbindung erfolgreich');
    app.listen(port, () => {
      console.log(`🚀 Server läuft auf Port ${port}`);
    });
  })
  .catch(err => console.error('❌ Datenbankverbindungsfehler:', err));
  
// Routen
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

// Event-Suche API-Route
app.get('/api/events/search', async (req, res) => {
  try {
    const searchQuery = req.query.q;
    const events = searchQuery
      ? await Event.find({ title: { $regex: searchQuery, $options: 'i' } })
      : await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: '❌ Fehler beim Abrufen der Events', error });
  }
});

// Debugging: Zeigt verfügbare Routen an
console.log('🔍 Verfügbare Routen:');
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) console.log(`➡️ ${r.route.path}`);
});

