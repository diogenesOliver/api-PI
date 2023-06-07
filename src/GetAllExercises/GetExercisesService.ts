import { PrismaClient, Exercicios } from "@prisma/client"

export class GetExercisesService{
    async get(){
        const instance = new PrismaClient()
        const exercises: Exercicios[] = await instance.exercicios.findMany()
        
        return exercises
    }
}