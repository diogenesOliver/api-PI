import { container } from "tsyringe";

import { UserInformationsController } from "./UserInformationController";
import { UserInformationsService } from "./UserInformationsService";

const userInformationsControllerInstance = new UserInformationsController(
    container.resolve(UserInformationsService)
)

export { userInformationsControllerInstance }