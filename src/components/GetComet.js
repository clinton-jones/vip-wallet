import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
});

const GetComet = (props) => {
  const { classes } = props
  return (
    <Grid
      className={classes.root}
      container
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Paper className={classes.paper} elevation={1}>
            <Typography variant="h6">
              Get the Comet extension.
            </Typography>
            <Typography paragraph={true} varaint="body1">
              The Comet extension for chrome is required to use this wallet.
            </Typography>
            <Button
              color="primary"
              href="https://chrome.google.com/webstore/detail/comet/jpkkakbelpcambmhdcaoidiejaikiemn"
              variant="contained"
            >
              Get Comet
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

GetComet.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GetComet)
