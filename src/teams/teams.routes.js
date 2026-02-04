import { Router } from 'express';
import {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  changeTeamStatus,
  deleteTeam,
} from './teams.controller.js';

import {
  validateCreateTeam,
  validateUpdateTeam,
  validateTeamById,
} from '../../middlewares/team-validators.js';

import { uploadTeamImage } from '../../middlewares/file-uploader.js';

const router = Router();

// GET
router.get('/', getTeams);
router.get('/:id', validateTeamById, getTeamById);

// POST
router.post(
  '/',
  uploadTeamImage.single('logo'),
  validateCreateTeam,
  createTeam
);

// PUT
router.put(
  '/:id',
  uploadTeamImage.single('logo'),
  validateUpdateTeam,
  updateTeam
);

// Activar / Desactivar equipo
router.put('/:id/activate', validateTeamById, changeTeamStatus);
router.put('/:id/deactivate', validateTeamById, changeTeamStatus);

// DELETE
router.delete('/:id', validateTeamById, deleteTeam);

export default router;
