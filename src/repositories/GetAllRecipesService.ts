import { Alimentacao } from "@prisma/client"
import { IGetFunctionGeneric, PrismaClietInstance } from './GenericInterface/GenericRepository'

export class GetAlimentationsService implements IGetFunctionGeneric<Array<Alimentacao>>{

    async get(): Promise<Alimentacao[]> {
        const alimentations: Alimentacao[] = await PrismaClietInstance.alimentacao.findMany()
        return alimentations
    }
}