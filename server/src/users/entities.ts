import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer';
import { MinLength, IsString, IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt'
import { Game } from '../insults/entities';

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @IsEmail()
  @Column('text')
  email: string


  @MinLength(8)
  @IsString()
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  async setPassword(rawPassword: string){
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean>{
    return bcrypt.compare(rawPassword, this.password)
  }

  @OneToMany(_ => Game, game => game.user)
  game: Game[];
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

- Look at brams code and see what he does || did that, and even when copy pasting directly, it doesn't work!!!
- Do the comment compile uncomment thing tried and worked, but doesn't work with out own code


*/