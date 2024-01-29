import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaNotFoundExceptionFilter } from './exception-filters/prisma-not-found.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
  app.useGlobalFilters(new PrismaNotFoundExceptionFilter());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Cirurgic Request API')
    .setDescription('API for cirurgic requests management')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(8000, '0.0.0.0');
}
bootstrap();
