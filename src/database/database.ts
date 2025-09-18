// Crear la conexion:
// Crear funciones para la consulta:
import mysql2, { ConnectionOptions, ResultSetHeader, RowDataPacket } from "mysql2/promise";

// Configuracion:

const config: ConnectionOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpshop',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
}

// Pool de conexiones: Gestionara las conexiones a la BD

const pool = mysql2.createPool(config);

// Ejecutar la consultas de la BD:

class DataBase {
    async query<T extends RowDataPacket[] | ResultSetHeader>(sql: string, values: any = null) {

        const cn = await pool.getConnection(); // conexion
        try {
            const [results] = await cn.query(sql, values); // resultados
            return results as T;
        } finally {
            cn.release(); // Liberar la conexion
        };
    };
};

export default new DataBase(); // Exportar una instancia


// Descargar mysql2

//https://youtu.be/7ExWCTikwOg?t=1096