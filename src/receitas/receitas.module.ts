import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitasController } from './receitas.controller';
import { Receitas } from './receitas.entity';
import { ReceitasService } from './receitas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Receitas])],
  providers: [ReceitasService],
  controllers: [ReceitasController],
  exports: [ReceitasService]
})
export class ReceitasModule {}
