import { Router } from 'express';
import {
  getReservations,
  getReservationById,
  confirmReservation,
} from './reservations.controller.js';

import {
  validateGetReservationById,
  validateConfirmReservation,
} from '../../middlewares/reservation-validators.js';

const router = Router();

/**
 * GET
 * /kinalSportsAdmin/v1/reservations
 */
router.get('/', getReservations);

/**
 * GET
 * /kinalSportsAdmin/v1/reservations/:id
 */
router.get('/:id', validateGetReservationById, getReservationById);

/**
 * PUT
 * /kinalSportsAdmin/v1/reservations/:id/confirm
 */
router.put(
  '/:id/confirm',
  validateConfirmReservation,
  confirmReservation
);

export default router;
