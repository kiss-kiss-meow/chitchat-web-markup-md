import React from 'react'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

const MessageForm = ({ classes }) => (
  <Grid container spacing={0} className={classes.root}>
    <Grid item xs={12}>
      <TextField
        placeholder="Type a message..."
        multiline
        fullWidth
        margin="normal"
        InputClassName={classes.textField}
      />
    </Grid>
  </Grid>
)

export default withStyles(styles)(MessageForm)
