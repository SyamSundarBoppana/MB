import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Items } from '../../allitems/entity/allitems.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @OneToMany(()=>Items, (items)=>items.category)
  items:Items[]

}