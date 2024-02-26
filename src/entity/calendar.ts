import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @Column()
  type: string;
  
  
}