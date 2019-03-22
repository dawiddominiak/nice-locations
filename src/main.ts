import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setViewEngine('hbs');
  const config = app.get(ConfigService);
  const viewsDirectory = config.get<string>('templates.path');
  const publicDirectory = config.get<string>('public.path');
  app.setBaseViewsDir(viewsDirectory);
  app.useStaticAssets(publicDirectory);

  await app.listen(3000);
}
bootstrap();
