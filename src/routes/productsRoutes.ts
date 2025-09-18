// Rutas
import { Router } from "express";
import producController from "../controllers/producController"; // Controlador

const producRouter = Router();

producRouter.get('/', producController.getAllProducts);

export default producRouter;