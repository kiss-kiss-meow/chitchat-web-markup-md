import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui'
import Button from 'material-ui/Button'
import styles from './styles'

const Home = ({ classes }) => (
  <Grid container>
    <Grid item xs={12}>
      <Grid container className={classes.content}>
        <Grid item xs={8} className={classes.images}>
          <img
            src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png"
            alt="logo"
          />
        </Grid>
        <Grid item xs={4} className={classes.info}>
          <h2>Where Work Happens</h2>
          <span>
            We provide independent insurance agents with enterprise level
            insights
          </span>
          <Button className={classes.btn}>Get Started</Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Home)
