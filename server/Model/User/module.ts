import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/module';
import { UserProviders } from './provider';
import { UserService } from './service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...UserProviders,
    UserService
  ],
  exports: [UserService]
})
export class UserModule {}