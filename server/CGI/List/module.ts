import { Module } from '@nestjs/common';
import { ListController } from './controller';
import { ArticlesModule } from '../../Model/Articles/module';
import { ArticleTypeModule } from '../../Model/ArticleType/module';
import { UserModule } from '../../Model/User/module';

@Module({
  imports: [ArticlesModule, ArticleTypeModule, UserModule],
  controllers: [ListController]
})
export class ListModule {}