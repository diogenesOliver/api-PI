import { FitDataUserEntitie } from "../entities/FitDataUserEntitie";

export interface IGetFitDataRepository{
    getFitData(): Promise<any>
}