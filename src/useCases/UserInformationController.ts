import { Response, Request } from "express";
import { UserInformationEntitie } from "../entities/UserInformationEntitie";
import { UserInformationsService } from "./UserInformationsService";

export class UserInformationsController{

    constructor(
        private informationsController: UserInformationsService
    ){}

    async handle(req: Request, res: Response){
        
        const userData: UserInformationEntitie = req.body

        if(req.body.email != req.body.confirmEmail)
            res.status(404).send('Os emails não conferem')

        const returnData = this.informationsController.execute(userData)
        
        res.status(200).json(returnData)
    }

}