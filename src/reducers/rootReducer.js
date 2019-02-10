import { combineReducers } from 'redux'

import appReducer from './appReducer'
import balanceReducer from './balanceReducer'
import transactionReducer from './transactionReducer'

export default combineReducers({
  app: appReducer,
  balances: balanceReducer,
  transaction: transactionReducer,
})
