// Rutas
import { Router } from "express";
import producController from "../controllers/producController"; // Controlador

const producRouter = Router();

producRouter.get('/', producController.getAllProducts);
producRouter.get('/:id', producController.getProductById);
producRouter.post('/', producController.postProduct);
producRouter.put('/:id', producController.putProduct);
producRouter.delete('/:id', producController.deletProduct);

export default producRouter;