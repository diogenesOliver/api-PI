import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";
import { UserData } from "@prisma/client";

export class CreateUserController{
    constructor(
        private createUserService: CreateUserService
    ){}
    
    async createUserController(req: Request, res: Response) {
        const userData: UserData = req.body
        this.createUserService.save(userData)

        res.status(200).send('Succesfuly to creta User')

        return userData
    }
}