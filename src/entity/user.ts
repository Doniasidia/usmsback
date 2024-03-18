import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from 'typeorm';
import { LoginCredentials } from 'src/entity/LoginCredentials';
import { Role } from 'src/enums/role';
import { Message } from './message';
import { Status } from 'src/enums/status';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  @Column()
  telephone : string;
  @Column({ type: "enum", enum: Role })
  role: Role;
  @Column({ type: "enum", enum: Status})
  status: Status;
  
  @OneToMany(() => Message, message => message.sender)
  messages_envoyes: Message[];

  @OneToMany(() => Message, message => message.recipient)
  messages_recus: Message[];
  
  
 

  @OneToOne(() => LoginCredentials, (credentials) => credentials.user)
  credentials: LoginCredentials;
}