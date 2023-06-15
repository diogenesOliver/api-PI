import { IUserLoginFunction, PrismaClietInstance } from '../repositories/GenericInterface/GenericRepository'

export class UserLoginService implements IUserLoginFunction<string>{
    async findUser(userEmail: string): Promise<any> {
        return await PrismaClietInstance.userData.findUnique({
            where: {
                email: userEmail,
            }
        })
    }
}