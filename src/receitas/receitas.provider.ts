import { DataSource } from 'typeorm';
import { Receitas } from './receitas.entity';

export const receitasProviders = [
  {
    provide: 'RECEITAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Receitas),
    inject: ['DATA_SOURCE'],
  },
];