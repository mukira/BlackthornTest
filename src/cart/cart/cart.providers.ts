import { Connection } from 'typeorm';
import { Cart } from './cart.entity';

export const cartProviders = [
    {
        provide: 'CART_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Cart),
        inject: ['DATABASE_CONNECTION'],
    },
];
