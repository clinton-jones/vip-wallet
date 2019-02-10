import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { enableThor } from '../actions/appActions'
import { fetchBalances } from '../actions/balanceActions'

import copy from 'copy-to-clipboard'

import QRCode from 'qrcode.react'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Balance from './Balance'
import EnableThorDialog from './EnableThorDialog'

import { createVipTx } from '../util/txHelper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.balanceInterval = null
  }
  componentDidMount () {
    this.balanceInterval = setInterval(this.props.fetchBalances, 5000)
  }
  componentWillUnmount () {
    clearInterval(this.balanceInterval)
  }
  render () {
    const { account } = this.props
    return (
      <div className="dashboard">
        {!!account && this.renderDashboardContent()}
        <EnableThorDialog
          handleEnableClick={this.handleEnableClick}
          isOpen={!account} />
      </div>
    )
  }
  renderDashboardContent () {
    const { account, balances, classes, tokens } = this.props
    return (
      <React.Fragment>
        <Grid
          className={classes.root}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Paper className={classes.paper} elevation={1}>
            <QRCode size={128} value={account} />
          </Paper>
          <Typography variant="h6">
            Deposit Address:
          </Typography>
          <Typography variant="body1" paragraph={true}>
            {account}
          </Typography>
          <Button variant="contained" onClick={this.handleCopyClick}>
            Copy Address
          </Button>
        </Grid>

        <div className="token-list">
          <Paper elevation={1}>
            <List>
              {Object.keys(tokens).map( (tokenKey, i) => {
                const token = tokens[tokenKey]
                return (
                  <ListItem button key={i} onClick={this.handleTokenListItemClick(token)}>
                    <div className="token-list-item">
                      <div className="token-icon">
                        <img src={require('../img/'+token.icon)} alt={tokenKey+'-icon'} />
                      </div>
                      <div className="token-name">
                        <span>{token.name}</span>
                      </div>
                      <div className="token-balance">
                        <Balance
                          balance={balances.tokens[tokenKey]}
                          currency={token.ticker}
                        />
                      </div>
                    </div>
                  </ListItem>
                )
              })}
            </List>
          </Paper>
        </div>
      </React.Fragment>
    )
  }
  handleCopyClick = () => {
    const { account } = this.props
    copy(account)
  }
  handleEnableClick = () => {
    this.props.enableThor()
  }
  handleTokenListItemClick = token => () => {
    const { account } = this.props
    const tx = createVipTx(account, token.contractAddress, 100, token.gas)
    this.sendTransaction(tx)
  }
  async sendTransaction (transaction) {
    // const { web3 } = this.props
    // const txReceipt = await web3.eth.sendTransaction(transaction)
  }
}

Dashboard.propTypes = {
  account: PropTypes.string,
  balances: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  web3: PropTypes.object.isRequired,

  enableThor: PropTypes.func.isRequired,
  fetchBalances: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  account: state.app.account,
  balances: state.balances,
  tokens: state.app.tokens,
  web3: state.app.web3,
})

const mapDispatchToProps = dispatch => ({
  enableThor: () => dispatch(enableThor()),
  fetchBalances: () => dispatch(fetchBalances()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))
