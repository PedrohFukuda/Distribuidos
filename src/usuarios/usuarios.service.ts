import { Injectable } from '@nestjs/common';

export type Usuario = {
    id: number;
    nome: string;
    nomeDeUsuario: string;
    senha: string;
}

@Injectable()
export class UsuariosService {
    private readonly usuarios: Usuario[] = [
        {
            id: 1,
            nome: "admin",
            nomeDeUsuario: "admin",
            senha: "admin"
        },
    ];

    async findOne(nomeUsuario: string): Promise<Usuario | undefined>{
        return this.usuarios.find(usuario =>usuario.nome === nomeUsuario);
    }
}
