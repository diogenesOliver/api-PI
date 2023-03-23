import 'reflect-metadata'
jest.useFakeTimers()

import { UserInformationsService } from '../useCases/CreateUserUseCase/UserInformationsService'
import { SaveUserInformationsRepository } from '../repositories/implementations/UserInformationRepository'

import { UserInformationEntitie } from '../entities/UserInformationEntitie'
import { userMockForTest } from '../mocks/UserMockToTest'

const saveUserInformationRepository = new SaveUserInformationsRepository()
const userInformatioService = new UserInformationsService(saveUserInformationRepository)
const userInstance = new UserInformationEntitie(userMockForTest)

describe('Create User', () => {

    const userInformationsTest = userInformatioService.execute(userInstance)

    it('E-mail and confirmation e-mail must be the same', () => {
        expect((userInformationsTest.data.props.confirmEmail))
            .toEqual((userInformationsTest.data.props.confirmEmail))
    })

    it('Must contain DATA property', () => {
        expect(userInformationsTest).toHaveProperty('data')
    })

    it('Must contain STATUSCODE property', () => {
        expect(userInformationsTest).toHaveProperty('statuscode')
    })

    it('The STATUSCODE property must be equal to 201', () => {
        expect(userInformationsTest.statuscode).toEqual(201)
    })

})