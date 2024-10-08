import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração detalhada de CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Permitir apenas esta origem
    methods: 'GET,PATCH', // Métodos permitidos
    credentials: true, // Habilitar cookies
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
