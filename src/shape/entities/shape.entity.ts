import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Items } from '../../allitems/entity/allitems.entity';

@Entity()
export class Shape {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shape: string;

  @OneToMany(()=>Items, (items)=>items.shape)
  items:Items[]
}