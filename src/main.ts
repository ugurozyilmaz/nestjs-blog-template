import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = +process.env.APP_PORT || 3000;

  app.setGlobalPrefix('api');
  console.log('Port running on: ', port);

  const options = new DocumentBuilder()
    .setTitle('Blog APP')
    .setDescription('Blog API documentation')
    .setVersion('1.0')
    .addTag('Blog')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
