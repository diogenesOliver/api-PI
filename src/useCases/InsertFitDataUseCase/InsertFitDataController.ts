import { Request, Response } from "express";
import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { InsertFitDataService } from "./InsertFitDataService";

export class InsertFitDataController{

    constructor(
        private fitDataController: InsertFitDataService
    ){}

    async handle(req: Request, res: Response){
        const userFitData: FitDataUserEntitie = req.body

        await this.fitDataController.execute(userFitData)
        res.status(201).send(userFitData)
    }

}