import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Home from 'routes/main/Home'
import AboutUsRoute from 'routes/main/AboutUs'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styles from './styles'

const MainRoute = ({ classes }) => (
  <Grid
    container
    className={classes.root}
    direction="column"
    wrap="nowrap"
    spacing={0}
  >
    {/* Header */}
    <Grid item>
      <Header />
    </Grid>

    {/* Routes */}
    <Grid item className={classes.content}>
      <Switch>
        <Route path="/about" component={AboutUsRoute} />
        <Route path="/" component={Home} />
      </Switch>
    </Grid>

    {/* Footer */}
    <Grid item>
      <Footer />
    </Grid>
  </Grid>
)

export default withStyles(styles)(MainRoute)
