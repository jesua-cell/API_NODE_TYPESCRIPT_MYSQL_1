// Ejecutar las consultas:
import db from "../database/database";
import { Prodduct } from "models/product";
import {
    ResultSetHeader // Usado para las demas consultas 
    , RowDataPacket // Usado para las consultas SELECT
} from "mysql2";

class ProductService {

    // Funciones para manejar la logica de las consultas:
    async getAllProducts(): Promise<Prodduct[]> {
        const products = await db.query<RowDataPacket[]>('SELECT * FROM products');
        return products as Prodduct[];
    };

    async getProductById(id: number): Promise<Prodduct | null> {
        const products = await db.query<RowDataPacket[]>('SELECT * FROM products WHERE id = ?', id);
        if (Array.isArray(products) && products.length > 0) {
            return products[0] as Prodduct;
        }
        return null;
    };

    async postProduct(data: Prodduct): Promise<Prodduct | null> {
        const result = await db.query<ResultSetHeader>(`INSERT INTO products SET ?`, data);
        if (result.insertId) {
            return await this.getProductById(result.insertId)
        };
        return null;
    };

    async putProduct(data: Prodduct, id: number): Promise<Prodduct | null> {
        const result = await db.query<ResultSetHeader>(`UPDATE products SET ? WHERE id = ?`, [data, id]);
        if (result.affectedRows) {
            return await this.getProductById(id);
        };
        return null;
    };

    async deleteProduct(id: number): Promise<boolean> {
        const result = await db.query<ResultSetHeader>(`DELETE FROM products WHERE id = ?`, id);
        return result.affectedRows > 0;
    };
}

export default new ProductService(); // Exportar instancia