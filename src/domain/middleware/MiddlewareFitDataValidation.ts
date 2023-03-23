import { Request, Response, NextFunction } from "express";
import { fitDataSchema } from "./InsertFitDataValidate/validateInsertDataSchema";

class HandleValidationInsertFitData{

    async validate(req: Request, res: Response, next: NextFunction){
        if(!await (fitDataSchema.isValid(req.body))){
            return res.status(404).json({
                erro: true,
                message: 'There are fields filled in incorrectly',
                status: 404
            })
        }
        next()
    }

}

const insertFitDataValidate = new HandleValidationInsertFitData()
export { insertFitDataValidate }