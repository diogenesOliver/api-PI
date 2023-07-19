import { Request, Response, Router } from "express";

import { createUserInstance } from "./CreateUser/createUserInstance";
import { userLoginIstance } from "./UserLogin/userLoginInstance"

import { getUserInstance } from "./GetAllUsers/getUserInstance"
import { getExercisesInstance } from "./GetAllExercises/getExercisesInstance"
import { getAlimentationInstance } from "./GetAllRecipes/getAllRecipesInstance"

const routes = Router()

routes.post('/register', (req: Request, res: Response) => {
    return createUserInstance.createUserController(req, res)
})

routes.post('/login', (req: Request, res: Response) => {
    return userLoginIstance.userAuthentication(req, res)
})

routes.get('/users', (req: Request, res: Response) => {
    return getUserInstance.getUserController(req, res)
})

routes.get(`/users/:id`, (req: Request, res: Response) => {
    return getUserInstance.getUserController(req, res)
})

routes.get('/exercises', (req: Request, res: Response) => {
    return getExercisesInstance.getExercisesController(req, res)
})

routes.get('/recipes', (req: Request, res: Response) => {
    return getAlimentationInstance.getUserController(req, res)
})

export { routes }