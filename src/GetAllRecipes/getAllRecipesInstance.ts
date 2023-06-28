import { GetAlimentationsController } from "./GetAllRecipesController";
import { GetAlimentationsService } from "../repositories/GetAllRecipesService";

export const getAlimentationInstance = new GetAlimentationsController(
    new GetAlimentationsService()
)