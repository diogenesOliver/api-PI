import 'reflect-metadata'
import request from 'supertest'

import { app } from '../main'


describe('Integrations tests from route with method GET /recipes, /users, /exercises', () => {
    
    it('Should be return a list of the users with status code 200 OK', async () => {
        const response = await request(app)
            .get('/users')

            expect(response.status).toEqual(200)
    })
    
    it('Should be return a list of the recipes with status code 200 OK', async () => {
        const response = await request(app)
            .get('/recipes')

            expect(response.status).toEqual(200)
    })
    
    it('Should be return a list of the exercises with status code 200 OK', async () => {
        const response = await request(app)
            .get('/exercises')
            
            expect(response.status).toEqual(200)
    })

})