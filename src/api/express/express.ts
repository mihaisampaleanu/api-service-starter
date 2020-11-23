import { Application, Response, Request, NextFunction } from "express"
import helmet from "helmet"
import bodyParser from "body-parser"

import { router } from "./routes"

export const initExpress = (app: Application) => {
  app.use(helmet())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(
    bodyParser.json({
      limit: "10mb",
    })
  )

  app.use(bodyParser.json())

  // Cors
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credegooglentials", "true")
    res.header("Content-Type", "application/json")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )

    if (req.method === "OPTIONS") {
      res.sendStatus(200)
    } else {
      next()
    }
  })

  app.use(router)
}
