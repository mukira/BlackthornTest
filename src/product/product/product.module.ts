import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../db/database.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProviders } from './product.providers';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...productProviders,
        ProductService,
    ],
    controllers: [ProductController],
})
export class ProductModule {}
