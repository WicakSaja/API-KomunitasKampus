import express from 'express';
import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';
import { validate } from '../middleware/validate.js';
import { eventSchema } from '../validations/eventValidation.js';
import { requireAuth, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEvent);

router.post('/', requireAuth, requireAdmin, validate(eventSchema), createEvent);
router.put('/:id', requireAuth, requireAdmin, validate(eventSchema), updateEvent);
router.delete('/:id', requireAuth, requireAdmin, deleteEvent);

export default router;
