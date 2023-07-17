import { Request, Response } from "express";
import { GetUsersService } from "../repositories/GetUsersService";

export class GetUsersController {
    constructor(
        private getUsersService: GetUsersService
    ) { }

    async getUserController(req: Request, res: Response) {
        try {
            const allUsers = await this.getUsersService.get()
            res.status(200).send(allUsers)

            return {
                statusCode: 200,
                body: allUsers
            }
        } catch (e: any) { console.log(e) }
    }
}