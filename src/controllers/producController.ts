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

    async getProductById(req: Request, res: Response) {
        try {
            const id = Number(req.params['id']);
            const product = await productService.getProductById(id);
            if (product) {
                sendSucces(res, product);
            } else {
                sendError(res, `Error al obtener el producto por el Id`, 404);
            };
        } catch (error: any) {
            sendError(res, error.message)
        }
    }

    async postProduct(req: Request, res: Response) {
        try {
            const data = req.body;
            const product = await productService.postProduct(data);
            if (product) {
                sendSucces(res, product);
            } else {
                sendError(res, `Producto no creado`, 500);
            };
        } catch (error: any) {
            sendError(res, error.message)
        }
    }

    async putProduct(req: Request, res: Response) {
        try {
            const id = Number(req.params['id']);
            const data = req.body;
            const product = await productService.putProduct(data, id);
            if (product) {
                sendSucces(res, product);
            } else {
                sendError(res, `Producto no creado para la Edicion`, 404);
            };
        } catch (error: any) {
            sendError(res, error.message)
        }
    }

    async deletProduct(req: Request, res: Response) {
        try {
            const id = Number(req.params['id']);
            const deleted = await productService.deleteProduct(id);
            if (deleted) {
                sendSucces(res, {});
            } else {
                sendError(res, `No se puedo eliminar el producto`, 404);
            };
        } catch (error: any) {
            sendError(res, error.message)
        }
    }
}

export default new ProductController(); // Exportar instancia
