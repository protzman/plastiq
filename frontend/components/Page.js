import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Header from './Header'
import Meta from './Meta'
import { theme } from '../static/mui_theme'

const styles = ({
  // theme already delcared in upper scope so just use styles
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
})

const Inner = styled.div`
  margin: 2em;
`

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

class Page extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Page
