import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subplan{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
  @Column()
  name: string;
  @Column()
  desciption: string;
  
}