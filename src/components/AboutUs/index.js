import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import styles from './styles'

const AboutUs = ({ classes }) => (
  <Grid container justify="center" className={classes.content}>
    <Grid item className={classes.image} xs={8}>
      <img
        src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png"
        alt="logo"
      />
    </Grid>
    <Grid item className={classes.info} xs={4}>
      <h1>Who Are We?</h1>
      <span>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </span>
    </Grid>
  </Grid>
)

export default withStyles(styles)(AboutUs)
