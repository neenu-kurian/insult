import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers'
import { sign } from '../jwt'
import User from '../users/entities'

class AuthenticatePayload {
    @IsString()
    email: string

    @IsString()
    password: string
}

@JsonController()
export default class LoginController {
    @Post('/logins')
    async authenticate(
    @Body() { email, password}: AuthenticatePayload
    ) {
        const user = await User.findOne({ where: { email } })
        if (!user) throw new BadRequestError('This user does not exist!')

        if (!await user.checkPassword(password)) throw new BadRequestError('The password is incorrect')

        const jwt = sign({ id: user.id! })
        return { jwt }
        // return 'you hit the login route'
    }
}