import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany } from 'typeorm';
import { type } from 'os';
import { Product } from '../../product/product/product.entity';
import { Cart } from '../cart/cart.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class CartProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Product, product => product.cartItems)
    @ApiModelProperty()
    product: Product;

    @ManyToOne(type => Cart, cart => cart.cartItems)
    @ApiModelProperty()
    cart: Cart;

    @Column('int')
    quantity: number;

    @Column({type: 'numeric', precision: 8, scale: 2})
    total: number;

    @CreateDateColumn({type: 'timestamp'})
    createdAt: Date;
}
