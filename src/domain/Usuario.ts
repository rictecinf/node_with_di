// export type Usuario = {
//     nome:String,
//     telefone: String,
// }

class Usuario{

    nome:string; 
    telefone : string;

    constructor(nome: string, telefone : string){
        this.nome = nome;
        this.telefone = telefone;
    }
}

export {Usuario}