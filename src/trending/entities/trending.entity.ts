import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trending {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column({type: 'real'})
  rating:number;

  @Column()
  amount: string;

  @Column()
  quantity: string;

  @Column()
  offer: string;
}
