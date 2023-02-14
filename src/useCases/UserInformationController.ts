import { Response, Request } from "express";
import { UserInformationEntitie } from "../entities/UserInformationEntitie";
import { UserInformationsService } from "./UserInformationsService";

export class UserInformationsController{

    constructor(
        private informationsController: UserInformationsService
    ){}

    handle(req: Request, res: Response){
        
        const userData: UserInformationEntitie = req.body
        const returnData = this.informationsController.execute(userData)
        
        res.status(200).json(returnData)
    }

}