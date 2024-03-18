
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Subscriber } from 'src/entity/subscriber';
import { Status } from 'src/enums/status';
import { User } from './user';

@Entity()
export class Client extends User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NomEtablissement: string;
  
  //@Column({ type: "enum", enum: Status})
  //status: Status;
  @Column()
  email: string;
  @Column()
  tel: string; 
   @Column()
  password: string;
  @Column()
  pack: string;

 
  @OneToMany(() => Subscriber, (subscriber) => subscriber.id)
  subscribers: Subscriber[];


 
}