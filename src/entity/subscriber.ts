import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Client } from 'src/entity/client';
import { PaymentMethod } from 'src/enums/paymentmethod';
import { Status } from 'src/enums/status';
import { User } from './user';
import { Exclude } from 'class-transformer'; 

@Entity()
export class Subscriber extends User{
  @PrimaryGeneratedColumn()
  id: number;
  

  @Column({ type: "enum", enum: PaymentMethod})
  payment_method: PaymentMethod;

  @Column({ type: "enum", enum: Status})
  status: Status;

  @Column()
  inscription_date: Date;
  @Column({ nullable: true }) // Mark email as nullable
  @Exclude() // Exclude email property from serialization
  email: string | null;

  

  @ManyToOne(() => Client, (client) => client.subscribers)
  client: Client;
}