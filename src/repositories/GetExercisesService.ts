import { Exercicios } from "@prisma/client"
import { IGetFunctionGeneric, PrismaClietInstance } from './GenericInterface/GenericRepository'

export class GetExercisesService implements IGetFunctionGeneric<Array<Exercicios>>{
    
    async get(): Promise<Exercicios[]> {
        const exercises: Exercicios[] = await PrismaClietInstance.exercicios.findMany()
        return exercises
    }
}