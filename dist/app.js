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
const database_1 = __importDefault(require("./database/database"));
// Dedfinir la app
const express_1 = __importDefault(require("express"));
// Exportar las rutas y definirlas:
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middelware
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send("Mondongo");
    const results = yield database_1.default.query('SELECT * FROM products');
    res.json(results);
}));
// Rutas Definidas
app.use('/', routes_1.default);
app.listen(PORT, () => {
    console.log(`Servivor corriendo en el puerto: ${PORT}`);
});
// instalas ts-node: herramienta para ejecutar el codigo ty sin compilar en js
// npm i -g nodemon: Reinicia el servidor de forma global
// ejecutar nodemon en la consola: nodemon .\src\app.ts
// Configurar el package.json: agregarle esta linea => "start": "nodemon ./src/app.ts"
