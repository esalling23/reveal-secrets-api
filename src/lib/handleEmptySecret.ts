import { MissingSecretError } from "./errors/customErrors"

const handleEmptySecret = (data: object) => {
  if (Object.keys(data).length === 0) {
    throw new MissingSecretError()
  }
  return
}

export default handleEmptySecret