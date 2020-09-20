import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Language } from '../languages/language.entity';
import { Route } from '../routes/route.entity';

@Entity({ name: 'menuItem' })
export class MenuItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false })
  title: string;

  @Column('int', { nullable: false })
  order: number;

  @Column('text', { nullable: true })
  path: string;

  @ManyToOne(type => Language, { nullable: false, eager: true })
  @JoinColumn()
  language: Language;

  @ManyToOne(type => Route, { eager: true })
  @JoinColumn()
  route: Language;

  // Self-referencing relation to create nested menus.
  @ManyToOne(
    type => MenuItem,
    menuItem => menuItem.children,
  )
  //@JoinColumn()
  parent: MenuItem;

  @OneToMany(
    type => MenuItem,
    menuItem => menuItem.parent,
  )
  children: MenuItem[];
}
