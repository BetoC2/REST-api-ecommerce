import cors from 'cors'
import { ErrorCors } from '../errors/ErrorCors'

const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:1234',
  'http://localhost:4321'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (!origin || acceptedOrigins.includes(origin)) {
      return callback(null, true)
    } else {
      return callback(new ErrorCors('Not allowed by CORS'))
    }
  }
})
