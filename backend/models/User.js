// models/User.js
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'organizer'], default: 'user' },
  
  
  // NEUE FELDER
  email: { type: String },
  organizationName: { type: String },
  address: { type: String },
  date: { type: String },  // Datum im Format YYYY-MM-DD
  time: { type: String },  // Uhrzeit im Format HH:MM

  accessibilityOptions: {
    ramp: { type: Boolean, default: false },
    elevator: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    quietRoom: { type: Boolean, default: false },
    interpreter: { type: Boolean, default: false },
    therapyAnimals: { type: Boolean, default: false },
  },
  // ...andere Felder nach Bedarf
});

const User = mongoose.model('User', userSchema);
export default User;
