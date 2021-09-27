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
exports.router = void 0;
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const userController_1 = require("./presentation/controller/userController");
const router = (0, express_1.Router)();
exports.router = router;
const userController = typedi_1.default.get(userController_1.UserController);
router.get('/users', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res
        .status(200)
        .json(yield userController.handler());
}));
router.get('/mmm', (_req, res) => {
    res.status(200).json({
        nome: 'ricardo',
        telefone: '222222'
    });
});
//# sourceMappingURL=router.js.map