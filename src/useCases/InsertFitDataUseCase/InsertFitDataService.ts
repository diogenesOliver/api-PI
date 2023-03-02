import { inject, injectable } from "tsyringe";
import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { IFitDataRepository } from "../../repositories/IFitDataRepository";

@injectable()
export class InsertFitDataService{

    constructor(
        @inject("FitDataRepository")
        private fitDataService: IFitDataRepository 
    ){}

    async execute(fitData: FitDataUserEntitie){
        await this.fitDataService.insertFitData(fitData)
    }

}