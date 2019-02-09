export const REQUEST_BALANCES = 'REQUEST_BALANCES'
export const RECEIVE_BALANCES = 'RECEIVE_BALANCES'

export function fetchBalances () {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_BALANCES,
    })
    dispatch({
      type: RECEIVE_BALANCES,
    })
  }
}
