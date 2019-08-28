import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany, Unique } from 'typeorm';
import { CartProduct } from '../../cart/cart-products/cart-product.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
@Unique(['name'])
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @ApiModelProperty()
    @Column('text')
    name: string;

    @ApiModelProperty()
    @Column({type: 'numeric', precision: 8, scale: 2})
    price: number;

    @ApiModelProperty()
    @Column({type: 'numeric', precision: 8, scale: 2})
    salePrice: number;

    @ApiModelProperty()
    @OneToMany(type => CartProduct, cartProduct => cartProduct.product)
    cartItems: CartProduct[];

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;


}
