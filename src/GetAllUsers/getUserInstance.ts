import { GetUsersController } from "./GetUsersController";
import { GetUsersService } from "./GetUsersService";

export const getUserInstance = new GetUsersController(
    new GetUsersService()
)