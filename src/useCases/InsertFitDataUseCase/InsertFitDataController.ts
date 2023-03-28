import { Request, Response } from "express";
import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { InsertFitDataService } from "./InsertFitDataService";

export class InsertFitDataController {

    constructor(
        private fitDataController: InsertFitDataService
    ) { }

    handle(req: Request, res: Response) {
        const userFitData: FitDataUserEntitie = req.body

        this.fitDataController.execute(userFitData)
        res.status(201).send(userFitData)
    }

}