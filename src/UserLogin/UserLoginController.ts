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
            res.status(404).send('Password or Email incorrect')

        res.status(200).send(findUserEmail)
        return {
            findUserEmail,
            statusCode: 200
        }
    }
}   