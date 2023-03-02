import { inject, injectable } from "tsyringe";
import { IGetFitDataRepository } from "../../repositories/IGetFitDataRepository";

@injectable()
export class GetFitDataService{

    constructor(
        @inject("GetFitDataRepository")
        private getFitDataService: IGetFitDataRepository
    ){}

    async execute(){
        return await this.getFitDataService.getFitData()
    }

}