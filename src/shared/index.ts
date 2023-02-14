import { container } from 'tsyringe'

import { ISaveUserInformationsRepository } from "../repositories/IUserInformationRepository";
import { SaveUserInformationsRepository } from "../repositories/implementations/UserInformationRepository";

container.registerSingleton<ISaveUserInformationsRepository>(
    "SaveUserInformationsRepository",
    SaveUserInformationsRepository
)