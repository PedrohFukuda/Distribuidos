import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
	constructor(
		private usuarioService: UsuariosService
	) { }

	async validarUsuario(nomeUsuario: string, senha: string): Promise<any>{
		const user = await this.usuarioService.findOne(nomeUsuario);
		
		if(user && user.senha === senha){
			const { senha, nomeDeUsuario, ... rest} = user; 
			return rest;
		}
		

		return null;
	}
}
