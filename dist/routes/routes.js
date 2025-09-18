"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Rutas
const express_1 = require("express");
const productsRoutes_1 = __importDefault(require("./productsRoutes"));
const router = (0, express_1.Router)();
router.use('/products', productsRoutes_1.default);
exports.default = router;
