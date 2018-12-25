import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import styles from './styles'

const SignIn = ({ classes }) => (
  <Grid container className={classes.root}>
    <Grid item xs={12}>
      <form noValidate autoComplete="off">
        <Paper elevation={4}>
          <Grid container direction="column" spacing={0}>
            <Grid item xs={12} className={classes.header}>
              <h2>Sign In</h2>
            </Grid>

            <Grid item xs={12} className={classes.textFields}>
              <Grid container justify="center" spacing={0}>
                <Grid item xs={9} className={classes.txt}>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    margin="normal"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={9} className={classes.txt}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button className={classes.button}>
                <h3>SIGN IN</h3>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Grid>
  </Grid>
)

export default withStyles(styles)(SignIn)
