import { Request, Response } from 'express'
import { UserLoginService } from '../repositories/UserLoginService'
import { UserData } from '@prisma/client'

export class UserLoginController {
    constructor(
        private userLoginService: UserLoginService
    ) { }

    async userAuthentication(req: Request, res: Response) {
        const inputData: UserData = req.body
        const findUserEmail = await this.userLoginService.findUser(inputData.email)

        if (findUserEmail == null)
            res.status(404).send('User not exist..')

        res.status(200).send('Welcome to system')
        return {
            findUserEmail,
            statusCode: 200
        }
    }
}