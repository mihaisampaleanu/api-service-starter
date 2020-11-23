import { isAccessTokenValid, getTokenIdenity } from "../../utils/index"
import { ERRORS } from "../../constants"

export const authorizeHTTPAccess = (req: any, res: any, next: any) => {
  const accessToken = getAccessToken(req)

  if (!accessToken) {
    return res.status(401).send(ERRORS.GENERAL.UNAUTHORIZED)
  }

  if (!isAccessTokenValid(accessToken)) {
    return res.status(401).send(ERRORS.GENERAL.UNAUTHORIZED)
  }

  req.tokenIdentity = getTokenIdenity(accessToken)
  return next()
}

export const authorizeSocketAccess = async (
  socket: any,
  next: any
): Promise<void> => {
  const socketQuery = socket.handshake.query

  if (!socketQuery || socketQuery.accessToken === "null") {
    return next(new Error("Unauthorized"))
  }

  if (!isAccessTokenValid(socketQuery.accessToken)) {
    return next(new Error("Unauthorized"))
  }

  return next()
}

export const getAccessToken = (req: any) => {
  if (req.headers && req.headers.authorization) {
    return req.headers.authorization.split(" ")[1]
  }

  if (req.body && req.body.access_token) {
    return req.body.access_token
  }

  if (req.query && req.query.access_token) {
    return req.query.access_token
  }
}
