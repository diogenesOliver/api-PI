import { inject, injectable } from "tsyringe";
import { IGetUsersRepository } from "../../repositories/IGetUsersRepository";

@injectable()
export class GetUsersService{

    constructor(
        @inject("GetUserRepository")
        private getUserUseCase: IGetUsersRepository
    ){}

    async execute(){
        return await this.getUserUseCase.getUsers()
    }

}