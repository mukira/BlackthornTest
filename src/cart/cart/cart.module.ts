import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../db/database.module';
import { CartController } from './cart.controller';
import { cartProviders } from './cart.providers';
import { CartService } from './cart.service';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...cartProviders,
        CartService,
    ],
    controllers: [CartController],
})

export class CartModule {}
