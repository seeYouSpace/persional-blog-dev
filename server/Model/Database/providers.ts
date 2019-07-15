import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from '../../Utils/constant';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: process.env.SQL_HOST,
      port: Number(process.env.SQL_PORT),
      username: process.env.SQL_USERNAME,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE_NAME,
      entities: [
          __dirname + '/../**/entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];