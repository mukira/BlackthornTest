import { Module } from '@nestjs/common';
import { CartProductsService } from './cart-products.service';
import { CartProductsController } from './cart-products.controller';
import { DatabaseModule } from '../../db/database.module';
import { cartProductsProviders } from './cart-products.providers';
import { cartProviders } from '../cart/cart.providers';
import { CartService } from '../cart/cart.service';
import { productProviders } from '../../product/product/product.providers';
import { ProductService } from '../../product/product/product.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...cartProviders,
    ...cartProductsProviders,
    ...productProviders,
    ProductService,
    CartProductsService,
    CartService,
  ],
  controllers: [CartProductsController],
})
export class CartProductsModule {}
