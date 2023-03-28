import 'reflect-metadata'
jest.useFakeTimers()

import { InsertFitDataService } from '../../useCases/InsertFitDataUseCase/InsertFitDataService'
import { FitDataRepository } from '../../repositories/implementations/FitDataRepository'

import { FitDataUserEntitie } from '../../entities/FitDataUserEntitie'
import { fitDataMock } from '../../mocks/UserMockToTest'

const insertFitDataRepository = new FitDataRepository()
const insertFitdataService = new InsertFitDataService(insertFitDataRepository)
const fitDatainstance = new FitDataUserEntitie(fitDataMock)

describe('Insert FitData', () => {

    const userFitDataInformation = insertFitdataService.execute(fitDatainstance)

    it('Should return console log', () => {
        expect(userFitDataInformation)
            .toHaveProperty('props')
    })
    
})