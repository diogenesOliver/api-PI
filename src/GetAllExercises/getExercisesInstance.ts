import { GetExercisesController } from "./GetExercisesController"
import { GetExercisesService } from "./GetExercisesService"

export const getExercisesInstance = new GetExercisesController(
    new GetExercisesService()
)