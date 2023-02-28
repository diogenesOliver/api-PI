import { Request, Response, Router } from "express";

import { userInformationsControllerInstance } from "./useCases/CreateUserUseCase/userInformationIndex";
import { getUsersInstance } from "./useCases/GetUsersUseCase/getUsersIndex";

const routes = Router()

routes.post('/user-form', (req: Request, res: Response) => {
    return userInformationsControllerInstance.handle(req, res)
})

routes.get('/all-users', (req: Request, res: Response) => {
    return getUsersInstance.handle(req, res)
})

export { routes }