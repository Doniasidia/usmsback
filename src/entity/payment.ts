import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User} from "./User"
@Entity()
export class Payment{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;
  @Column()
  paymentstate: string;
  @Column()
  paymentdate: Date;
  @ManyToOne(() => User)
  user: User;
}