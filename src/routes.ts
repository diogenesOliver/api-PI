import { Request, Response, Router } from "express";
import { createUserControllerInstance } from "./CreateUser/createUserInstance";

const routes = Router()

routes.post('/login', (req: Request, res: Response) => {
    return createUserControllerInstance.createUserController(req, res)
})

export { routes }