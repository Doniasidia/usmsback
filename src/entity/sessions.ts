import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startdate: Date;
  @Column()
  enddate: Date;
  
  
}