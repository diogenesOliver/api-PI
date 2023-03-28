import 'reflect-metadata'
jest.useFakeTimers()

import request from 'supertest'
import { app } from '../../main'

import { fitDataMock } from '../../mocks/UserMockToTest'

describe('Integration test/form-fit', () => {

    test('Should be able insert new FitData', async () => {
        const response = await request(app)
        .post('/form-fit')
        .send(fitDataMock)

        expect(response.status).toEqual(201)
    })

})

describe('Body empty to route /form-fit', () => {

    test('Should retur ERRO message', async () => {
        const response = await request(app)
        .post('/form-fit')
        .send()

        expect(response.status).toEqual(404)
    })

})