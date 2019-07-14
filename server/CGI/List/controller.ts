import { Controller, Get, Render } from '@nestjs/common';
import { generateAssets } from '../../Utils/assets'

@Controller('list')
export class ListController {
  @Get()
  index(): string {
    return 'This action returns all articles';
  }

  @Get('page')
  @Render('list')
  page() {
    return generateAssets({
      word: 'hello world'
    }, ['js_jquery', 'css_test'], ['js_test'])
  }
}
