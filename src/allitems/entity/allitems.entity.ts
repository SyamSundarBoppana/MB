import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Flavour } from '../../flavours/entities/flavour.entity';
import { Category } from '../../category/entities/category.entity';
import { Shape } from '../../shape/entities/shape.entity';

@Entity()
export class Items {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column({type:'real'})
  rating: number;

  @Column()
  amount: string;

  @Column()
  quantity: string;

  @Column({ default: '' })
  offer: string;

  @ManyToOne(() => Flavour, (flavour) => flavour.items)
  flavour: Flavour;

  @ManyToOne(() => Category, (category) => category.items)
  category: Category;

  @ManyToOne(() => Shape, (shape) => shape.items)
  shape: Shape;
}

// @Column('simple-array', { default: '' })
  // descriptionProductDetails: string[];

  // @Column('simple-array', { default: '' })
  // descriptionDeliveryInformation: string[];

  // @Column('simple-array', { default: '' })
  // descriptionCareInstructions: string[];

  // @Column({ default: '' })
  // reviews: string;