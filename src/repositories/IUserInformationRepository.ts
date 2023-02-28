import { UserInformationEntitie } from "../entities/UserInformationEntitie";

export interface ISaveUserInformationsRepository{
    save(datas: UserInformationEntitie): Promise<UserInformationEntitie>
}