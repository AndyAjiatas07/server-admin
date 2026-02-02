import { body, param } from "express-validator";
import { checkValidators } from "./check-validators.js";

export const validateCreateField = [
// body() nos permite validar los campos enviados en el cuerpo de la solicitud
body('fieldName')
// trim() elimina los espacios en blanco al inicio y al final
.trim()
// notEmty() valida que el campo no esté vacío
.notEmpty()
.withMessage('El nombre del campo es requerido')
// islength() valida que el campo tenga un tamaño mínimo y máximo
.isLength({ min: 2, max: 100 })
// withMessage() agrega un mensaje de error para la validación anterior
.withMessage('El nombre debe tener entre 2 y 100 caracteres'),
body('fieldType')
.notEmpty()
.withMessage('El tipo de campo es requerido')
// isIn() valida que el valor del campo sea uno de los valores permitidos
.isIn(['NATURAL', 'SINTETICA', 'CONCRETO'])
.withMessage('Tipo de superficie no válida'),
body('capacity')
.notEmpty()
.withMessage('La capacidad es requerida')
// isIn() valida que el valor del campo sea uno de los valores permitidos
.isIn(['FUTBOL_5', 'FUTBOL_7', 'FUTBOL_11'])
.withMessage('Capacidad no válida'),
body('pricePerHour')
.notEmpty()
.withMessage('El precio por hora es requerido')
// isFloat() valida que el valor del campo sea un número decimal
.isFloat({ min: 0 })
.withMessage('El precio debe ser mayor o igual a 0'),
body('description')
.optional()
.trim()
.isLength({ max: 500 })
.withMessage('La descripción no puede exceder 500 caracteres'),
];