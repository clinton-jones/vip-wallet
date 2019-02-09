import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBalances } from '../actions/balanceActions'


class Dashboard extends Component {
  render () {
    return (
      <div className="dashboard">
        <span>Dashboard</span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
  fetchBalances: () => dispatch(fetchBalances()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
