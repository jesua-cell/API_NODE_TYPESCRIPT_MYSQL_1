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
const producService_1 = __importDefault(require("../services/producService"));
const requestHandler_1 = require("../utils/requestHandler");
class ProductController {
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield producService_1.default.getAllProducts();
                (0, requestHandler_1.sendSucces)(res, products);
            }
            catch (error) {
                (0, requestHandler_1.sendError)(res, error.message);
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params['id']);
                const product = yield producService_1.default.getProductById(id);
                if (product) {
                    (0, requestHandler_1.sendSucces)(res, product);
                }
                else {
                    (0, requestHandler_1.sendError)(res, `Error al obtener el producto por el Id`, 404);
                }
                ;
            }
            catch (error) {
                (0, requestHandler_1.sendError)(res, error.message);
            }
        });
    }
    postProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const product = yield producService_1.default.postProduct(data);
                if (product) {
                    (0, requestHandler_1.sendSucces)(res, product);
                }
                else {
                    (0, requestHandler_1.sendError)(res, `Producto no creado`, 500);
                }
                ;
            }
            catch (error) {
                (0, requestHandler_1.sendError)(res, error.message);
            }
        });
    }
    putProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params['id']);
                const data = req.body;
                const product = yield producService_1.default.putProduct(data, id);
                if (product) {
                    (0, requestHandler_1.sendSucces)(res, product);
                }
                else {
                    (0, requestHandler_1.sendError)(res, `Producto no creado para la Edicion`, 404);
                }
                ;
            }
            catch (error) {
                (0, requestHandler_1.sendError)(res, error.message);
            }
        });
    }
    deletProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params['id']);
                const deleted = yield producService_1.default.deleteProduct(id);
                if (deleted) {
                    (0, requestHandler_1.sendSucces)(res, {});
                }
                else {
                    (0, requestHandler_1.sendError)(res, `No se puedo eliminar el producto`, 404);
                }
                ;
            }
            catch (error) {
                (0, requestHandler_1.sendError)(res, error.message);
            }
        });
    }
}
exports.default = new ProductController(); // Exportar instancia
