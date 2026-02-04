import Reservation from './reservations.model.js';

/**
 * GET /kinalSportsAdmin/v1/reservations
 * Listar todas las reservas (con paginación y filtros)
 */
export const getReservations = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, isActive = true } = req.query;

    const filter = { isActive };

    if (status) {
      filter.status = status;
    }

    const reservations = await Reservation.find(filter)
      .populate('field', 'fieldName pricePerHour')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ reservationDate: -1 });

    const total = await Reservation.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: reservations,
      pagination: {
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        totalRecords: total,
        limit: Number(limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener las reservas',
      error: error.message,
    });
  }
};

/**
 * GET /kinalSportsAdmin/v1/reservations/:id
 * Obtener reserva por ID
 */
export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id)
      .populate('field', 'fieldName pricePerHour');

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada',
      });
    }

    res.status(200).json({
      success: true,
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener la reserva',
      error: error.message,
    });
  }
};

/**
 * PUT /kinalSportsAdmin/v1/reservations/:id/confirm
 * Confirmar reserva
 */
export const confirmReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reserva no encontrada',
      });
    }

    if (reservation.status === 'CONFIRMADA') {
      return res.status(400).json({
        success: false,
        message: 'La reserva ya está confirmada',
      });
    }

    reservation.status = 'CONFIRMADA';
    await reservation.save();

    res.status(200).json({
      success: true,
      message: 'Reserva confirmada exitosamente',
      data: reservation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al confirmar la reserva',
      error: error.message,
    });
  }
};
