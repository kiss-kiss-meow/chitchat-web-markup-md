import React from 'react'
import { withStyles } from 'material-ui/styles'
import styles from './styles'
import Grid from 'material-ui/Grid'

const Footer = ({ classes }) => (
  <Grid container>
    <Grid item xs={12}>
      <div className={classes.footer}>
        <span>© 2017 Chit-Chat</span>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Footer)
