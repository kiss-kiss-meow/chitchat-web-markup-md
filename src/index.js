import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from 'registerServiceWorker'
import App from 'routes/App'

const theme = createMuiTheme({
  mainColorPalette: deepPurple,
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
