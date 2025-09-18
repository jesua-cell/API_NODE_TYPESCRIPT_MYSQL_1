"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Crear la conexion:
// Crear funciones para la consulta:
const promise_1 = __importDefault(require("mysql2/promise"));
// Configuracion:
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hpshop',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
};
// Pool de conexiones: Gestionara las conexiones a la BD
const pool = promise_1.default.createPool(config);
// Ejecutar la consultas de la BD:
class DataBase {
    query(sql_1) {
        return __awaiter(this, arguments, void 0, function* (sql, values = null) {
            const cn = yield pool.getConnection(); // conexion
            try {
                const [results] = yield cn.query(sql, values); // resultados
                return results;
            }
            finally {
                cn.release(); // Liberar la conexion
            }
            ;
        });
    }
    ;
}
;
exports.default = new DataBase(); // Exportar una instancia
// Descargar mysql2
//https://youtu.be/7ExWCTikwOg?t=1096
