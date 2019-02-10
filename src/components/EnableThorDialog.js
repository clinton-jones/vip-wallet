import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
});

const EnableThorDialog = (props) => {
  const { handleEnableClick, isOpen } = props
  return (
    <Dialog
      open={isOpen}
      aria-labelledby="simple-dialog-title"
    >
      <DialogTitle id="simple-dialog-title">Permission Required</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          VIP Wallet needs permission from Comet to access your public address.
        </DialogContentText>
        <DialogActions>
          <Button color="primary">
            Cancel
          </Button>
          <Button onClick={handleEnableClick} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

EnableThorDialog.propTypes = {
  handleEnableClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default withStyles(styles)(EnableThorDialog)
