import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import styles from './styles'

const Home = ({ classes }) => (
  <Grid container justify="center" className={classes.root} spacing={0}>
    <Grid item>
      <div className={classes.image}>
        <img
          src="https://a.slack-edge.com/52353/marketing/img/home/home_illo.png"
          alt="logo"
        />
      </div>
    </Grid>
    <Grid item className={classes.infoItem}>
      <h2>Where Work Happens</h2>
      <p>
        We provide independent insurance agents with enterprise level insights
      </p>
      <Button className={classes.btn}>Get Started</Button>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Home)
