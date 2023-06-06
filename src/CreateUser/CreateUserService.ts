import { PrismaClient, UserData } from "@prisma/client";

export class CreateUserService{
    async save(data: UserData){
        const instance = new PrismaClient()
        await instance.userData.create({ data })

        return data
    }
}