import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}