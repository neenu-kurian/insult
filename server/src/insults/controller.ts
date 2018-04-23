import { JsonController, Get } from 'routing-controllers'
import { Insult } from './entities'

@JsonController()
export default class InsultController {
  @Get('/insults')
  getInsults(){
    return Insult.find()
  }
}