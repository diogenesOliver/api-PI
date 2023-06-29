import { UserLoginService } from '../repositories/UserLoginService'
import { UserLoginController } from '../UserLogin/UserLoginController'

export const userLoginIstance = new UserLoginController(
    new UserLoginService
)