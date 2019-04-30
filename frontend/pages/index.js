import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Login from '../components/Login'
import Header from '../components/Header'
import Meta from '../components/Meta'

const styles = theme => ({
  root: {
    margin: '2em'
  },
})

class Index extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Meta />
        <Header />
        <Login />
      </div>
    )
  }
}

export default withStyles(styles)(Index)
