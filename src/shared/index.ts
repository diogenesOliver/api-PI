import { container } from 'tsyringe'

import { ISaveUserInformationsRepository } from "../repositories/IUserInformationRepository";
import { SaveUserInformationsRepository } from "../repositories/implementations/UserInformationRepository";

import { IMailProvider } from '../providers/IMailProvider';
import { MailProvider } from '../providers/implementation/MailProvider';

import { IGetUsersRepository } from '../repositories/IGetUsersRepository';
import { GetUsersRepository } from '../repositories/implementations/GetUsersRepository';

container.registerSingleton<ISaveUserInformationsRepository>(
    "SaveUserInformationsRepository",
    SaveUserInformationsRepository
)

container.registerSingleton<IMailProvider>(
    "MailProvider",
    MailProvider
)

container.registerSingleton<IGetUsersRepository>(
    "GetUserRepository",
    GetUsersRepository
)