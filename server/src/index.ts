import 'reflect-metadata'
import { useKoaServer } from 'routing-controllers'
import setupDb from './db'
import InsultController from './insults/controller'
import * as Koa from 'koa'
import { Server } from 'http'
import * as IO from 'socket.io'
import * as socketIoJwtAuth from 'socketio-jwt-auth'
import { secret } from './jwt'


const app = new Koa()
const server = new Server(app.callback())
export const io = IO(server)
const port = process.env.PORT || 4000
// const source = app.listen(port, () => `Insult listenting on ${port}`)

useKoaServer(app, {
  cors: true,
  controllers: [
    InsultController
  ]
})

// socket setup
// const io = IO(source)

io.on('connect', socket => {
  // const name = socket.request.user.firstName
  console.log(`connected on ${socket.id}`)

  // socket.on('disconnect', () => {
  //   console.log(`User ${name} just disconnected`)
  // })
})

setupDb()
  .then(_ => {
    server.listen(port)
    console.log(`Listening on ${port}`)    
  })
  .catch(err => console.error(err))

