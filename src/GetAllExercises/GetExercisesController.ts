import { Request, Response } from "express";
import { GetExercisesService } from "./GetExercisesService"

export class GetExercisesController{
    constructor(
        private getExercisesService: GetExercisesService
    ){}

    async getExercisesController(req: Request, res: Response){
        const allExercises = await this.getExercisesService.get()
        res.status(200).send(allExercises)

        return allExercises
    }
}