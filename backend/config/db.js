import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Erfolgreich mit MongoDB verbunden");
  } catch (error) {
    console.error("❌ MongoDB-Verbindungsfehler:", error);
    process.exit(1); // Beendet den Prozess bei Fehler
  }
};

export default connectDB;
