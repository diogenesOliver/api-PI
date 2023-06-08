import { GetAlimentationsController } from "./GetAllRecipesController";
import { GetAlimentationsService } from "./GetAllRecipesService";

export const getAlimentationInstance = new GetAlimentationsController(
    new GetAlimentationsService()
)