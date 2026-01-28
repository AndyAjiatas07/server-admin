import { Router } from "express";

import { getFields } from "./field.controller.js";

const router = Router();

//rutas get
router.get('/', getFields);
//rutas post
//rutas put
//rutas delete

export default router;