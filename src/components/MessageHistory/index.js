import React from 'react'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { GridList } from 'material-ui/GridList'
import MessageHistoryItem from 'components/MessageHistoryItem'
import styles from './styles'

const messages = [
  {
    id: 0,
    text: 'Hi!',
    isMe: true
  },
  {
    id: 1,
    text: 'Hello!',
    isMe: false
  },
  {
    id: 2,
    text: 'How are you?',
    isMe: true
  },
  {
    id: 3,
    text: 'I"m okay! What about you?',
    isMe: false
  },
  {
    id: 4,
    text:
      'I"m fine, thank you. Haven"t seen you for a long time! Shall we go out some day?',
    isMe: true
  },
  {
    id: 5,
    text:
      'Sure! It would be nice! Let"s do it tomorrow. 10 o"clock is okay for you?',
    isMe: false
  },
  {
    id: 6,
    text: 'Sounds great! See you tommorrow then, bye.',
    isMe: true
  },
  {
    id: 7,
    text: 'See you soon.',
    isMe: false
  }
]

const MessageHistory = ({ classes }) => (
  <Grid container spacing={0} className={classes.root}>
    <Grid item xs={12}>
      <GridList cols={1} cellHeight="auto" spacing={12}>
        {messages.map(msg => <MessageHistoryItem key={msg.id} message={msg} />)}
      </GridList>
    </Grid>
  </Grid>
)

export default withStyles(styles)(MessageHistory)
