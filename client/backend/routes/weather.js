import express from 'express';
import { getWeatherByLocation } from '../controllers/weatherController.js';

const router = express.Router();

// Get weather by location
router.get('/:location', getWeatherByLocation);

export default router;