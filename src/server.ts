import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import secretsRouter from './routes/secrets'
import errorHandler from './lib/errors/errorHandler'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded())
app.use(cors())

app.use('/reveal/your/secrets', secretsRouter)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listening at port ${port}`)
})

