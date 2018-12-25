import React from 'react'
import GridListTile from '@material-ui/core/GridList'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import styles from './styles'

const genericClassNames = (base, additional) => (classes, message) => {
  let classNames = [classes[base]]
  if (message.isMe) classNames.push(classes[additional])
  return classNames.join(' ')
}

const rootClassNames = genericClassNames('root', 'myMessageAlign')
const messageClassNames = genericClassNames('message', 'myMessageBackground')

const MessageHistoryItem = ({ message, classes }) => (
  <GridListTile
    key={message.id}
    cols={1}
    className={rootClassNames(classes, message)}
  >
    <Typography type="body1" className={messageClassNames(classes, message)}>
      {message.text}
    </Typography>
  </GridListTile>
)

export default withStyles(styles)(MessageHistoryItem)
