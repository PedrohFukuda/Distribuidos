require('dotenv').config();
import {MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

const config: MysqlConnectionOptions = {
    type: 'mysql',
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,entities: ['dist/src/**/*.entity{.ts,.js}'],
    synchronize: (process.env.PRODUCTION == 'true')? false : true,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)
}

export default config;