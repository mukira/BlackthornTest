import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CartProductsService } from './cart-products.service';
import { CartProduct } from './cart-product.entity';

@Controller('cart-products')
export class CartProductsController {
    constructor(private cartProductsService: CartProductsService) {}

    @Get()
    index() {
        return this.cartProductsService.findAll();
    }

    @Post('add')
    async addProduct(@Body() cartProduct: CartProduct){
        return await this.cartProductsService.create(cartProduct);
    }

    @Delete(':id/remove')
    async removeProduct(@Param('id') id): Promise<any> {
        return await this.cartProductsService.delete(id);
    }
}
