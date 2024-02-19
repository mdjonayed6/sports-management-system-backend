import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Sports Management System')
    .setDescription('API Documentation for Sports Management System')
    .setVersion('1.0')
    .addTag('sports') // Add tags if you have specific categories for your API
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
