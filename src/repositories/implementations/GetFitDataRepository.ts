import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { IFitDataRepository } from "../IFitDataRepository";

export class FitDataRepository implements IFitDataRepository{
    async insertFitData(fitData: FitDataUserEntitie): Promise<FitDataUserEntitie> {
        
        return fitData
    }
}