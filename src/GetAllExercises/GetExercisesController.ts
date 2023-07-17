import { Request, Response } from "express";
import { GetExercisesService } from "../repositories/GetExercisesService"

export class GetExercisesController {
    constructor(
        private getExercisesService: GetExercisesService
    ) { }

    async getExercisesController(req: Request, res: Response) {
        try {
            const allExercises = await this.getExercisesService.get()
            res.status(200).send(allExercises)

            return{
                body: allExercises,
                statusCode: 200
            }
        }catch(e: any){ console.log(e) }
    }
}