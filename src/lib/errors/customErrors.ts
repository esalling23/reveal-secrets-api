export class MissingSecretError extends Error {
  constructor() {
    super()
    this.name = 'Missing Secret Error'
    this.message = 'No secret found within the request :^|'
  }
}
