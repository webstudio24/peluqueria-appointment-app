import express from "express";
import {
  updatePeluquero,
  deletePeluquero,
  getAllPeluqueros,
  getSinglePeluquero,
} from "../Controllers/peluqueroController.js";


import { authenticate, restrict } from "../auth/verifyToken.js"; 

import reviewRouter from "./review.js";


const router = express.Router();

//nested route

router.use('/:peluqueroId/reviews',reviewRouter)

router.get("/:id", getSinglePeluquero);
router.get("/", getAllPeluqueros);
router.put("/:id",authenticate, restrict(['peluquero']), updatePeluquero);
router.delete("/:id",authenticate, restrict(['peluquero']), deletePeluquero);

export default router;
