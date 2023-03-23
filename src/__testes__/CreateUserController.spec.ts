import 'reflect-metadata'
jest.useFakeTimers()

import request from 'supertest'
import { app } from '../main'

import { userMockForTest } from '../mocks/UserMockToTest'

describe('Integration test/user-form',  () => {

    test('Should be able create a new User', async () => {
        const response = await request(app)
        .post('/user-form')
        .send(userMockForTest)

        expect(response.header['content-type']).toMatch('application/json')
        expect(response.statusCode).toEqual(200)
    })
})

/* Não tem validação implemetadas */

/* describe('Testing ERROR', () => {
    test('Should be able create a new User', async () => {
        const response = await request(app)
        .post('/user-form')
        .send()

        expect(response.statusCode).toEqual(404)
    })
}) */