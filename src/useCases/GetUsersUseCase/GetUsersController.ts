import { Request, Response } from "express";
import { GetUsersService } from "./GetUsersService";

export class GetUsersController{

    constructor(
        private getUsersController: GetUsersService
    ){}

    async handle(req: Request, res: Response){
        const allUsers = await this.getUsersController.execute()
        res.status(200).send(allUsers)
    }

}