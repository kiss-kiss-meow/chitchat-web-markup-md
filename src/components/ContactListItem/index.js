import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const ContactListItem = ({ item, classes }) => (
  <ListItem key={item.id} dense button>
    <Avatar className={classes.online} />
    <ListItemText primary={`Profile/Contact ${item.id + 1}`} />
  </ListItem>
)

export default withStyles(styles)(ContactListItem)
