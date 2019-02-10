import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

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
    const { hasCometExtension } = this.props
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
          {!hasCometExtension && <GetComet />}
          {hasCometExtension && <Dashboard />}
        </main>
        <footer>
          <span>&copy; 2019 the comets of cometverse</span>
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  hasCometExtension: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
 hasCometExtension: state.app.hasCometExtension,
})

const mapDispatchToProps = dispatch => ({
  initializeApp: () => dispatch(initializeApp()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
