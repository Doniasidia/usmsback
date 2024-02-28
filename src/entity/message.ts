// message.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user'; // Adjust the import path as per your project structure

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  datesent: string;

  @Column()
  content: string;
  @Column()
  destinataire: string;
  @Column()
  emetteur: string;

  @ManyToOne(() => User, user => user.messages_envoyes) // Assuming this is the correct relationship
  emetteu: User;

  @ManyToOne(() => User, user => user.messages_recus) // Assuming this is the correct relationship
  destinatair: User;
}
