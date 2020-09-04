import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Page } from '../pages/page.entity';

@Entity()
export class Route {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => Page)
  @JoinColumn()
  page: Page;

  @Column('text')
  path: string;
}
