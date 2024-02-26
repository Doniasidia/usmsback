import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Invoice{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
  @Column()
  invstate: string;
  @Column()
  invodate: string;

  
}