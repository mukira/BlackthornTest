import { Test, TestingModule } from '@nestjs/testing';
import { CartProductsController } from './cart-products.controller';
import { DatabaseModule } from '../../db/database.module';
import { cartProductsProviders } from './cart-products.providers';
import { CartProductsService } from './cart-products.service';
import { cartProviders } from '../cart/cart.providers';
import { productProviders } from '../../product/product/product.providers';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../../product/product/product.service';

describe('CartProducts Controller', () => {
  let controller: CartProductsController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...cartProviders,
        ...cartProductsProviders,
        ...productProviders,
        ...cartProductsProviders,
        CartProductsService,
        CartService,
        ProductService
      ],
      controllers: [CartProductsController],
    }).compile();

    controller = module.get<CartProductsController>(CartProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  }, 30000);
});
