import { externalServiceInstance } from './../../services/external/external-service'
import { Request, Response } from 'express'

export class Example {
  public static foo(req: Request, res: Response) {
    res.status(200).send({ status: 'Example 200 response' })
  }

  public static bar(req: Request, res: Response) {
    // req.file is the `fileName` file
    // req.body will hold the text fields, if there were any

    res.status(200).send({ status: 'Example file upload response' })
  }

  public static async callExternalService(req: Request, res: Response) {
    const result = await externalServiceInstance.post('route', {})
    res.status(200).send({ status: 'Example file upload response', data: result })
  }
}
