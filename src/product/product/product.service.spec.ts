import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { DatabaseModule } from '../../db/database.module';
import { productProviders } from './product.providers';
import { ProductController } from './product.controller';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...productProviders, ProductService],
      imports: [DatabaseModule],
      controllers: [ProductController],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  }, 30000);
});
