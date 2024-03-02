import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user'; // Assuming the User entity is defined in user.ts

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  dateSent: Date;

  // Define Many-to-One relationship with the sender (User)
  @ManyToOne(() => User, user => user.messages_envoyes)
  sender: User;

  // Define Many-to-One relationship with the recipient (User)
  @ManyToOne(() => User, user => user.messages_recus)
  recipient: User;

  // Other properties and relationships as needed
}

