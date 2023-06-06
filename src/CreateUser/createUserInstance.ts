import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

export const createUserControllerInstance = new CreateUserController(
    new CreateUserService()
)