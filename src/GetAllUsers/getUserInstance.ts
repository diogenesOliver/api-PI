import { GetUsersController } from "./GetUsersController";
import { GetUsersService } from "../repositories/GetUsersService";

export const getUserInstance = new GetUsersController(
    new GetUsersService()
)