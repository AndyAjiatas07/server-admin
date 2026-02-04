import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Crear equipo
export const validateCreateTeam = [
  body('teamName')
    .trim()
    .notEmpty()
    .withMessage('El nombre del equipo es requerido')
    .isLength({ max: 100 })
    .withMessage('El nombre del equipo no puede exceder 100 caracteres'),

  body('sportType')
    .notEmpty()
    .withMessage('El tipo de deporte es requerido')
    .isIn(['FUTBOL', 'FUTSAL'])
    .withMessage('Tipo de deporte no válido'),

  body('maxPlayers')
    .notEmpty()
    .withMessage('El número máximo de jugadores es requerido')
    .isInt({ min: 5, max: 11 })
    .withMessage('El equipo debe tener entre 5 y 11 jugadores'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 300 })
    .withMessage('La descripción no puede exceder 300 caracteres'),

  checkValidators,
];

// Actualizar equipo
export const validateUpdateTeam = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido'),

  body('teamName')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('El nombre del equipo no puede exceder 100 caracteres'),

  body('sportType')
    .optional()
    .isIn(['FUTBOL', 'FUTSAL'])
    .withMessage('Tipo de deporte no válido'),

  body('maxPlayers')
    .optional()
    .isInt({ min: 5, max: 11 })
    .withMessage('El equipo debe tener entre 5 y 11 jugadores'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 300 })
    .withMessage('La descripción no puede exceder 300 caracteres'),

  checkValidators,
];

// Activar / Desactivar / Eliminar
export const validateTeamById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido'),
  checkValidators,
];
