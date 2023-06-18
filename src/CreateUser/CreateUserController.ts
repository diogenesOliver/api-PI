import { Request, Response } from "express";
import { CreateUserService } from "../repositories/CreateUserService";
import { UserData } from "@prisma/client";

import * as bcrypt from 'bcrypt'

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    async createUserController(req: Request, res: Response) {
        const userData: UserData = req.body

        const salt = await bcrypt.genSalt(14)
        const bcryptPassword = await bcrypt.hash(userData.senha, salt)

        if (userData.email != userData.confirmar_email || userData.senha != userData.confirmar_senha)
            res.status(404).send('ERROR in password or Email')

        userData.senha = bcryptPassword
        userData.confirmar_senha = bcryptPassword

        await this.createUserService.save(userData)

        res.status(200).send('Succesfuly to creta User')
        return userData
    }
}