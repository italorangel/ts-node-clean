import express from 'express'
import SetupMiddlewares from './middlewares'

const app = express()
SetupMiddlewares(app)
export default app
