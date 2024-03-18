
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Role } from 'src/enums/role';
import { Subscriber } from 'src/entity/subscriber';
import { Status } from 'src/enums/status';
import { User } from './user';

@Entity()
export class Client extends User{
  constructor() {
    super(); // Call the constructor of the base class
    this.role = Role.CLIENT; 
    // Set the role to a default value (assuming Role.CLIENT is the default role for clients)
    this.status = Status.ACTIVATED;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address? : string;
  
  @Column()
  typepack: string;
  @Column()
  email: string;
  
  
 
  @OneToMany(() => Subscriber, (subscriber) => subscriber.id)
  subscribers: Subscriber[];


 
}