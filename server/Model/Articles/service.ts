import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Articles } from './entity';
import { ARTICLES_REPOSITORY } from '../../Utils/constant';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject(ARTICLES_REPOSITORY)
    private readonly articlesRepository: Repository<Articles>,
  ) {}

  async findAll(): Promise<Articles[]> {
    return await this.articlesRepository.find();
  }
}