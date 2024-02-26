import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Message{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  datesent: Date;
  @Column()
  sender: string;
  @Column()
  reciepient: string;
  @Column()
  content:string;
  
}