export class ErrorCors extends Error {
  constructor (message) {
    super(message)
    this.name = 'ErrorCors'
  }
}
