import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class Insult extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {nullable: false})
  insult: string;

  @Column('text', {nullable: false})
  comeback: string;

}