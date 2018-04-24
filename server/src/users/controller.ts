import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import User from './entities';

@JsonController()
export default class UserController {

<<<<<<< HEAD
    @Post('/users')
    async signup(
        @Body() user: User
    ) {
        const { password, ...rest } = user
        const entity = User.create(rest)
        await entity.setPassword(password)
        return entity.save()
    }

    @Authorized()
    @Get('/users/:id([0-9]+)')
    getUser(
        @Param('id') id: number
    ) {
        return User.findOneById(id)
    }

    @Authorized()
    @Get('/users')
    allUsers() {
        return User.find()
    }
=======
  @Post('/users')
  async signup(
    @Body() user: User
  ) {
    const { password, ...rest } = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }

  @Authorized()
  @Get('/users/:id([0-9]+)')
  getUser(
    @Param('id') id: number
  ) {
    return User.findOneById(id)
  }

  @Authorized()
  @Get('/users')
  allUsers() {
    return User.find()
  }
>>>>>>> 2499d8349307dac75957232c8b279b0507177a81
}
