import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './cart.entity';
import { async } from 'rxjs/internal/scheduler/async';
import { ApiImplicitBody } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) {}

    // get all carts
    @Get()
    index() {
        return this.cartService.getAll();
    }
    // get cart by id
    @Get(':id')
    async getCart(@Param('id') id) {
        return await this.cartService.find(id);
    }
    // create new cart
    @Post('create')
    async createCart(@Body() cart: Cart) {
        return await this.cartService.create(cart);
    }
    // update cart
    @Put(':id/update')
    async updateCart(@Param('id') id, @Body() cart: Cart ): Promise<any> {
        cart.id = Number(id);
        return await this.cartService.update(cart);
    }

    @Delete(':id/delete')
    async deleteCart(@Param('id') id): Promise<DeleteResult> {
        return this.cartService.delete(id);
    }
}
