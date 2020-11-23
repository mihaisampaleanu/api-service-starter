import fetch from 'node-fetch'

export class ExternalService {
  constructor() {}

  public post = (route: string, payload: unknown) => {
    const body = JSON.stringify(payload)

    return new Promise((resolve, reject) => {
      fetch(route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body,
      })
        .then((response) => response.json())
        .then((response: any) => {
          resolve(response)
        })
        .catch((error: string[]) => {
          reject(error)
        })
    })
  }
}

const externalServiceInstance = new ExternalService()
export { externalServiceInstance }
