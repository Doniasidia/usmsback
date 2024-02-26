import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Subscription{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sessionnb: number;
  @Column()
  subplan: string;
  @Column()
  substate: string;
  @Column()
  paymentmethode:string;
  
}