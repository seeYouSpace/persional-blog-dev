import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ApplicationModule } from './CGI/App/module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
  app.useStaticAssets(join(__dirname, '../dist'), { prefix: '/dist/' });
  app.useStaticAssets(join(__dirname, '../assets'), { prefix: '/assets/' });
  app.setBaseViewsDir(join(__dirname, '../assets/views'));
  app.setViewEngine('ejs');
  await app.listen(80);
}
bootstrap();