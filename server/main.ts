import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ApplicationModule } from './CGI/App/module';
import * as session from 'express-session';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
    app.useStaticAssets(join(__dirname, '../dist'), { prefix: '/dist/' });
    app.useStaticAssets(join(__dirname, '../assets'), { prefix: '/assets/'});
    app.setBaseViewsDir(join(__dirname, '../assets/views'));
    app.setViewEngine('ejs');
    app.use(session({
        resave:false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
        secret: process.env.SESSION_SECRET
    }))
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    });
    await app.listen(80);
}
bootstrap();