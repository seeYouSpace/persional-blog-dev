import { Controller, Request, Post, UseGuards } from '@nestjs/common';


@Controller('admin')
export class AdminController {
    @Post('login')
    async login(@Request() req) {
        return req;
    }
}
