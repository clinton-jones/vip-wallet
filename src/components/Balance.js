import React from 'react'
import BigNumber from 'bignumber.js'
import PropTypes from 'prop-types'

const Balance = (props) => {
  const { balance, currency } = props
  const value = balance.dividedBy( new BigNumber(10).pow(18) ).toNumber()
  return (
    <div className="balance">
      <div className="value">{value}</div>
      <div className="currency">{currency}</div>
    </div>
  )
}

Balance.propTypes = {
  balance: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
}

export default Balance
