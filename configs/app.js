
`use strict`;
 
// Importaciones
import express from 'express';
import cors from "cors"
import morgan from "morgan";
import { corsOptions } from "./cors-configuration.js";

const BASE_URL = `/kinalSportAdmin/v1`;

const middlewares = (app) =>{
app.use(express.urlencoded({extended: false, limit: `10mb`}))
app. use(express. json({ limit: '10mb' }));
app.use(cors(corsOptions));
app.use(morgan('dev'));
}

//Función para iniciar el servidor
const initServer = async (app) =>{
    app = express();
    const PORT = process.env.PORT||3001;
    try {
        middlewares(app);
        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo en el puerto ${PORT}`);
            console.log(`Base URL: http://localhost:${PORT}${BASE_URL}`);
        });
        app.get(`${BASE_URL}/health`, (req, res)=>{ 
            res.status(200).json(
                {
                    status: 'ok',
                    service: 'KinalSport Admin',
                    version: '1.0.0'
                }
            )
        });
    } catch (error) {
        console.log(error);
    }
}

export{initServer};