import { NextFunction, Request, Response } from "express";
import { MissingSecretError } from "./customErrors";

const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  let errorStatus = 500

  if (error instanceof MissingSecretError) {
    errorStatus = 400
  }

  res.status(errorStatus).json(error)
}

export default errorHandler