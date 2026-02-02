import { Router } from "express";

import { getFields, createFields } from "./field.controller.js";

import { validateCreateField } from "../../middlewares/field-validators.js";

import { uploadFieldImage } from "../../middlewares/file-uploader.js";

const router = Router();

//rutas get
router.get('/', getFields);
//rutas post
router.post('/', uploadFieldImage.single('image'), validateCreateField, createFields);
//rutas put

//rutas delete

export default router;