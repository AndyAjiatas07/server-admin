import { body, param } from 'express-validator';
import { checkValidators } from './check-validators.js';

// Crear torneo
// Crear torneo
export const validateCreateTournament = [
  body('tournamentName')
    .trim()
    .notEmpty()
    .withMessage('El nombre del torneo es requerido')
    .isLength({ max: 120 })
    .withMessage('El nombre del torneo no puede exceder 120 caracteres'),

  body('sportType')
    .notEmpty()
    .withMessage('El tipo de deporte es requerido')
    .isIn(['FUTBOL', 'FUTSAL'])
    .withMessage('Tipo de deporte no válido'),

  body('field')
    .notEmpty()
    .withMessage('La cancha es requerida')
    .isMongoId()
    .withMessage('La cancha debe ser un ID válido'),

  body('organizer')
    .notEmpty()
    .withMessage('El organizador es requerido'), // Cambiado, no hace referencia a User

  body('teams')
    .optional()
    .isArray()
    .withMessage('Los equipos deben ser un arreglo'),

  body('teams.*')
    .optional()
    .isMongoId()
    .withMessage('Cada equipo debe ser un ID válido'),

  body('maxTeams')
    .notEmpty()
    .withMessage('El número máximo de equipos es requerido')
    .isInt({ min: 2 })
    .withMessage('El torneo debe tener al menos 2 equipos'),

  body('startDate')
    .notEmpty()
    .withMessage('La fecha de inicio es requerida')
    .isISO8601()
    .withMessage('Fecha de inicio no válida'),

  body('endDate')
    .notEmpty()
    .withMessage('La fecha de finalización es requerida')
    .isISO8601()
    .withMessage('Fecha de finalización no válida'),

  body('registrationFee')
    .notEmpty()
    .withMessage('La cuota de inscripción es requerida')
    .isFloat({ min: 0 })
    .withMessage('La cuota debe ser mayor o igual a 0'),

  body('prize')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('El premio no puede exceder 200 caracteres'),

  body('status')
    .optional()
    .isIn(['INSCRIPCIONES', 'EN_CURSO', 'FINALIZADO', 'CANCELADO'])
    .withMessage('Estado del torneo no válido'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder 500 caracteres'),

  checkValidators,
];


// Actualizar torneo
export const validateUpdateTournament = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido'),

  body('tournamentName')
    .optional()
    .trim()
    .isLength({ max: 120 })
    .withMessage('El nombre del torneo no puede exceder 120 caracteres'),

  body('sportType')
    .optional()
    .isIn(['FUTBOL', 'FUTSAL'])
    .withMessage('Tipo de deporte no válido'),

  body('field')
    .optional()
    .isMongoId()
    .withMessage('La cancha debe ser un ID válido'),

  body('organizer')
    .optional(), // Cambiado, no hace referencia a User

  body('teams')
    .optional()
    .isArray(),

  body('teams.*')
    .optional()
    .isMongoId()
    .withMessage('Cada equipo debe ser un ID válido'),

  body('maxTeams')
    .optional()
    .isInt({ min: 2 })
    .withMessage('El torneo debe tener al menos 2 equipos'),

  body('startDate')
    .optional()
    .isISO8601()
    .withMessage('Fecha de inicio no válida'),

  body('endDate')
    .optional()
    .isISO8601()
    .withMessage('Fecha de finalización no válida'),

  body('registrationFee')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('La cuota debe ser mayor o igual a 0'),

  body('prize')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('El premio no puede exceder 200 caracteres'),

  body('status')
    .optional()
    .isIn(['INSCRIPCIONES', 'EN_CURSO', 'FINALIZADO', 'CANCELADO'])
    .withMessage('Estado del torneo no válido'),

  body('description')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('La descripción no puede exceder 500 caracteres'),

  checkValidators,
];


// Activar / Desactivar / Eliminar / Obtener por ID
export const validateTournamentById = [
  param('id')
    .isMongoId()
    .withMessage('ID debe ser un ObjectId válido'),
  checkValidators,
];
