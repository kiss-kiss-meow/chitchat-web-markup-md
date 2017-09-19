import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import SignUpRoute from 'routes/auth/SignUp'
import SignInRoute from 'routes/auth/SignIn'

const AuthRoute = ({ match }) => (
  <Grid container>
    <Grid item xs={12}>
      <Switch>
        <Route path={`${match.path}/sign-up`} component={SignUpRoute} />
        <Route path={`${match.path}/sign-in`} component={SignInRoute} />
      </Switch>
    </Grid>
  </Grid>
)

export default AuthRoute
