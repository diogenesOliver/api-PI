import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

export const createUserInstance = new CreateUserController(
    new CreateUserService()
)