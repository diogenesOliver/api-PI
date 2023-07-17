import { Request, Response } from "express";
import { GetAlimentationsService } from "../repositories/GetAllRecipesService";

export class GetAlimentationsController {
    constructor(
        private getAlimentationsService: GetAlimentationsService
    ) { }

    async getUserController(req: Request, res: Response) {
        try {
            const allAlimentations = await this.getAlimentationsService.get()
            res.status(200).send(allAlimentations)

            return {
                body: allAlimentations,
                statusCode: 200
            }
        }catch(e: any){ console.log(e) }
    }
}