import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import AboutUs from 'components/AboutUs'
import styles from './styles'

const AboutUsRoute = ({ classes }) => (
  <Grid container className={classes.root} spacing={0}>
    <Grid item xs={12}>
      <AboutUs />
    </Grid>
  </Grid>
)

export default withStyles(styles)(AboutUsRoute)
