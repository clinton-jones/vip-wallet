import React, { Component } from 'react'
import { connect } from 'react-redux'

import { initializeApp } from './actions/appActions'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Dashboard from './components/Dashboard'
import GetComet from './components/GetComet'


class App extends Component {
  componentDidMount () {
    this.props.initializeApp()
  }
  render () {
    const { hasComet } = this.props.app
    return (
      <div className="app">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              VIP Wallet
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {!hasComet && <GetComet />}
          {hasComet && <Dashboard />}
        </main>
        <footer>
          <span>&copy; 2019 the comets of cometverse</span>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
 app: state.app,
})

const mapDispatchToProps = dispatch => ({
  initializeApp: () => dispatch(initializeApp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
