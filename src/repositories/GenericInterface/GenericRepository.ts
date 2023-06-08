import { PrismaClient } from "@prisma/client"

export const PrismaClietInstance = new PrismaClient()

export interface ISaveFunctionGeneric<T> {
    save(data: T): Promise<T>
}

export interface IGetFunctionGeneric<T> {
    get(): Promise<T>
}