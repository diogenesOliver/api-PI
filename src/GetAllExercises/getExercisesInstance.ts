import { GetExercisesController } from "./GetExercisesController"
import { GetExercisesService } from "../repositories/GetExercisesService"

export const getExercisesInstance = new GetExercisesController(
    new GetExercisesService()
)