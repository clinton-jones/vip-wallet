export const SET_ACCOUNT = 'SET_ACCOUNT'
export const SET_APP_INITIALIZED = 'SET_APP_INITIALIZED'
export const SET_HAS_COMET = 'SET_HAS_COMET'
export const SET_THOR_ENABLED = 'SET_THOR_ENABLED'

const Web3 = require("web3")

const abi = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
]

export function initializeApp () {
  return async (dispatch) => {

    const hasCometExtension = typeof thor !== 'undefined'
    if (!hasCometExtension) {
      return dispatch({
        type: SET_APP_INITIALIZED,
      })
    }

    const web3 = await getWeb3()
    const addresses = await web3.eth.getAccounts()

    const tokens = require('../tokens.json')
    for (const tokenKey of Object.keys(tokens)) {
      const token = tokens[tokenKey]
      tokens[tokenKey].contract = new web3.eth.Contract(abi, token.contractAddress)
    }

    dispatch({
      type: SET_APP_INITIALIZED,
      account: addresses[0],
      hasCometExtension,
      tokens,
      web3,
    })
  }
}

async function getWeb3 () {
  /*eslint no-undef: 0*/
  const web3 = new Web3(thor)
  thorifyExtend(web3)
  web3.currentProvider.on = null
  return web3
}

export function enableThor () {
  return async (dispatch) => {
    thor.enable().then(accounts => {
      dispatch({
        type: SET_ACCOUNT,
        account: accounts[0],
      })
    })
  }
}
