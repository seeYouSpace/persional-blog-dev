import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ArticleType } from './entity';
import { ARTICLE_TYPE_REPOSITORY } from '../../Utils/constant';

@Injectable()
export class ArticleTypeService {
  constructor(
    @Inject(ARTICLE_TYPE_REPOSITORY)
    private readonly articleTypeRepository: Repository<ArticleType>,
  ) {}

  async findAll(): Promise<ArticleType[]> {
    return await this.articleTypeRepository.find();
  }

  async findOneById(id:number): Promise<ArticleType> {
    return await this.articleTypeRepository.findOne(id);
  }
}