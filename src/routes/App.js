import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from 'routes/auth'
import MainRoute from 'routes/main'

const App = () => (
  <Switch>
    <Route path="/auth" component={AuthRoute} />
    <Route component={MainRoute} />
  </Switch>
)

export default App
