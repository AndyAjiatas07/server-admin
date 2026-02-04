"use strict";

import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  tournamentName: {
    type: String,
    required: [true, "El nombre del torneo es requerido"],
    trim: true,
    maxLength: [
      120,
      "El nombre del torneo no puede exceder 120 caracteres",
    ],
  },
  sportType: {
    type: String,
    required: [true, "El tipo de deporte es requerido"],
    enum: {
      values: ["FUTBOL", "FUTSAL"],
      message: "Tipo de deporte no válido",
    },
  },
  field: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Field",
    required: [true, "La cancha es requerida"],
  },
  organizer: {
    type: String,
    required: [true, "El organizador es requerido"],
    trim: true,
    maxLength: [
      120,
      "El nombre del torneo no puede exceder 120 caracteres",
    ],
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  ],
  maxTeams: {
    type: Number,
    required: [true, "El número máximo de equipos es requerido"],
    min: [2, "El torneo debe tener al menos 2 equipos"],
  },
  startDate: {
    type: Date,
    required: [true, "La fecha de inicio es requerida"],
  },
  endDate: {
    type: Date,
    required: [true, "La fecha de finalización es requerida"],
  },
  registrationFee: {
    type: Number,
    required: [true, "La cuota de inscripción es requerida"],
    min: [0, "La cuota debe ser mayor o igual a 0"],
  },
  prize: {
    type: String,
    trim: true,
    maxLength: [200, "El premio no puede exceder 200 caracteres"],
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["INSCRIPCIONES", "EN_CURSO", "FINALIZADO", "CANCELADO"],
      message: "Estado del torneo no válido",
    },
    default: "INSCRIPCIONES",
  },
  description: {
    type: String,
    trim: true,
    maxLength: [500, "La descripción no puede exceder 500 caracteres"],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Tournament", tournamentSchema);
