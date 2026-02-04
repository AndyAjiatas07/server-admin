import Tournament from './tournaments.model.js';

// Listar torneos
export const getTournaments = async (req, res) => {
  try {
    const { page = 1, limit = 10, isActive = true } = req.query;

    const filter = { isActive };

    const tournaments = await Tournament.find(filter)
      .populate('field')
      .populate('teams')  // Mantenemos la población de equipos
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Tournament.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: tournaments,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los torneos',
      error: error.message,
    });
  }
};

// Obtener torneo por ID
export const getTournamentById = async (req, res) => {
  try {
    const { id } = req.params;

    const tournament = await Tournament.findById(id)
      .populate('field')
      .populate('teams');  // Se sigue populando los equipos

    if (!tournament) {
      return res.status(404).json({
        success: false,
        message: 'Torneo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      data: tournament,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el torneo',
      error: error.message,
    });
  }
};

// Crear torneo
export const createTournament = async (req, res) => {
  try {
    const tournament = new Tournament(req.body);  // No hacemos nada especial con organizer
    await tournament.save();

    res.status(201).json({
      success: true,
      message: 'Torneo creado exitosamente',
      data: tournament,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al crear el torneo',
      error: error.message,
    });
  }
};

// Actualizar torneo
export const updateTournament = async (req, res) => {
  try {
    const { id } = req.params;

    const tournament = await Tournament.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!tournament) {
      return res.status(404).json({
        success: false,
        message: 'Torneo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Torneo actualizado exitosamente',
      data: tournament,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error al actualizar el torneo',
      error: error.message,
    });
  }
};

// Activar / Desactivar torneo
export const changeTournamentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const isActive = req.url.includes('/activate');

    const tournament = await Tournament.findByIdAndUpdate(
      id,
      { isActive },
      { new: true }
    );

    if (!tournament) {
      return res.status(404).json({
        success: false,
        message: 'Torneo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: `Torneo ${isActive ? 'activado' : 'desactivado'} exitosamente`,
      data: tournament,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al cambiar el estado del torneo',
      error: error.message,
    });
  }
};

// Eliminar torneo
export const deleteTournament = async (req, res) => {
  try {
    const { id } = req.params;

    const tournament = await Tournament.findByIdAndDelete(id);

    if (!tournament) {
      return res.status(404).json({
        success: false,
        message: 'Torneo no encontrado',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Torneo eliminado exitosamente',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el torneo',
      error: error.message,
    });
  }
};
