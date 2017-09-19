import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { withStyles } from 'material-ui/styles'

import styles from './styles.js'
import Logo from '../Logo'

const Header = ({ classes }) => (
  <div className={classes.root}>
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
  </div>
)

export default withStyles(styles)(Header)
