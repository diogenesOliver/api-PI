import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { IFitDataRepository } from "../IFitDataRepository";
import { FitData } from "../../domain/models/FitDataUser";

export class FitDataRepository implements IFitDataRepository{
    async insertFitData(fitData: FitDataUserEntitie): Promise<FitDataUserEntitie> {
        FitData.create(fitData)
        return fitData
    }
}