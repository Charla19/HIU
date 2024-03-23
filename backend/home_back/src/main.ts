import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('HOME')
    .setDescription('API HOME')
    .setVersion('1.0.0')
    .addTag('anonyma')
    .addBearerAuth()
    // .addServer('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const configService = app.get(ConfigService);
  const port = configService.get("SERVER_PORT");
  await app.listen(port);
}
bootstrap();
