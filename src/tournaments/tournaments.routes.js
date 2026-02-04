import { Router } from 'express';
import {
  getTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  changeTournamentStatus,
  deleteTournament,
} from './tournaments.controller.js';

import {
  validateCreateTournament,
  validateUpdateTournament,
  validateTournamentById,
} from '../../middlewares/tournament-validators.js';

const router = Router();

// GET
router.get('/', getTournaments);
router.get('/:id', validateTournamentById, getTournamentById);

// POST
router.post('/', validateCreateTournament, createTournament);

// PUT
router.put('/:id', validateUpdateTournament, updateTournament);
router.put('/:id/activate', validateTournamentById, changeTournamentStatus);
router.put('/:id/deactivate', validateTournamentById, changeTournamentStatus);

// DELETE
router.delete('/:id', validateTournamentById, deleteTournament);

export default router;
