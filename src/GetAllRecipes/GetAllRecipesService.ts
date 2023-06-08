import { PrismaClient, Alimentacao } from "@prisma/client"

export class GetAlimentationsService{
    async get(){
        const instance = new PrismaClient()
        const alimentations: Alimentacao[] = await instance.alimentacao.findMany()
        
        return alimentations
    }
}