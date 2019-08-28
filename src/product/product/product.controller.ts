import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    index() {
        return this.productService.findAll();
    }

    @Get(':id')
    async findProduct(@Param('id') id): Promise<Product> {
        return await this.productService.find(id);
    }

    @Post('create')
    async createProduct(@Body() product: Product) {
        return await this.productService.create(product);
    }

    @Put(':id/update')
    async updateProduct(@Param('id') id, @Body() product: Product): Promise<any> {
        product.id = Number(id);
        return await this.productService.update(product);
    }
 }
