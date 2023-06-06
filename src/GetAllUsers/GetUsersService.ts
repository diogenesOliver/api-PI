import { PrismaClient, UserData } from "@prisma/client";

export class GetUsersService{
    async get(){
        const instance = new PrismaClient()
        const users: UserData[] = await instance.userData.findMany()
        
        return users
    }
}