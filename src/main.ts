import 'reflect-metadata'
import './shared/index'

import express from 'express'
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(routes)

export { app }