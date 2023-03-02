import { FitData } from "../../domain/models/FitDataUser";
import { IGetFitDataRepository } from "../IGetFitDataRepository";

export class GetFitDataRepository implements IGetFitDataRepository{
    async getFitData(): Promise<any> {
        return await FitData.find()
    }
}