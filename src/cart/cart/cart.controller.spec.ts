import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { DatabaseModule } from '../../db/database.module';
import { cartProviders } from './cart.providers';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';

describe('Cart Controller', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...cartProviders,
        CartService,
      ],
      controllers: [CartController],
    }).compile();

    controller = module.get<CartController>(CartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
