import { Connection, Repository } from 'typeorm';
import { Articles } from './entity';
import { DATABASE_CONNECTION, ARTICLES_REPOSITORY } from '../../Utils/constant';

export const ArticlesProviders = [
  {
    provide: ARTICLES_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Articles),
    inject: [DATABASE_CONNECTION],
  },
];