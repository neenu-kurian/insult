import { Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'

export type Move = 'x'| 'o'

@Entity()
export class Insult extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  insult: string

  @Column('text')
  comeback: string

  @Column('int') // game it's being used in
  game: number
}

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column('int')
  user_1: number

  @Column('int')
  user_2: number

  @Column('int')
  insult: number //id of the insult being used

  @Column('char', {default: 'x'})
  move: Move

  @Column()
  current_user: number
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