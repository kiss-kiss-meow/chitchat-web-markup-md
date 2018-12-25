import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SignIn from 'components/SignIn'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 8,
  },
})

const SignInRoute = ({ classes }) => (
  <div className={classes.root}>
    <Grid container justify="center">
      <Grid item md={3} sm={6} xs={10}>
        <SignIn />
      </Grid>
    </Grid>
  </div>
)

export default withStyles(styles)(SignInRoute)
