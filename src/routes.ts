import { Request, Response, Router } from "express";
import { userInformationsControllerInstance } from "./useCases/CreateUserUseCase/userInformationIndex";

const routes = Router()

routes.post('/user-form', (req: Request, res: Response) => {
    return userInformationsControllerInstance.handle(req, res)
})

export { routes }