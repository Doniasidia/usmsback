import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from 'typeorm';
import { LoginCredentials } from 'src/entity/LoginCredentials';
import { Role } from 'src/enums/role';
import { Message } from './message';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "enum", enum: Role })
  role: Role;
  @Column()
  email: string;
  @OneToMany(() => Message, message => message.sender)
  messages_envoyes: Message[];

  @OneToMany(() => Message, message => message.recipient)
  messages_recus: Message[];
  @Column({ default: false }) // Assuming isAdmin is a boolean property
  isAdmin: boolean;

  @Column({ default: false }) // Assuming isSuperAdmin is a boolean property
  isSuperAdmin: boolean;
  
 

  @OneToOne(() => LoginCredentials, (credentials) => credentials.user)
  credentials: LoginCredentials;
}