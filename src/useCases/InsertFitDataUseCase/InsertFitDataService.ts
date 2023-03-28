import { inject, injectable } from "tsyringe";
import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { IFitDataRepository } from "../../repositories/IFitDataRepository";

@injectable()
export class InsertFitDataService {

    constructor(
        @inject("FitDataRepository")
        private fitDataService: IFitDataRepository
    ) { }

    execute(fitData: FitDataUserEntitie) {
        return this.fitDataService.insertFitData(fitData)
    }

}