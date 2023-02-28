import { User } from "../../domain/models/UserModel";
import { IGetUsersRepository } from "../IGetUsersRepository";

export class GetUsersRepository implements IGetUsersRepository{
    async getUsers(): Promise<any> {
        return User.find()
    }
}