import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'organizer'], default: 'user' },
    accessibilityOptions: [{ type: String }], // Array für Barrierefreiheitsoptionen
    resetToken: { type: String },
    resetTokenExpiry: { type: Date }
});

const User = mongoose.model('User', userSchema);
export default User;