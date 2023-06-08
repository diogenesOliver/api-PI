import { Request, Response } from "express";
import { GetAlimentationsService } from "./GetAllRecipesService";

export class GetAlimentationsController{
    constructor(
        private getAlimentationsService: GetAlimentationsService
    ){}

    async getUserController(req: Request, res: Response){
        const allAlimentations = await this.getAlimentationsService.get()
        res.status(200).send(allAlimentations)

        return {
            statusCode: 200,
            body: allAlimentations
        }
    }
}