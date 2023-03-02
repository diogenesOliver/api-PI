import { container } from "tsyringe";

import { GetFitDataController } from "./GetFitDataController";
import { GetFitDataService } from "./GetFitDataService";

const getFitDataInstance = new GetFitDataController(
    container.resolve(GetFitDataService)
)

export { getFitDataInstance }