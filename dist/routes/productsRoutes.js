"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Rutas
const express_1 = require("express");
const producController_1 = __importDefault(require("../controllers/producController")); // Controlador
const producRouter = (0, express_1.Router)();
producRouter.get('/', producController_1.default.getAllProducts);
producRouter.get('/:id', producController_1.default.getProductById);
producRouter.post('/', producController_1.default.postProduct);
producRouter.put('/:id', producController_1.default.putProduct);
producRouter.delete('/:id', producController_1.default.deletProduct);
exports.default = producRouter;
