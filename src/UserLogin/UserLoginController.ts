import { Request, Response } from 'express'
import { UserLoginService } from '../repositories/UserLoginService'
import { UserData } from '@prisma/client'
export class UserLoginController {
    constructor(
        private userLoginService: UserLoginService
    ) { }

    async userAuthentication(req: Request, res: Response) {
        try {
            const inputData: UserData = req.body
            const findUserEmail = await this.userLoginService.findUser(inputData.email)

            if (findUserEmail == null || inputData.senha != findUserEmail.senha)
                res.status(404).json({ msg: "ERROR on password or Email" })

            res.status(200).send(findUserEmail)
            console.log(findUserEmail)
            return {
                findUserEmail,
                statusCode: 200
            }
        } catch (e: any) { console.log(e) }
    }
}   