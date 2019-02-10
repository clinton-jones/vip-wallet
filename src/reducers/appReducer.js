import { SET_ACCOUNT,
         SET_APP_INITIALIZED,
         SET_THOR_ENABLED
       } from '../actions/appActions'

export default (
  state = {
    account: null,
    hasCometExtension: false,
    initialized: false,
    thorEnabled: false,
    tokens: {},
    web3: null,
  },
  action,
) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...state,
        account: action.account,
      }
    case SET_APP_INITIALIZED:
      return {
        ...state,
        account: action.account,
        initialized: true,
        hasCometExtension: action.hasCometExtension,
        tokens: action.tokens,
        web3: action.web3,
      }
    case SET_THOR_ENABLED:
      return { ...state, thorEnabled: action.isEnabled }
    default:
      return state
  }
}
