import { Injectable, Inject, Logger } from '@nestjs/common';
import { CartProduct } from './cart-product.entity';
import { Repository, DeleteResult } from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../../product/product/product.service';
import { Product } from '../../product/product/product.entity';


@Injectable()
export class CartProductsService {
    constructor(
        @Inject('CART_PRODUCT_REPOSITORY')
        private readonly cartProductRepository: Repository<CartProduct>,
        private cartService: CartService,
        private productService: ProductService,
    ) {}

    async findAll(): Promise<CartProduct[]> {
        return await this.cartProductRepository.find();
    }

    async findByCartAndProd(cartProduct: CartProduct): Promise<CartProduct> {
        return await this.cartProductRepository.findOneOrFail({where: {'product': cartProduct.product, 'cart': cartProduct.cart}});
    }

    async findByCart(id: number): Promise<CartProduct[]> {
        return await this.cartProductRepository.find({where: {'cart': id}});
    }

    async create(cartProduct: CartProduct) {
        let productInCart = new CartProduct();
        let product = new Product()
        // get product 

        try {
            product = await this.productService.find(cartProduct.product)
        } catch (error) {
           return `Product does not exist`;
        }

        // check if product exists in cart
        try {
            productInCart = await this.findByCartAndProd(cartProduct);
            productInCart.quantity = productInCart.quantity + 1;
            productInCart.total = product.price * productInCart.quantity;
            await this.cartProductRepository.update(productInCart.id, productInCart);
            return await this.updateCartTotal(productInCart.id);
        } catch (error) {
            cartProduct.total = product.price;
            return await this.cartProductRepository.save(cartProduct);
        }
    }

    async delete(id): Promise<DeleteResult> {
        return await this.cartProductRepository.delete(id);
    }

    async updateCartTotal(id) {
        let cartProducts: CartProduct[] = [];
        let cart = new Cart();

        //get cart

        try {
            cart = await this.cartService.find(id);
        } catch (error) {
            return `no cart exists by that id`
        }

        let total = 0;
        try {
            cartProducts = await this.findByCart(id);
            for(const item of cartProducts) {
                // get total
                total = total + item.total;
            }
            cart.shipping = cart.shipping;
            cart.subtotal = total;
            cart.discount = 0;
            cart.total = total + Number(cart.shipping);

            // update cart
            try {
                return await this.cartService.update(cart);
            } catch (error) {
                new Logger(error);
                return error;
            }

        } catch (error) {
            return error;
        }
    }
}
