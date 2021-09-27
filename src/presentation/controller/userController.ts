
import { Service } from 'typedi';
import { Usuario } from '../../domain/Usuario';
import { UsuarioUseCase } from '../../useCase/UsuarioUseCase';
import { HttpResponse, ok } from '../contracts/http';
import { IController } from '../contracts/IController';

@Service()
class UserController  implements IController
{
    constructor(private readonly usuarioUseCase : UsuarioUseCase){}
    async handler(): Promise<HttpResponse<Usuario[]>>{
         const resultado = await this.usuarioUseCase.getAllUsers()
         return ok(resultado);
    };
}

export {UserController}