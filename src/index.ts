import http from 'http'
import express from 'express'

import { initExpress } from './api/express/express'
import { config } from './config/config'

const app = express()
const server = http.createServer(app)

;(async () => {
  initExpress(app)
  await server.listen(config.PORT)

  // tslint:disable-next-line:no-console
  console.info(`Server listen on : ${(server as any).address().port}`)
})()
