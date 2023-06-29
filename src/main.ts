import 'reflect-metadata'

require('dotenv').config()
const cors = require("cors")

import express from 'express'
import { routes } from './routes'
import path from 'path'

const app = express()

app.set('view engine', 'vue')
app.set('views', path.join(__dirname, '../web'))

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../web')))
app.use(routes)

export { app }