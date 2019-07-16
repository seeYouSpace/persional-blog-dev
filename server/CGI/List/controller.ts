import { Controller, Get, Render, Param, Session, UseGuards } from '@nestjs/common';
import { generateAssets } from '../../Utils/assets';
import { ArticlesService } from '../../Model/Articles/service';
import { ArticleTypeService } from '../../Model/ArticleType/Service';
import { ArticleType } from '../../Model/ArticleType/entity';
import { AuthBySessionGuard } from '../../Guard/Auth/authBySession';

@Controller('list')
export class ListController {

    constructor(
        private readonly  articlesService:  ArticlesService,
        private readonly  articleTypeService:  ArticleTypeService,
    ) {}

    //@UseGuards(AuthBySessionGuard)
    @Get()
    index(@Session() Sess): string {
        // this.articlesService.findAll().then(res => {
        //     console.log(res)
        // })
        return 'This action returns all articles';
    }

    @Get(':typeid')
    async getType(@Param('typeid') id): Promise<any> {
        let articleType = await this.articleTypeService.findOneById(id);
        let article = await this.articlesService.findOneByType(articleType);
        
        return article.content;
    }

    @Get('page')
    @Render('list')
    page() {
        return generateAssets({
            word: 'hello world'
        }, 
        ['js_jquery', 'css_test'], 
        ['js_test']
      )
    }
}
