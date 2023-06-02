import { ISaveUserInformationsRepository } from "../IUserInformationRepository";
import { UserInformationEntitie } from "../../entities/UserInformationEntitie";

import { User } from "../../domain/models/UserModel";

import { ISaveFunctionGeneric } from '../GenericRepository'

export class SaveUserInformationsRepository implements ISaveUserInformationsRepository {
    save(datas: UserInformationEntitie): UserInformationEntitie {
        User.create(datas)
        return datas
    }
}