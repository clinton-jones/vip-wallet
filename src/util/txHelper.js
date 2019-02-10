import BigNumber from 'bignumber.js'
import { addHexPrefix } from 'ethereumjs-util'

export const BN_DEC = new BigNumber(10).pow(18)
const VIP_SIMPLE_TRANSFER_METHOD_ID = 'a9059cbb'
const ARG_LENGTH = 64

const leftPadZero = (value, targetLength) => {
  return `${new Array(Math.max(0, targetLength - value.length)).fill(0).join('')}${value}`
}

export function weiAmount (decAmount) {
  return new BigNumber(decAmount).multipliedBy(BN_DEC)
}

export function createVetTx (from, to, decAmount) {
  const amount = weiAmount(decAmount)
  return {
    from, to, value: amount.toNumber(),
  }
}

const buildVipDataStr = ({ to, hexValue }) => {
  let dataStr = '0x'
  dataStr += VIP_SIMPLE_TRANSFER_METHOD_ID

  const unpredixedTo = addHexPrefix(to).substr(2)
  dataStr += leftPadZero(unpredixedTo, ARG_LENGTH)

  const unpredixedValue = addHexPrefix(hexValue).substr(2)
  dataStr += leftPadZero(unpredixedValue, ARG_LENGTH)

  return dataStr
}

export function createVipTx (from, to, decAmount, gas) {
  return {
    from,
    to,
    data: buildVipDataStr({ to, hexValue: weiAmount(decAmount).toString(16) }),
    gas,
  }
}
