import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBalances } from './actions/balanceActions'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <img src={'https://cometverse.com/comet/3.svg'} className="vip-logo" alt="logo" />
          <h1>VIP Wallet</h1>
        </header>
        <main>
          <span>Lots of cool stuff goes here.</span>
        </main>
        <footer>
          <span>&copy; 2019 the comets of cometverse</span>
        </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
