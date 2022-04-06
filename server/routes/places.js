import express from 'express';
import { getPlaces, savePlace } from '../controllers/places.js';

const router = express.Router();

router.post('/save', savePlace);
router.get('/savedplaces', getPlaces);

export default router;
