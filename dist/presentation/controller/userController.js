"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const typedi_1 = require("typedi");
const UsuarioUseCase_1 = require("../../useCase/UsuarioUseCase");
const http_1 = require("../contracts/http");
let UserController = class UserController {
    constructor(usuarioUseCase) {
        this.usuarioUseCase = usuarioUseCase;
    }
    handler() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultado = yield this.usuarioUseCase.getAllUsers();
            return (0, http_1.ok)(resultado);
        });
    }
    ;
};
UserController = __decorate([
    (0, typedi_1.Service)(),
    __metadata("design:paramtypes", [UsuarioUseCase_1.UsuarioUseCase])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map