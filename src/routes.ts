import { Request, Response, Router } from "express";

import { createUserControllerInstance } from "./CreateUser/createUserInstance";
import { getUserInstance } from "./GetAllUsers/getUserInstance"

const routes = Router()

routes.post('/login', (req: Request, res: Response) => {
    return createUserControllerInstance.createUserController(req, res)
})

routes.get('/users', (req: Request, res: Response) => {
    return getUserInstance.getUserController(req, res)
})

export { routes }