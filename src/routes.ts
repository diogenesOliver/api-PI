import { Request, Response, Router } from "express";

import { userInformationsControllerInstance } from "./useCases/CreateUserUseCase/userInformationIndex";
import { getUsersInstance } from "./useCases/GetUsersUseCase/getUsersIndex";

import { insertFitDataInstance } from "./useCases/InsertFitDataUseCase/inserFitDataIndex";
import { getFitDataInstance } from "./useCases/GetFitDataUseCase/getFitDataIndex";

import { createUserValidate } from "./domain/middleware/MiddlewareValidation";

const routes = Router()

routes.post('/user-form', createUserValidate.validate, (req: Request, res: Response) => {
    return userInformationsControllerInstance.handle(req, res)
})

routes.get('/all-users', (req: Request, res: Response) => {
    return getUsersInstance.handle(req, res)
})

routes.post('/form-fit', (req: Request, res: Response) => {
    return insertFitDataInstance.handle(req, res)
})

routes.get('/fit-data', (req: Request, res: Response) => {
    return getFitDataInstance.handle(req, res)
})

export { routes }