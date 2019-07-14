import { Module } from '@nestjs/common';
import { ListController } from './controller';

@Module({
  controllers: [ListController]
})
export class ListModule {}