import { Request, Response } from 'express'
import { GetFitDataService } from "./GetFitDataService";

export class GetFitDataController{

    constructor(
        private getFitDataController: GetFitDataService
    ){}

    async handle(req: Request, res: Response){
        const userFitData = await this.getFitDataController.execute()
        return res.status(200).send(userFitData)
    }

}