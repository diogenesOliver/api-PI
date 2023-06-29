import 'reflect-metadata'
import request from 'supertest'

import { app } from '../main'

const userDataFromtest = {
    email: "oliveira@example.com",
    confirmar_email: "oliveira@example.com",
    senha: "senha123",
    confirmar_senha: "senha123",
    nome: "Diógenes",
    idade: 25,
    peso: 70.5,
    altura: 1.75,
    res_fisica: "Lesão no Joelho",
    res_alimentar: "Lactose"
}

describe('Integration test to create one User by route /register', () => {
    it('Should be return status code 200', async () => {
        const response = await request(app)
            .post('/register')
            .send(userDataFromtest)

        /* console.log(response) */
        expect(response.status).toEqual(200)
    })
})