// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from './message';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  email: string;

  @Column()
  telNumber: string;

  @Column({ default: false }) // Add isAdmin property with a default value of false
  isAdmin: boolean;

  @Column({ default: false }) // Add isSuperAdmin property with a default value of false
  isSuperAdmin: boolean;

  @OneToMany(() => Message, message => message.destinataire)
  messages_recus: Message[];

  @OneToMany(() => Message, message => message.emetteur)
  messages_envoyes: Message[];
}

@Entity()
export class Admin extends User {}

@Entity()
export class Client extends User {}

@Entity()
export class Subscriber extends User {}
