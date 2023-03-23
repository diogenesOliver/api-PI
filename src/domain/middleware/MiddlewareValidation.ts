import { Request, Response, NextFunction } from "express";
import { userDataSchema } from "./CreateUserValidate/validateCreateUserSchema";

class HandleValidationCreateUserData{

    async validate(req: Request, res: Response, next: NextFunction){
        if(!await (userDataSchema.isValid(req.body))){
            return res.status(404).json({
                erro: true,
                message: 'There are fields filled in incorrectly',
                status: 404
            })
        }
        next()
    }

}

const createUserValidate = new HandleValidationCreateUserData()
export { createUserValidate }