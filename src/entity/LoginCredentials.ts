import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Admin , OneToOne} from 'typeorm';
import { User } from 'src/entity/user';
@Entity()
export class LoginCredentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tel_numb: string;
  @Column()
  hashedPassword: string;

  @Column()
  salt: string;
  @OneToOne(() => User, (user) => user.credentials)
  user: User; 
}