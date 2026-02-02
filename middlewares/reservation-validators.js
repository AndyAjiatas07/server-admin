import { param } from 'express-validator';
import { checkValidators } from './check-validators.js';

/**
 * Validación para obtener reserva por ID
 */
export const validateGetReservationById = [
  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];

/**
 * Validación para confirmar reserva
 */
export const validateConfirmReservation = [
  param('id')
    .isMongoId()
    .withMessage('El ID debe ser un ObjectId válido de MongoDB'),
  checkValidators,
];
