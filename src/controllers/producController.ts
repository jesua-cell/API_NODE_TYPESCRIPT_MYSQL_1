import { Request, Response } from "express";
import productService from "../services/producService";
import { sendSucces, sendError } from "../utils/requestHandler";

class ProductController {

    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await productService.getAllProducts();
            sendSucces(res, products);
        } catch (error: any) {
            sendError(res, error.message)
        }
    }
}

export default new ProductController(); // Exportar instancia
