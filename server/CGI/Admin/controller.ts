import { Controller, Request, Get, Post, UseGuards, Render } from '@nestjs/common';
import { generateAssets } from '../../Utils/assets';
import { AuthBySessionGuard } from '../../Guard/Auth/authBySession';


@Controller('admin')
export class AdminController {

    @Get('login')
    @Render('admin/login')
    getLogin() {
        return generateAssets({
                word: 'hello login'
            }, 
            ['js_jquery', 'js_require']
        )
    }
}
