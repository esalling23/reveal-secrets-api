import express, { Request, Response, NextFunction } from 'express'
import multer from 'multer'

import { createPayload } from '../lib/db/jsonPayload'
import handleEmptySecret from '../lib/handleEmptySecret'

const router = express.Router()
const upload = multer()

router.post('/', upload.none(), async (req: Request, res: Response, next: NextFunction) => {
  try {
    handleEmptySecret(req.body)

    const payload = await createPayload(req.body)
    res.status(200).send({ secrets: payload })
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    handleEmptySecret(req.query)

    const payload = await createPayload(req.query)
    res.status(200).send({ secrets: payload })
  } catch (err) {
    next(err)
  }
})

export default router