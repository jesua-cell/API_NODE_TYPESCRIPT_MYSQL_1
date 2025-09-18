// Rutas
import { Router } from "express";
import productRoutes from "./productsRoutes";

const router = Router();

router.use('/products', productRoutes);

export default router;