// Ejecutar las consultas:
import db from "../database/database";
import { Prodduct } from "models/product";

class ProductService {

    // Funciones para manejar la logica de las consultas:
    async getAllProducts(): Promise<Prodduct[]>{
        const products = await db.query('SELECT * FROM products');
        return products as Prodduct[];
    }

}

export default new ProductService(); // Exportar instancia