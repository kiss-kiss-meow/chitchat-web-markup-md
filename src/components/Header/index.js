import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import styles from './styles.js'
import Logo from '../Logo'

const Header = ({ classes }) => (
  <Grid container>
    <Grid item xs={12}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar disableGutters>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.flex}>
            <Logo />
          </div>
          <NavLink to="/auth/sign-up" className={classes.link}>
            <Button className={classes.button}>Sign Up</Button>
          </NavLink>
          <NavLink to="/auth/sign-in" className={classes.link}>
            <Button className={classes.button}>Sign In</Button>
          </NavLink>
          <NavLink to="/about" className={classes.link}>
            <Button className={classes.button}>About Us</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Header)
