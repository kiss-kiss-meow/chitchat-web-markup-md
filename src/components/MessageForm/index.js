import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const MessageForm = ({ classes }) => (
  <Grid container spacing={0} className={classes.root}>
    <Grid item xs={12}>
      <TextField
        placeholder="Type a message..."
        multiline
        fullWidth
        margin="normal"
        InputProps={{ className: classes.textField }}
      />
    </Grid>
  </Grid>
)

export default withStyles(styles)(MessageForm)
