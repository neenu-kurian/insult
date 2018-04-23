import { JsonController, Get,Param,Put ,Body} from 'routing-controllers'
import { Insult } from './entities'
import {calculateChances} from './logic'

@JsonController()
export default class InsultController 
{
  @Get('/insults')
  getInsults()
  {
    return Insult.find()
  }

  
  @Get('/insults/:id([0-9]+)')
  getGame(
    @Param('id') id: number
  ) {
     return Insult.findOneById(id)
    }

  @Put('/insults/:id([0-9]+)')
  async updateGame(
    @Param('id') insultId: number,
    @Body() update: Partial<Insult>
  ) {
    let currentGame = await Insult.findOneById(insultId)
    console.log(currentGame)
    if(currentGame!=null) {
      const chances = calculateChances(currentGame.comeback,update.comeback)
      if(chances <= 0) {
        console.log("Sorry! You lost!! Please start a new game")
      }
      else {
        console.log("chances left"+chances)
      }
    }
  }
  
}