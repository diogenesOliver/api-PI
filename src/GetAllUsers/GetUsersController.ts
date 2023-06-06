import { Request, Response } from "express";
import { GetUsersService } from "./GetUsersService";

export class GetUsersController{
    constructor(
        private getUsersService: GetUsersService
    ){}

    async getUserController(req: Request, res: Response){
        const allUsers = await this.getUsersService.get()
        res.status(200).send(allUsers)

        return {
            statusCode: 200,
            body: allUsers
        }
    }
}