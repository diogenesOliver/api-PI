import { UserData } from "@prisma/client";
import { ISaveFunctionGeneric, PrismaClietInstance } from './GenericInterface/GenericRepository'

export class CreateUserService implements ISaveFunctionGeneric<UserData>{
    async save(data: UserData): Promise<UserData> {
        await PrismaClietInstance.userData.create({ data })
        return data
    }
}