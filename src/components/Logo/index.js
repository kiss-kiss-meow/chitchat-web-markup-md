import React from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles.js'

const Logo = ({ classes }) => (
  <div className={classes.root}>
    <NavLink to="/" className={classes.link}>
      <ButtonBase focusRipple key="logo" className={classes.buttonBase}>
        <div className={classes.imageSrc} />
        <div className={classes.imageBackdrop} />
      </ButtonBase>
    </NavLink>
  </div>
)

export default withStyles(styles)(Logo)
