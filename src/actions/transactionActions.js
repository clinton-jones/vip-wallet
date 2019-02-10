export const SET_TRANSACTION_TOKEN_KEY = 'SET_TRANSACTION_TOKEN_KEY'

export function setTransactionToken (tokenKey) {
  return {
    type: SET_TRANSACTION_TOKEN_KEY,
    tokenKey,
  }
}
