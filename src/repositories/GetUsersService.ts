import { UserData } from "@prisma/client";
import { IGetFunctionGeneric, PrismaClietInstance } from './GenericInterface/GenericRepository'

export class GetUsersService implements IGetFunctionGeneric<Array<UserData>>{
    
    async get(): Promise<UserData[]> {
        const users: UserData[] = await PrismaClietInstance.userData.findMany({
            include: {
                Alimentacao: true,
                Exercicios: true
            }
        })
        return users
    }
}