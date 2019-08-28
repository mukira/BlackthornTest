import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user/user.module';
import { DatabaseModule } from './db/database.module';
import { CartProductsModule } from './cart/cart-products/cart-products.module';
import { ProductModule } from './product/product/product.module';
import { CartModule } from './cart/cart/cart.module';


@Module({
  imports: [
    DatabaseModule,
    UserModule,
    CartProductsModule,
    ProductModule,
    CartModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
