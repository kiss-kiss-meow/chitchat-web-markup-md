import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import styles from './styles'

const ContactListItem = ({ item, classes }) => (
  <ListItem key={item.id} dense button>
    <Avatar className={classes.online} />
    <ListItemText primary={`Profile/Contact ${item.id + 1}`} />
  </ListItem>
)

export default withStyles(styles)(ContactListItem)
