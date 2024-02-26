import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
  
}
@Entity()
export class Admin extends User {}
@Entity()
export class Client extends User {}
@Entity()
export class Subscriber extends User {}