import { ISaveUserInformationsRepository } from "../IUserInformationRepository";
import { UserInformationEntitie } from "../../entities/UserInformationEntitie";

import { User } from "../../domain/models/UserModel";

export class SaveUserInformationsRepository implements ISaveUserInformationsRepository{
    async save(datas: UserInformationEntitie): Promise<UserInformationEntitie> {
        await User.create(datas)
        return datas
    }
}