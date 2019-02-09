import { SET_APP_INITIALIZED,
         SET_HAS_COMET,
         SET_THOR_ENABLED
       } from '../actions/appActions'

export default (
  state = {
    hasComet: false,
    initialized: false,
    thorEnabled: false,
  },
  action,
) => {
  switch (action.type) {
    case SET_APP_INITIALIZED:
      return { ...state, initialized: true }
    case SET_HAS_COMET:
      return { ...state, hasComet: action.hasComet }
    case SET_THOR_ENABLED:
      return { ...state, thorEnabled: action.isEnabled }
    default:
      return state
  }
}
