export const SET_APP_INITIALIZED = 'SET_APP_INITIALIZED'
export const SET_HAS_COMET = 'SET_HAS_COMET'
export const SET_THOR_ENABLED = 'SET_THOR_ENABLED'

export function initializeApp () {
  return (dispatch) => {
    dispatch(setHasComet())
    dispatch({
      type: SET_APP_INITIALIZED,
    })
  }
}

function setHasComet () {
  const hasComet = typeof thor !== 'undefined'
  return {
    type: SET_HAS_COMET,
    hasComet,
  }
}
