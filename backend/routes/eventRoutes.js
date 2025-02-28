import express from 'express'; 
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 
import User from '../models/User.js'; 
import { protect } from '../middleware/authMiddleware.js'; // AuthMiddleware importieren

const router = express.Router();

// Registrierung für Benutzer
router.post('/register/user', async (req, res) => {
  const { username, password, role = 'user', accessibilityOptions = [] } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'Benutzername bereits vergeben' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role, accessibilityOptions });
    await user.save();

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'Benutzer erfolgreich erstellt', token, user: { id: user._id, username: user.username, role, accessibilityOptions } });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Erstellen des Users', error: error.message });
  }
});

// Login für Benutzer
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Benutzer nicht gefunden" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Ungültige Zugangsdaten" });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: "Login erfolgreich", token, user: { id: user._id, username: user.username, role: user.role, accessibilityOptions: user.accessibilityOptions } });
  } catch (error) {
    res.status(500).json({ message: "Fehler beim Login", error: error.message });
  }
});

// Profil des Benutzers abrufen
router.get('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    if (!user) return res.status(404).json({ message: 'Benutzer nicht gefunden' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Benutzerdaten', error });
  }
});

export default router;
