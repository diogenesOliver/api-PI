import { FitDataUserEntitie } from "../entities/FitDataUserEntitie";

export interface IFitDataRepository {
    insertFitData(fitData: FitDataUserEntitie): FitDataUserEntitie
}