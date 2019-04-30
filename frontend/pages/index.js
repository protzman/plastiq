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

injectGlobal`
  @font-face {
    font-family: 'Raleway', sans-serif !important;
    font-style: normal;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif !important;
  }
`
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
