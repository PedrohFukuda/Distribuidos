import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ReceitasService } from './receitas.service';

@Controller('receitas')
export class ReceitasController {

    constructor(
        private receitasService: ReceitasService
    ){};

    @Get('all')
    getReceitas(){
        return this.receitasService.getReceitas();
    }

    @Get('buscar/id/:id')
    getReceitasById(@Param('id') id: number){
        return this.receitasService.getReceitasById(id);
    }

    @Get('buscar/nome/:name')
    getReceitasByName(@Param('name') name: string){
        return this.receitasService.getReceitasByName(name);
    }

    @Get('buscar/ingrediente/:ingrediente')
    getReceitasByIngrediente(@Param('ingrediente') ingrediente: string){
        return this.receitasService.getReceitasByIngrediente(ingrediente);
    }

    @Get('buscar/preparo/:preparo')
    getReceitasByReceita(@Param('preparo') preparo: string){
        return this.receitasService.getReceitasByPreparo(preparo);
    }

    @Post('/new')
    novaReceita(@Body() body){
        console.log("NOVA RECEITA");
        console.log(body);
        
        return this.receitasService.novaReceita(body);
    }

    @Post('/edit')
    editarReceita(@Request() req, @Body() body){
        return this.receitasService.editarReceita(body, req.user.sub);
    }
}
