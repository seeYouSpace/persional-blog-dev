import { Connection, Repository } from 'typeorm';
import { ArticleType } from './entity';
import { DATABASE_CONNECTION, ARTICLE_TYPE_REPOSITORY } from '../../Utils/constant';

export const ArticleTypeProviders = [
  {
    provide: ARTICLE_TYPE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(ArticleType),
    inject: [DATABASE_CONNECTION],
  },
];