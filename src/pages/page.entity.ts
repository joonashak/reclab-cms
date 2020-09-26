import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Language } from '../languages/language.entity';
import { User } from '../users/user.entity';

@Entity()
export class Page {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('timestamptz')
  createdAt: Date;

  @Column('timestamptz', { nullable: true })
  updatedAt: Date;

  @ManyToOne(type => Language, { nullable: false, eager: true })
  @JoinColumn()
  language: Language;

  @Column({ default: false })
  isPublic: boolean;

  @ManyToOne(type => User, { nullable: false, eager: true })
  @JoinColumn()
  author: User;

  @ManyToOne(type => User, { eager: true })
  @JoinColumn()
  editor: User;
}
