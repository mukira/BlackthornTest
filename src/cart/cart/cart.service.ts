import { Injectable, Inject, Logger } from '@nestjs/common';
import { Cart } from './cart.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { relative } from 'path';

@Injectable()
export class CartService {
    constructor(
        @Inject('CART_REPOSITORY')
        private readonly cartRepository: Repository<Cart>,
    ) { }

    async getAll(): Promise<Cart[]> {
        return await this.cartRepository.find({ relations: ['user'] }); 
    }

    async findAll(): Promise<Cart[]> {
        return await this.cartRepository.createQueryBuilder('cart')
                    .leftJoinAndSelect('cart.cartItems', 'cart_product')
                    .innerJoinAndSelect('cart_product.product', 'product')
                    .getMany();
    }

    async find(id): Promise<Cart> {
        return await this.cartRepository.createQueryBuilder('cart')
        .where('cart.id = :id', {id})
        .leftJoinAndSelect('cart.cartItems', 'cart_product')
        .innerJoinAndSelect('cart_product.product', 'product')
        .getOne();

    }

    async create(cart: Cart) {
        try {
            const existingCart = this.cartRepository.findOneOrFail({where: {'user': cart.user}});
            // create actual cart
            return await this.cartRepository.save(cart);
        } catch (error) {
            // return error
            return `cart already exists for user`;
        }
    }

    async update(cart: Cart): Promise<Cart> {
        try {
          return await this.cartRepository.save(cart);  
        } catch (error) {
            return error;
        }
    }

    async delete(id: string): Promise<DeleteResult> {
        try {
            return this.cartRepository.delete(id);
        } catch (error) {
            return error;
        }
    }
 }
