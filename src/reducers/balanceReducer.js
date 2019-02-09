import { REQUEST_BALANCES, RECEIVE_BALANCES } from '../actions/balanceActions'

export default (
  state = {},
  action,
) => {
  switch (action.type) {
    case REQUEST_BALANCES:
      return { isFetching: true }
    case RECEIVE_BALANCES:
      return { isFetching: false }
    default:
      return state
  }
}
