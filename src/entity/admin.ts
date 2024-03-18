import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, Column} from 'typeorm';
import { Client } from 'src/entity/client';
import { LoginCredentials } from 'src/entity/LoginCredentials'; 
import { User } from './user';

@Entity()
export class Admin extends User{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;

 
  

 
  @OneToMany(() => Client, (client) => client.id) 
  clients: Client[];
 
}