import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  username: string;

  @Column({ length: 120 })
  nickname: string;

  @Column({ length: 120 })
  password: string;

  @Column('datetime')
  ctime: string;

  @Column('boolean')
  lock: boolean;

  @Column({ length: 120 })
  token: string;
}