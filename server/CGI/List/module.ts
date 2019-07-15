import { Module } from '@nestjs/common';
import { ListController } from './controller';
import { ArticlesModule } from '../../Model/Articles/module';
import { ArticleTypeModule } from '../../Model/ArticleType/module';

@Module({
  imports: [ArticlesModule, ArticleTypeModule],
  controllers: [ListController]
})
export class ListModule {}