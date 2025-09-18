import { Response } from "express";

// funciones para el manejo global de las peticiones y consultas:

// Funcion cuando la peticion es exitosa: resive el objeto Response y la data:
export function sendSucces(res: Response, data: any) {
    res.status(200).json({
        success: true,
        data: data,
        error: null
    })
};

// Funcion cuando la peticion no se pudo: resive el objeto Response; un mensajed; el estado; y la data(vacia)
export function sendError(res: Response, message: "Error interno en el Servidor", statusCode: number = 500) {
    res.status(statusCode).json({
        success: false,
        data: null,
        error: {
            message: message
        }
    })
};