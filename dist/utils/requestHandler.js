"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSucces = sendSucces;
exports.sendError = sendError;
// funciones para el manejo global de las peticiones y consultas:
// Funcion cuando la peticion es exitosa: resive el objeto Response y la data:
function sendSucces(res, data) {
    res.status(200).json({
        success: true,
        data: data,
        error: null
    });
}
;
// Funcion cuando la peticion no se pudo: resive el objeto Response; un mensajed; el estado; y la data(vacia)
function sendError(res, message = "Error interno en el Servidor", statusCode = 500) {
    res.status(statusCode).json({
        success: false,
        data: null,
        error: {
            message: message
        }
    });
}
;
