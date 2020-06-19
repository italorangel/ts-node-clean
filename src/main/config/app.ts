import express from 'express'
import SetupMiddlewares from './middlewares'
import SetupRoutes from './routes'

const app = express()
SetupMiddlewares(app)
SetupRoutes(app)
export default app
