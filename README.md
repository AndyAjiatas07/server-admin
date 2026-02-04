# server-admin

2021496

# KinalSport Admin API

API REST desarrollada con **Node.js** y **MongoDB** para la administración del sistema **KinalSport**, permitiendo la gestión de **canchas**, **reservaciones**, **equipos deportivos** y **torneos**, con operaciones CRUD, validaciones y manejo centralizado de errores.

---

## Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv  
- cors  
- helmet  
- morgan  
- express-validator  
- multer  
- cloudinary  

---

## Estructura del proyecto

SERVER-ADMIN
├── configs
│ ├── app.js
│ ├── cors-configuration.js
│ ├── db.js
│ └── helmet-configuration.js
├── middlewares
│ ├── check-validators.js
│ ├── field-validators.js
│ ├── reservation-validators.js
│ ├── team-validators.js
│ ├── tournament-validators.js
│ ├── file-uploader.js
│ ├── handle-errors.js
│ └── request-limit.js
├── src
│ ├── fields
│ │ ├── field.controller.js
│ │ ├── field.model.js
│ │ └── field.routes.js
│ ├── reservations
│ │ ├── reservations.controller.js
│ │ ├── reservations.model.js
│ │ └── reservations.routes.js
│ ├── teams
│ │ ├── teams.controller.js
│ │ ├── teams.model.js
│ │ └── teams.routes.js
│ ├── tournaments
│ │ ├── tournaments.controller.js
│ │ ├── tournaments.model.js
│ │ └── tournaments.routes.js
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md


---

## Configuración previa

1. Tener **Node.js** y **MongoDB** instalados.
2. Crear el archivo `.env` en la raíz del proyecto:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/kinalSportAdmin
Inicio del proyecto
Ejecutar el servidor con:

node index.js
Servidor disponible en:

http://localhost:3001
Base URL del API:

http://localhost:3001/kinalSportAdmin/v1
Endpoint de verificación (Health Check)
Método: GET

Endpoint:

/kinalSportAdmin/v1/health
Respuesta esperada:

{
  "status": "ok",
  "service": "KinalSport Admin",
  "version": "1.0.0"
}
Endpoints – Canchas (Fields)
Base URL
/kinalSportAdmin/v1/fields
Crear cancha
Método: POST

Endpoint: /fields

{
  "fieldName": "Campo de Fútbol 5 - Kinal Sports",
  "fieldType": "SINTETICA",
  "capacity": "FUTBOL_5",
  "pricePerHour": 150.00,
  "description": "Este es un campo de fútbol 5, ideal para partidos entre amigos o torneos locales.",
  "photo": "fields/campo_futbol_5_nyvxo5",
  "isActive": true
}
Listar canchas
Método: GET

Endpoint:

/fields
Actualizar cancha
Método: PUT

Endpoint:

/fields/:id
Eliminar cancha
Método: DELETE

Endpoint:

/fields/:id
Endpoints – Reservaciones
Base URL
/kinalSportAdmin/v1/reservations
Listar reservaciones
Método: GET

Endpoint:

/reservations
Obtener reservación por ID
Método: GET

Endpoint:

/reservations/:id
Confirmar reservación
Método: PUT

Endpoint:

/reservations/:id/confirm
Endpoints – Equipos deportivos (Teams)
Base URL
/kinalSportAdmin/v1/teams
Listar equipos
Método: GET

/teams
Obtener equipo por ID
Método: GET

/teams/:id
Crear equipo
Método: POST

{
  "teamName": "Los Guerreros",
  "sportType": "FUTSAL",
  "maxPlayers": 10,
  "description": "Un equipo de fútbol competitivo.",
  "logo": "teams/guerreros_logo",
  "isActive": true
}
Actualizar equipo
Método: PUT

/teams/:id
Activar equipo
Método: PUT

/teams/:id/activate
Desactivar equipo
Método: PUT

/teams/:id/deactivate
Eliminar equipo
Método: DELETE

/teams/:id
Endpoints – Torneos
Base URL
/kinalSportAdmin/v1/tournaments
Listar torneos
Método: GET

/tournaments
Obtener torneo por ID
Método: GET

/tournaments/:id
Crear torneo
Método: POST

{
  "tournamentName": "Torneo de Fútbol Invierno 2026",
  "sportType": "FUTBOL",
  "field": "69825bad0bd001667e7f60bd",
  "organizer": "pedro",
  "teams": [
    "6982a0ce995cf641c6aad535",
    "6982a6b289a3ef7919a8f867"
  ],
  "maxTeams": 16,
  "startDate": "2026-06-01T10:00:00.000Z",
  "endDate": "2026-06-30T18:00:00.000Z",
  "registrationFee": 50.00,
  "prize": "Medallas para los tres primeros lugares",
  "status": "INSCRIPCIONES",
  "description": "Este es el torneo de fútbol de invierno más esperado del año.",
  "isActive": true
}
Actualizar torneo
Método: PUT

/tournaments/:id
Activar torneo
Método: PUT

/tournaments/:id/activate
Desactivar torneo
Método: PUT

/tournaments/:id/deactivate
Eliminar torneo
Método: DELETE

/tournaments/:id
Pruebas con Postman
Abrir Postman.

Seleccionar el método HTTP correspondiente.

Usar la URL completa, por ejemplo:

http://localhost:3001/kinalSportAdmin/v1/fields
En Body → raw → JSON, ingresar los datos.

Enviar la solicitud y validar la respuesta.

Estado del proyecto
CRUD implementado según endpoints definidos

Validaciones por entidad

Manejo centralizado de errores

Arquitectura modular

Preparado para integración con frontend

Autor
Andy Ariel Ajiatas Xiquin
2021496

Proyecto académico desarrollado para prácticas de backend con Node.js y MongoDB.

