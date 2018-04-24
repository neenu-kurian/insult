import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import User from '../users/entities'

@Entity()
export class Insult extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {nullable: false})
  insult: string;

  @Column('text', {nullable: false})
  comeback: string;

  // @OneToMany(_ => Game, game => game.insult, { eager: true })
  // games: Game[]
}

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.game)
  user: User

  @ManyToOne(_ => Insult, insult => insult.game)
  insult: Insult

  @Column()
  userId: number

  // @Column()
  // move: Move //the move the player just made
}