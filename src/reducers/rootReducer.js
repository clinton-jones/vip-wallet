import { combineReducers } from 'redux'

import appReducer from './appReducer'
import balanceReducer from './balanceReducer'

export default combineReducers({
  app: appReducer,
  balances: balanceReducer,
})
