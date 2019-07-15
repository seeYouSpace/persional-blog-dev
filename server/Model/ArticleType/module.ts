import { Module } from '@nestjs/common';
import { DatabaseModule } from '../Database/module';
import { ArticleTypeProviders } from './providers';
import { ArticleTypeService } from './service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...ArticleTypeProviders,
    ArticleTypeService
  ],
})
export class ArticleTypeModule {}