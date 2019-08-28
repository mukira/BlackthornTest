import { Test, TestingModule } from '@nestjs/testing';
import { CartProductsService } from './cart-products.service';
import { DatabaseModule } from '../../db/database.module';
import { cartProductsProviders } from './cart-products.providers';
import { CartProductsController } from './cart-products.controller';
import { cartProviders } from '../cart/cart.providers';
import { productProviders } from '../../product/product/product.providers';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../../product/product/product.service';

describe('CartProductsService', () => {
  let service: CartProductsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...cartProviders,
        ...cartProductsProviders,
        ...productProviders,
        ...cartProductsProviders,
        CartService,
        CartProductsService,
        ProductService,
      ],
      controllers: [CartProductsController],
    }).compile();

    service = module.get<CartProductsService>(CartProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  }, 30000);
});
