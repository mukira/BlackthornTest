import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Chimera Cart API')
    .setDescription('Documentation for the Cart API')
    .setVersion('1.0')
    // .addTag('cart', 'user', 'cartproducts', 'products')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  app.enableCors();

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
