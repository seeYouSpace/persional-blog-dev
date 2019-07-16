import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/module';
import { ArticlesProviders } from './providers';
import { ArticlesService } from './service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...ArticlesProviders,
    ArticlesService
  ],
  exports: [ArticlesService]
})
export class ArticlesModule {}