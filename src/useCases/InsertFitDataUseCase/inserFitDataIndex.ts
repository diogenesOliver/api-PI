import { container } from "tsyringe";

import { InsertFitDataController } from './InsertFitDataController'
import { InsertFitDataService } from "./InsertFitDataService";

const insertFitDataInstance = new InsertFitDataController(
    container.resolve(InsertFitDataService)
)

export { insertFitDataInstance }