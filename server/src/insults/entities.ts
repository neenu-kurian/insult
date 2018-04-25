import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm'
import User from '../users/entities'

@Entity()
export class Insult extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  insult: string

  @Column('text')
  comeback: string

  @OneToMany(_ => Game, game => game.insults)
  games: Game[]
}

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.game)
  user: User[]

  @ManyToOne(_ => Insult, insult => insult.games)
  insults: Insult

  @Column('int')
  move: number

  @Column()
  userId: number
} 
/* 
Users
Id | Email | Password | games(?) this is where it gets fucked

Insults
I'd | Insult | Comeback

Game
Id | User_Id's | Insult_Id | Move
SERIAL | many-to-one fk | fk | comeback id from front end

To do

- Look at brams code and see what he does || did that, didn't work for our code
- Do the comment compile uncomment thing || also did that, still doesn't work for us even if it worked for him


*/