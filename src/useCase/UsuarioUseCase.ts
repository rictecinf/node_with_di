import { Service } from "typedi";
import { Usuario } from "../domain/Usuario";
import { UsuarioRepository } from "../gateway/UsuarioRepository";

@Service()
class UsuarioUseCase{

    usuarioRepository : UsuarioRepository
    
    constructor(usuarioRepository: UsuarioRepository){
        this.usuarioRepository  = usuarioRepository;
    }
    async getAllUsers(): Promise<Usuario[]>{
        return await this.usuarioRepository.getAllUsers();
    };
}

export {UsuarioUseCase}