import { SET_APP_INITIALIZED } from '../actions/appActions'
import { REQUEST_BALANCES, RECEIVE_BALANCES } from '../actions/balanceActions'

import BigNumber from 'bignumber.js'

export default (
  state = {
    vet: 0,
    tokens: {},
    isFetching: false,
  },
  action,
) => {
  switch (action.type) {
    case REQUEST_BALANCES:
      return { ...state, isFetching: true }
    case RECEIVE_BALANCES:
      return {
        ...state,
        isFetching: false,
        tokens: action.tokenBalances,
      }
    case SET_APP_INITIALIZED:
      const tokens = {}
      for (const tokenKey of Object.keys(action.tokens)) {
        tokens[tokenKey] = new BigNumber(0)
      }
      return {
        ...state,
        tokens,
      }
    default:
      return state
  }
}
