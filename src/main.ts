import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //quem permite o frontend acessar o backend
  await app.listen(3000);
}
bootstrap();
