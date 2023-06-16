import 'reflect-metadata'
import request from 'supertest'

import { app } from '../main'

const userLoginBodyRequest = {
    email: "oliveira@example.com",
    emailNotExist: "ribeiro@example.com"
}

describe('Integrations test to authenticate one by route /login', () => {
    it('Should be return status code 200', async () => {
        const response = await request(app)
            .post('/login')
            .send(userLoginBodyRequest)

        expect(response.status).toEqual(200)
    })

    it('Should be return status code 404', async () => {
        const response = await request(app)
            .post('/login')
            .send(userLoginBodyRequest.emailNotExist)

        expect(response.status).toBe(404)
    })
})