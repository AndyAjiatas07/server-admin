"use strict";

import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "El usuario es requerido"],
  },
  field: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Field",
    required: [true, "La cancha es requerida"],
  },
  reservationDate: {
    type: Date,
    required: [true, "La fecha de la reserva es requerida"],
  },
  startTime: {
    type: String,
    required: [true, "La hora de inicio es requerida"],

  },
  endTime: {
    type: String,
    required: [true, "La hora de finalización es requerida"],

  },
  totalPrice: {
    type: Number,
    required: [true, "El precio total es requerido"],
    min: [0, "El precio debe ser mayor o igual a 0"],
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["PENDIENTE", "CONFIRMADA", "CANCELADA"],
      message: "Estado de reserva no válido",
    },
    default: "PENDIENTE",
  },
  paymentMethod: {
    type: String,
    enum: {
      values: ["EFECTIVO", "TARJETA", "TRANSFERENCIA"],
      message: "Método de pago no válido",
    },
  },
  notes: {
    type: String,
    trim: true,
    maxLength: [300, "Las notas no pueden exceder 300 caracteres"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Reservation", reservationSchema);
