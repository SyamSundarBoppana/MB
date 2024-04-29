import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Items } from '../../allitems/entity/allitems.entity';

@Entity()
export class Flavour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  flavour: string;

  @OneToMany(()=>Items, (items)=>items.flavour)
  items:Items[]
}
