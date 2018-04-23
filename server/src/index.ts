import 'reflect-metadata'
import { useKoaServer } from 'routing-controllers'
import setupDb from './db'
import InsultController from './insults/controller'
import * as Koa from 'koa'

const app = new Koa()
const port = process.env.PORT || 4000

useKoaServer(app, {
  cors: true,
  controllers: [
    InsultController
  ]
})

setupDb()
  .then(_ => {
    app.listen(port, () => `Insult listenting on ${port}`)
  })
  .catch(err => console.error(err))

