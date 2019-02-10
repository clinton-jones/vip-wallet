import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { enableThor } from '../actions/appActions'
import { fetchBalances } from '../actions/balanceActions'

import EnableThorDialog from './EnableThorDialog'

class Dashboard extends Component {
  render () {
    const { account } = this.props
    return (
      <div className="dashboard">

        <EnableThorDialog
          handleEnableClick={this.handleEnableClick}
          isOpen={!account} />
      </div>
    )
  }
  handleEnableClick = () => {
    this.props.enableThor()
  }
}

Dashboard.propTypes = {
  account: PropTypes.string,
  web3: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  account: state.app.account,
  web3: state.app.web3,
})

const mapDispatchToProps = dispatch => ({
  enableThor: () => dispatch(enableThor()),
  fetchBalances: () => dispatch(fetchBalances()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
