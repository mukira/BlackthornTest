import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private readonly productRepository: Repository<Product>
    ) {}
        // updated with try-catch blocks
    async findAll(): Promise<Product[]> {
        try {
            return await this.productRepository.find();
        } catch (error) {
            return error;
        }
        
    }

    async find(id): Promise<Product> {
        try {
          return await this.productRepository.findOneOrFail(id); 
        } catch (error) {
           return error;
        }
    }

    async create(product: Product) {
        try {
            // check if product exists
            const existingProduct = this.productRepository.findOneOrFail({where: {'name': product.name}});
            // create new product
            return await this.productRepository.save(product);
            ;
        } catch (error) {
            // return error
            return `product ${product.name} already exists`;
        }
    }
    async delete(id): Promise<DeleteResult> {
        return await this.productRepository.delete(id);
    }
    async update(product: Product): Promise<UpdateResult> {
        return await this.productRepository.update(product.id, product);
    }
}
