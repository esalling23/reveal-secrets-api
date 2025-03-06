import { InputJsonObject } from "@prisma/client/runtime/library"
import prisma from "../prisma"

export const createPayload = async (payload: InputJsonObject) => {
  return prisma.jsonPayload.create({
    data: {
      secrets: payload,
    }
  })
}