import express from 'express'
import { corsMiddleware } from './middlewares/cors-middleware'
import { errorHandlerMiddleware } from './middlewares/error-handler-middleware'

const port = process.env.PORT ?? 1234

const app = express()
app.use(express.json())
app.use(corsMiddleware())
app.disable('x-powered-by')

// Middleware de manejo de errores internos (logs)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
