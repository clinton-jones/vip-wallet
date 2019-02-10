import React, { Component } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { enableThor } from '../actions/appActions'
import { fetchBalances } from '../actions/balanceActions'

import QRCode from 'qrcode.react'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import EnableThorDialog from './EnableThorDialog'

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
  render () {
    const { account, classes } = this.props
    return (
      <div className="dashboard">

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
          <Button variant="contained">
            Copy Address
          </Button>
        </Grid>

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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
