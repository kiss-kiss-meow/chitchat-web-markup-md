import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import Home from 'routes/main/Home'
import AboutUsRoute from 'routes/main/AboutUs'
import Header from 'components/Header'
import Footer from 'components/Footer'

const MainRoute = () => (
  <Grid container>
    {/* Header */}
    <Grid item xs={12}>
      <Header />
    </Grid>

    {/* Routes */}
    <Grid item xs={12}>
      <Switch>
        <Route path="/about" component={AboutUsRoute} />
        <Route path="/" component={Home} />
      </Switch>
    </Grid>

    {/* Footer */}
    <Grid item xs={12}>
      <Footer />
    </Grid>
  </Grid>
)

export default MainRoute
