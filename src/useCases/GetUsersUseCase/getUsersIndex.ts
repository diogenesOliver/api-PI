import { container } from "tsyringe";

import { GetUsersController } from "./GetUsersController";
import { GetUsersService } from "./GetUsersService";

const getUsersInstance = new GetUsersController(
    container.resolve(GetUsersService)
)

export { getUsersInstance }