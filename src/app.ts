import db from "./database/database";
// Dedfinir la app
import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// Middelware
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
    // res.send("Mondongo");
    const results = await db.query('SELECT * FROM products');
    res.json(results);

});

app.listen(PORT, () => {
    console.log(`Servivor corriendo en el puerto: ${PORT}`);
});

// instalas ts-node: herramienta para ejecutar el codigo ty sin compilar en js
// npm i -g nodemon: Reinicia el servidor de forma global
// ejecutar nodemon en la consola: nodemon .\src\app.ts
// Configurar el package.json: agregarle esta linea => "start": "nodemon ./src/app.ts"
