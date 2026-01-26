"use strict";

import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, "El nombre del equipo es requerido"],
    trim: true,
    maxLength: [
      100,
      "El nombre del equipo no puede exceder 100 caracteres",
    ],
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "El capitán del equipo es requerido"],
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  sportType: {
    type: String,
    required: [true, "El tipo de deporte es requerido"],
    enum: {
      values: ["FUTBOL", "FUTSAL"],
      message: "Tipo de deporte no válido",
    },
  },
  maxPlayers: {
    type: Number,
    required: [true, "El número máximo de jugadores es requerido"],
    min: [5, "El equipo debe tener al menos 5 jugadores"],
    max: [11, "El equipo no puede tener más de 11 jugadores"],
  },
  description: {
    type: String,
    trim: true,
    maxLength: [300, "La descripción no puede exceder 300 caracteres"],
  },
  logo: {
    type: String,
    default: "teams/default_team_logo",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Team", teamSchema);
