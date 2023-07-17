import { Request, Response } from "express";
import { CreateUserService } from "../repositories/CreateUserService";
import { UserData } from "@prisma/client";

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    async createUserController(req: Request, res: Response) {
        try {
            const userData: UserData = req.body
            if (userData.email != userData.confirmar_email || userData.senha != userData.confirmar_senha)
                res.status(404).send('ERROR in password or Email')

            await this.createUserService.save(userData)
            res.status(200).send('Succesfuly to creta User')

            return{
                body: userData,
                statCode: 200
            }
        } catch (e: any) { console.log(e) }
    }
}