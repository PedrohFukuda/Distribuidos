import { Module } from '@nestjs/common';
import config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceitasModule } from './receitas/receitas.module';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ReceitasModule,
    UsuariosModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, UsuariosService],
})
export class AppModule {}
