import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })
  ),
  transports: [
    new transports.File({ filename: 'logs/error.log' })
  ]
})
