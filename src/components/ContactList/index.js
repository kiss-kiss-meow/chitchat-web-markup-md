import React from 'react'
import Grid from 'material-ui/Grid'
import List from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import ContactListItem from 'components/ContactListItem'
import styles from './styles'

const ContactList = ({ classes }) => (
  <Grid container spacing={0} className={classes.root}>
    <Grid item xs={12}>
      <List>
        {[0, 1, 2, 3, 4].map(value => (
          <ContactListItem key={value} item={{ id: value }} />
        ))}
      </List>
    </Grid>
  </Grid>
)

export default withStyles(styles)(ContactList)
