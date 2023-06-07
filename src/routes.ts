import { Request, Response, Router } from "express";

import { createUserInstance } from "./CreateUser/createUserInstance";
import { getUserInstance } from "./GetAllUsers/getUserInstance"
import { getExercisesInstance } from "./GetAllExercises/getExercisesInstance"

const routes = Router()

routes.post('/login', (req: Request, res: Response) => {
    return createUserInstance.createUserController(req, res)
})

routes.get('/users', (req: Request, res: Response) => {
    return getUserInstance.getUserController(req, res)
})

routes.get('/exercises', (req: Request, res: Response) => {
    return getExercisesInstance.getExercisesController(req, res)
})

export { routes }