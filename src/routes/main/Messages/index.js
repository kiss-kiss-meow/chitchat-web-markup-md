import React from 'react'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import ContactList from 'components/ContactList'
import MessageHistory from 'components/MessageHistory'
import MessageForm from 'components/MessageForm'
import styles from './styles'

const Messages = ({ classes }) => (
  <Grid container spacing={0} className={classes.root}>
    <Grid item lg={2} md={3} xs={5}>
      <ContactList />
    </Grid>
    <Grid item lg={10} md={9} xs={7}>
      <Grid
        container
        direction="column"
        justify="space-between"
        spacing={0}
        className={classes.messages}
      >
        <Grid item xs={12} className={classes.messageHistory}>
          <MessageHistory />
        </Grid>
        <Grid item xs={12} className={classes.messageForm}>
          <MessageForm />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(styles)(Messages)
