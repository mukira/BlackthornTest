import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
import { ApiModelProperty, ApiImplicitBody } from '@nestjs/swagger';
import { User } from '../../user/user/user.entity';
import { CartProduct } from '../cart-products/cart-product.entity';
import { Product } from '../../product/product/product.entity';

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column({type: 'numeric', precision: 8, scale: 2})
    subtotal: number;

    @ApiModelProperty()
    @Column({type: 'numeric', precision: 8, scale: 2})
    discount: number;

    @ApiModelProperty()
    @Column({type: 'numeric', precision: 8, scale: 2})
    total: number;

    @ApiModelProperty()
    @Column({type: 'numeric', precision: 8, scale: 2})
    shipping: number;

    @OneToMany(type => CartProduct, cartProduct => cartProduct.cart)
    cartItems: CartProduct[];

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

}
