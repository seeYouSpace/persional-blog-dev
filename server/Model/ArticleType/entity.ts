import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('int')
  parent: number;
}