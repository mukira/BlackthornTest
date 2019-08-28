import { CartProduct } from './cart-product.entity';
import { Connection } from 'typeorm';

export const cartProductsProviders = [
    {
        provide: 'CART_PRODUCT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(CartProduct),
        inject: ['DATABASE_CONNECTION'],
    },
];
