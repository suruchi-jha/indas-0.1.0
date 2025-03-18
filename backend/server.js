import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import weatherRoutes from './routes/weather.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

// Middleware

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });