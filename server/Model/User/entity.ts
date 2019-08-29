import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export const USER_ROLE_ADMIN = 1;
export const USER_ROLE_COMMON = 2;

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

  @Column({default: USER_ROLE_COMMON})
  role: number;

  @Column('datetime')
  ctime: string;

  @Column('boolean')
  lock: boolean;

  @Column({ length: 120 })
  token: string;
}

