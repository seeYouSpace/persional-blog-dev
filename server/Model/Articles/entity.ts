import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { ArticleType } from '../ArticleType/entity';

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  title: string;

  @Column('text')
  brief: string;

  @Column()
  content: string;

  @OneToOne(type => ArticleType)
  @JoinColumn()
  type: ArticleType;

  @Column('int')
  readingQuantity: number;

  @Column()
  ctime: string;
}