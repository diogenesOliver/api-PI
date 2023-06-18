import { Request, Response } from 'express'
import { UserLoginService } from '../repositories/UserLoginService'
import { UserData } from '@prisma/client'

import * as bcrypt from 'bcrypt'

export class UserLoginController {
    constructor(
        private userLoginService: UserLoginService
    ) { }

    async userAuthentication(req: Request, res: Response) {
        const inputData: UserData = req.body
        const findUserEmail = await this.userLoginService.findUser(inputData.email)

        const checkingPassword = bcrypt.compareSync(inputData.senha, findUserEmail.senha)

        if (findUserEmail == null || checkingPassword == false)
            res.status(404).send('Password or Email incorrect')

        res.status(200).send('Welcome to system')
        return {
            findUserEmail,
            statusCode: 200
        }
    }
}   