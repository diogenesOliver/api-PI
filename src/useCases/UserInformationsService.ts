import { inject, injectable } from "tsyringe";

import { ISaveUserInformationsRepository } from "../repositories/IUserInformationRepository";
import { UserInformationEntitie } from "../entities/UserInformationEntitie";

@injectable()
export class UserInformationsService{

    constructor(
        @inject("SaveUserInformationsRepository")
        private informationsService: ISaveUserInformationsRepository
    ){}

    execute(data: UserInformationEntitie){
        this.informationsService.save(data)
        return data
    }

}