import BigNumber from 'bignumber.js'

export const REQUEST_BALANCES = 'REQUEST_BALANCES'
export const RECEIVE_BALANCES = 'RECEIVE_BALANCES'

export function fetchBalances () {
  return async (dispatch, getState) => {
    dispatch({
      type: REQUEST_BALANCES,
    })

    const state = getState()

    const { account, tokens } = state.app

    const tokenBalances = {}
    for (const tokenKey of Object.keys(tokens)) {
      const token = tokens[tokenKey]
      const rawBalance = await token.contract.methods.balanceOf(account).call()
      const balance = await new BigNumber(rawBalance)
      tokenBalances[tokenKey] = balance
    }

    dispatch({
      type: RECEIVE_BALANCES,
      tokenBalances,
    })
  }
}
