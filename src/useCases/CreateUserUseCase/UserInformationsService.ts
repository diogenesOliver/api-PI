import { inject, injectable } from "tsyringe";

import { ISaveUserInformationsRepository } from "../../repositories/IUserInformationRepository";
import { UserInformationEntitie } from "../../entities/UserInformationEntitie";
import { IMailProvider } from "../../providers/IMailProvider";

@injectable()
export class UserInformationsService {

    constructor(
        @inject("SaveUserInformationsRepository")
        private informationsService: ISaveUserInformationsRepository,
        @inject("MailProvider")
        private mailProviderService: IMailProvider
    ) { }

    async execute(data: UserInformationEntitie) {
        await this.informationsService.save(data)
        return data
    }

}