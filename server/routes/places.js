import express from 'express';
import { deletePlace, getPlaces, savePlace } from '../controllers/places.js';

const router = express.Router();

router.post('/save', savePlace);
router.get('/savedplaces', getPlaces);
router.delete('/:id', deletePlace);

export default router;
