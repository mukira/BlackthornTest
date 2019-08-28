import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { DatabaseModule } from '../../db/database.module';
import { productProviders } from './product.providers';
import { ProductService } from './product.service';

describe('Product Controller', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      imports: [DatabaseModule],
      providers: [
        ...productProviders,
        ProductService,
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', async () => {
    await expect(controller).toBeDefined();
  });
});
