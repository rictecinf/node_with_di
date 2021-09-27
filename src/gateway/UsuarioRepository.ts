import { Service } from "typedi";
import { Usuario } from "../domain/Usuario";

@Service()
class UsuarioRepository {

    async getAllUsers(): Promise<Usuario[]>{
         
         return [
             {
                nome : 'ricardo', 
                telefone :'2233333'
             },
             {
                nome : 'ricardo', 
                telefone :'222'
             },
             {
                nome : 'ricardo', 
                telefone :'1010101'
             },
             {
                nome : 'ricardo', 
                telefone :'99999'
             },
        ];
    }

}

export {UsuarioRepository}