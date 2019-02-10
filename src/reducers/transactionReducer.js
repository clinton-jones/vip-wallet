import { SET_TRANSACTION_TOKEN_KEY } from '../actions/transactionActions'

export default (
  state = {
    tokenKey: null,
    amount: 0,
    to: '',
  },
  action,
) => {
  switch (action.type) {
    case SET_TRANSACTION_TOKEN_KEY:
      return { ...state, tokenKey: action.tokenKey }
    default:
      return state
  }
}
