import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sessions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startdate: Date;
  @Column()
  enddate: Date;
  
  
}