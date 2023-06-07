import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { UserData } from "@prisma/client";

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    async createUserController(req: Request, res: Response) {
        const userData: UserData = req.body
        this.createUserService.save(userData)

        if (userData.email != userData.confirmar_email || userData.senha != userData.confirmar_senha)
            res.status(404).send('ERROR in password or Email')

        res.status(200).send('Succesfuly to creta User')
        return userData
    }
}