import { ISaveUserInformationsRepository } from "../IUserInformationRepository";
import { UserInformationMock } from "../../domain/UserInformationMock";
import { UserInformationEntitie } from "../../entities/UserInformationEntitie";

export class SaveUserInformationsRepository implements ISaveUserInformationsRepository{
    save(datas: UserInformationEntitie): UserInformationEntitie {
        UserInformationMock.push(datas)
        return datas
    }
}