
import { tokens } from '../config/tokens';

export const isAccessTokenValid = (token: string): boolean => {
  const tokensList = Object.values(tokens);
  const tokenPosition = tokensList.findIndex((item)=>{
    return item === token
  })

  const tokenExist = tokenPosition > -1
  return tokenExist
};

export const getTokenIdenity =  (token: string): string | null => {
  const tokensIndentities = Object.keys(tokens);

  const tokenIdentityIndex = tokensIndentities.findIndex(identiy => {
    // @ts-ignore
    return tokens[identiy] === token
  })

  if (tokenIdentityIndex > -1) {
    return tokensIndentities[tokenIdentityIndex]
  }

  return null
}