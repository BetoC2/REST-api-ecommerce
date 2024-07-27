import { logger } from '../logs/logger'

export const errorHandlerMiddleware = (err, req, res, next) => {
  logger.error(`${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  })
}
