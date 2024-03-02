
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Subscriber } from 'src/entity/subscriber';
import { Status } from 'src/enums/status';
import { User } from './user';

@Entity()
export class Client extends User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;
  
  @Column({ type: "enum", enum: Status})
  status: Status;
 
  @OneToMany(() => Subscriber, (subscriber) => subscriber.id)
  subscribers: Subscriber[];


 
}