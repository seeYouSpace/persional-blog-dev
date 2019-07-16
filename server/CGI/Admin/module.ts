import { Module } from '@nestjs/common';
import { AdminController } from './controller';
import { ArticlesModule } from '../../Model/Articles/module';
import { ArticleTypeModule } from '../../Model/ArticleType/module';

@Module({
  imports: [ArticlesModule, ArticleTypeModule],
  controllers: [AdminController]
})
export class AdminModule {}