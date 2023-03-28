import { FitDataUserEntitie } from "../../entities/FitDataUserEntitie";
import { IFitDataRepository } from "../IFitDataRepository";
import { FitData } from "../../domain/models/FitDataUser";

export class FitDataRepository implements IFitDataRepository {
    insertFitData(fitData: FitDataUserEntitie): FitDataUserEntitie {
        FitData.create(fitData)
        return fitData
    }
}