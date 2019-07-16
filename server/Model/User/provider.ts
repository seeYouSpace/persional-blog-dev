import { Connection, Repository } from 'typeorm';
import { User } from './entity';
import { DATABASE_CONNECTION, USER_REPOSITORY } from '../../Utils/constant';

export const UserProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DATABASE_CONNECTION],
  },
];