import { container } from 'tsyringe'

import { ISaveUserInformationsRepository } from "../repositories/IUserInformationRepository";
import { SaveUserInformationsRepository } from "../repositories/implementations/UserInformationRepository";

import { IMailProvider } from '../providers/IMailProvider';
import { MailProvider } from '../providers/implementation/MailProvider';

import { IGetUsersRepository } from '../repositories/IGetUsersRepository';
import { GetUsersRepository } from '../repositories/implementations/GetUsersRepository';

import { IFitDataRepository } from '../repositories/IFitDataRepository';
import { FitDataRepository } from '../repositories/implementations/FitDataRepository';

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

container.registerSingleton<IFitDataRepository>(
    "FitDataRepository",
    FitDataRepository
)