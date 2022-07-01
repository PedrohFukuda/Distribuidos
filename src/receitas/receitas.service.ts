import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receitas } from './receitas.entity';

@Injectable()
export class ReceitasService {
	constructor(
		@InjectRepository(Receitas) private receitaRepository: Repository<Receitas>
	) { };

	novaReceita(receita: Receitas){
		try {
			this.receitaRepository.save(receita);         
		} catch (err) {
			throw new BadRequestException("Erro ao salvar Receita.");
		}
	}

	editarReceita(receita: Receitas, userId:number){
		return [{
			id: 0,
			nome: "Esfiha",
			ingredientes: "1 esfiha",
			preparo: "esfihar"
		}];
	}
	
	async getReceitas(): Promise<Receitas[]> {
		try {
			console.log(await this.receitaRepository.find());
			
			return await this.receitaRepository.find();         
		} catch (err) {
			throw new BadRequestException("Erro ao salvar Receita.");
		}
	}

	async getReceitasById(id: number) {
		try {
            return await this.receitaRepository.findOneOrFail({
                where: { id: id }
            });           
        } catch (err) {
            throw new NotFoundException("Receita não encontrada");
        }
	}

	async getReceitasByName(name: string) {
		try {
            return await this.receitaRepository.createQueryBuilder("receitas")
			.where("receitas.nome like :name", { name:`%${name}%` })
			.getMany();
        } catch (err) {
            throw new NotFoundException("Receita não encontrada");
        }
	}

	async getReceitasByIngrediente(ingrediente: string) {
		try {
            return await this.receitaRepository.createQueryBuilder("receitas")
			.where("receitas.ingredientes like :ingrediente", { ingrediente:`%${ingrediente}%` })
			.getMany();
        } catch (err) {
            throw new NotFoundException("Receita não encontrada");
        }
	}

	async getReceitasByPreparo(preparo: string) {
		try {
            return await this.receitaRepository.createQueryBuilder("receitas")
			.where("receitas.preparo like :preparo", { preparo:`%${preparo}%` })
			.getMany();
        } catch (err) {
            throw new NotFoundException("Receita não encontrada");
        }
	}
}
