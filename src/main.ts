import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dũng đen vip pro')
    .setDescription('Ba bảy mãi đỉnh')
    .setVersion('1.0')
    .addTag('DŨng')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: ['https://zungzen.click','https://recruitment.io.vn' ],// Specify the allowed domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers)
  });

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
