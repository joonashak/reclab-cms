import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Language } from '../languages/language.entity';

@Entity()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('timestamptz')
  updatedAt: Date;

  @ManyToOne(type => Language, { nullable: false, eager: true })
  @JoinColumn()
  language: Language;
}
